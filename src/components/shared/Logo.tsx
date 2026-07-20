import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className, dark }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2 font-bold text-xl', className)}>
      <svg width="40" height="40" viewBox="0 0 160 160" className="rounded-lg shrink-0">
        <rect width="160" height="160" rx="24" fill="#050505"/>
        <circle cx="80" cy="80" r="48" fill="none" stroke="#F59E0B" strokeWidth="6"/>
        <path d="M55 95 L65 60 L80 90 L95 60 L105 95" stroke="#F59E0B" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M55 95 L105 95" stroke="#F59E0B" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>
      <span className={dark ? 'text-white' : 'text-foreground'}>Quick Drive</span>
    </Link>
  );
}
