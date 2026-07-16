import { request as httpsRequest } from 'https';
import { request as httpRequest } from 'http';
import { createClient } from '@supabase/supabase-js';
import type { Car } from '@/types/car';
import { seedCars } from '@/data/cars';
import type { SupabaseClient } from '@supabase/supabase-js';

const QUERY_TIMEOUT_MS = 8000;

export async function queryWithTimeout<T>(promise: PromiseLike<T>, label: string): Promise<T> {
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error(`[Supabase] Query timed out: ${label}`)), QUERY_TIMEOUT_MS);
  });
  return Promise.race([promise, timeout]);
}

function nodeFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  let url: URL;
  if (input instanceof URL) {
    url = new URL(input.href);
  } else if (typeof input === 'string') {
    url = new URL(input);
  } else if ('url' in input) {
    url = new URL(input.url);
  } else {
    url = new URL(String(input));
  }

  const isHttps = url.protocol === 'https:';
  const reqFn = isHttps ? httpsRequest : httpRequest;
  const headers: Record<string, string> = {};
  if (init?.headers) {
    const h = init.headers;
    if ('forEach' in h) {
      (h as Headers).forEach((value, key) => { headers[key] = value; });
    } else {
      const plain = h as Record<string, string>;
      for (const key of Object.keys(plain)) {
        headers[key] = plain[key];
      }
    }
  }

  const controller = init?.signal;

  return new Promise((resolve, reject) => {
    const req = reqFn(
      {
        hostname: url.hostname,
        port: url.port || (isHttps ? 443 : 80),
        path: url.pathname + url.search,
        method: init?.method || 'GET',
        headers,
        rejectUnauthorized: true,
        agent: false,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          try {
            const body = Buffer.concat(chunks);
            const response = new Response(body, {
              status: res.statusCode || 200,
              statusText: res.statusMessage || '',
              headers: new Headers(res.headers as Record<string, string>),
            });
            resolve(response);
          } catch (e) {
            reject(e);
          }
        });
        res.on('error', (e) => reject(e));
      },
    );

    req.on('error', (e) => {
      if (e.message === 'aborted') {
        reject(new DOMException('The operation was aborted', 'AbortError'));
      } else {
        reject(e);
      }
    });

    if (controller) {
      controller.addEventListener('abort', () => {
        req.destroy(new DOMException('The operation was aborted', 'AbortError'));
      });
    }

    if (init?.body) {
      req.write(typeof init.body === 'string' ? init.body : String(init.body));
    }

    req.end();
  });
}

function getEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error('Missing Supabase environment variables.');
  }
  return { url, key };
}

export function getSupabaseClient() {
  const { url, key } = getEnv();

  return createClient(url, key, {
    global: {
      fetch: nodeFetch,
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

export async function fetchCars(supabase?: SupabaseClient, options?: { featured?: boolean; slug?: string }): Promise<Car[]> {
  const client = supabase ?? getSupabaseClient();
  try {
    let query = client.from('cars').select('*');
    if (options?.featured) query = query.eq('is_featured', true).eq('is_available', true);
    if (options?.slug) query = query.eq('slug', options.slug);
    const max = options?.slug ? 1 : 50;
    const { data } = await queryWithTimeout(query.limit(max), 'cars');
    if (data && data.length > 0) return data as unknown as Car[];
  } catch {}
  let fallback = [...seedCars];
  if (options?.featured) fallback = fallback.filter((c) => c.is_featured && c.is_available);
  if (options?.slug) fallback = fallback.filter((c) => c.slug === options?.slug);
  return fallback;
}

export async function fetchCar(slug: string): Promise<Car | null> {
  const cars = await fetchCars(undefined, { slug });
  return cars[0] ?? null;
}
