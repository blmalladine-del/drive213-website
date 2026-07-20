import { getSupabaseClient } from './supabase/client';
import { queryWithTimeout } from './supabase/client';
import { siteConfig } from '@/config/site';
import type { SiteSettings, SiteSettingsRow } from '@/types/settings';

function mapRowToSettings(row: SiteSettingsRow): SiteSettings {
  return {
    name: siteConfig.name || row.company_name,
    tagline: siteConfig.tagline || row.company_tagline,
    description: siteConfig.description || row.company_description,
    phone: siteConfig.phone || row.phone,
    whatsapp: siteConfig.whatsapp || row.whatsapp_number,
    email: siteConfig.email || row.email,
    address: siteConfig.address || row.business_address,
    city: siteConfig.city || row.city,
    workingHours: siteConfig.workingHours || row.business_hours,
    company_logo_url: row.company_logo_url || '',
    hero_title: row.hero_title || 'Rent Your Ideal Car Today',
    hero_subtitle: row.hero_subtitle || 'Explore our fleet of well-maintained vehicles at competitive rates.',
    primary_cta_text: row.primary_cta_text || 'Browse Our Cars',
    faq_contact_text: row.faq_contact_text || 'Have more questions? Contact us and we\'ll be happy to help.',
    default_pickup_location: row.default_pickup_location || '',
    security_deposit_note: row.security_deposit_note || 'A security deposit is required at pickup.',
    required_documents_note: row.required_documents_note || 'Valid driver\'s license, passport or national ID, and a credit card.',
    instagram_url: row.instagram_url || '',
    facebook_url: row.facebook_url || '',
    tiktok_url: row.tiktok_url || '',
    hero_image_url: row.hero_image_url || '',
  };
}

export function defaultSiteSettings(): SiteSettings {
  return {
    ...siteConfig,
    company_logo_url: '',
    hero_title: 'Rent Your Ideal Car Today',
    hero_subtitle: 'Explore our fleet of well-maintained vehicles at competitive rates.',
    primary_cta_text: 'Browse Our Cars',
    faq_contact_text: 'Have more questions? Contact us and we\'ll be happy to help.',
    default_pickup_location: '',
    security_deposit_note: 'A security deposit is required at pickup.',
    required_documents_note: 'Valid driver\'s license, passport or national ID, and a credit card.',
    instagram_url: '',
    facebook_url: '',
    tiktok_url: '',
    hero_image_url: '/images/hero-bg.jpg',
  };
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await queryWithTimeout(
      supabase.from('site_settings').select('*').limit(1).single(),
      'site_settings',
    );

    if (error || !data) {
      return defaultSiteSettings();
    }

    return mapRowToSettings(data as unknown as SiteSettingsRow);
  } catch {
    return defaultSiteSettings();
  }
}
