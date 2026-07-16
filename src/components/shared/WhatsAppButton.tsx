'use client';

import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/i18n/LanguageProvider';
import { t } from '@/lib/i18n/translations';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'inline';
  className?: string;
  whatsapp?: string;
}

export function WhatsAppButton({ variant = 'inline', className, whatsapp = '15551234567' }: WhatsAppButtonProps) {
  const { locale } = useLocale();
  const href = `https://wa.me/${whatsapp}`;

  if (variant === 'floating') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600',
          className,
        )}
        aria-label={t('whatsapp.aria', locale)}
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600',
        className,
      )}
    >
      <MessageCircle className="h-5 w-5" />
      {t('whatsapp.label', locale)}
    </a>
  );
}
