import Link from 'next/link';
import Image from 'next/image';
import type { Car } from '@/types/car';
import { formatCurrency, getCarPlaceholderGradient } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  featured?: boolean;
}

export function CarCard({ car, featured = false }: CarCardProps) {
  const gradient = getCarPlaceholderGradient(car.brand, car.model);

  return (
    <Link href={`/cars/${car.slug}`} className="group block">
      <div className={`relative overflow-hidden rounded-xl border border-white/[0.06] bg-black transition-all duration-500 hover:border-white/10 ${featured ? 'aspect-[4/3] md:aspect-[16/9]' : 'aspect-[4/5]'}`}>
        {/* Image */}
        <div className={`absolute inset-0 ${!car.image_url ? `bg-gradient-to-br ${gradient}` : 'bg-black'}`}>
          {car.image_url ? (
            <Image
              src={car.image_url}
              alt={`${car.brand} ${car.model}`}
              fill
              sizes={
                featured
                  ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw'
                  : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              }
              className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
              priority={featured}
              loading={featured ? undefined : 'lazy'}
            />
          ) : null}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
        </div>

        {/* Unavailable overlay */}
        {!car.is_available && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60">
            <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 px-5 py-2.5 text-center">
              <span className="text-sm font-semibold text-amber-400">Unavailable</span>
              {car.unavailable_until && (
                <span className="block text-xs text-amber-400/60">
                  Until {car.unavailable_until}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Content overlay */}
        <div className="absolute inset-0 z-[1] flex flex-col justify-end p-6">
          {/* Category + Price */}
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-amber-400/60">
              {car.category}
            </span>
            <div className="text-right">
              <span className="text-lg font-bold text-amber-400">{formatCurrency(car.daily_rate)}</span>
              <span className="text-[12px] text-white/30 ml-1">/ day</span>
            </div>
          </div>

          {/* Car name */}
          <h3 className={`font-bold text-white leading-tight mt-1 ${featured ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
            {car.brand} {car.model}
          </h3>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/35 mt-2">
            <span>{car.year}</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="capitalize">{car.transmission}</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>{car.seats} seats</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="capitalize">{car.fuel_type}</span>
          </div>

          {/* CTA */}
          <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 transition-all group-hover:text-amber-300">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
