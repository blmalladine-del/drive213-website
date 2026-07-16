import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className, dark }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2 font-bold text-xl', className)}>
      <Image
        src="/images/logo.jpg"
        alt="DRIVE²¹³"
        width={40}
        height={40}
        className="rounded-lg"
      />
      <span className={dark ? 'text-white' : 'text-foreground'}>DRIVE²¹³</span>
    </Link>
  );
}
