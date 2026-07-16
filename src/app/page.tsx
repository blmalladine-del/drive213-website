import { cookies } from 'next/headers';
import { fetchCars } from '@/lib/supabase/client';
import { getSiteSettings } from '@/lib/settings';
import { HomePageContent } from './HomePageContent';
import type { Locale } from '@/lib/i18n/translations';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const settings = await getSiteSettings();
  const featuredCars = await fetchCars(undefined, { featured: true });

  let locale: Locale = 'en';
  try {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('locale');
    if (localeCookie && (localeCookie.value === 'en' || localeCookie.value === 'fr')) {
      locale = localeCookie.value as Locale;
    }
  } catch {}

  return (
    <HomePageContent
      settings={settings}
      featuredCars={featuredCars}
    />
  );
}
