import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { getEnv } from './env';

export async function createAuthClient() {
  const { url, key } = getEnv();
  const cookieStore = await cookies();

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          try {
            cookieStore.set(name, value, options);
          } catch {
            // Ignore
          }
        });
      },
    },
  });
}

export async function requireAdmin() {
  const supabase = await createAuthClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: admin } = await supabase
    .from('admin_users')
    .select('*')
    .eq('id', user.id)
    .single();

  return admin ?? null;
}
