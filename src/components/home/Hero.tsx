import Link from "next/link";
import { HERO_PRODUCT, TRUST_ITEMS } from "@/data/storefront";
import { formatNpr } from "@/lib/currency";
import {
  IconArrowRight,
  IconHeadset,
  IconRefresh,
  IconShieldCheck,
  IconTruck,
} from "../icons";

const TRUST_ICONS = {
  shield: IconShieldCheck,
  truck: IconTruck,
  refresh: IconRefresh,
  headset: IconHeadset,
};

export default function Hero() {
  return (
    <section className="container-wide py-6 sm:py-8">
      <div className="grid overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-between bg-paper pb-6 pt-2 lg:py-8 lg:pr-12">
          <div>
            <h1 className="display text-[clamp(3.6rem,7.4vw,7rem)] leading-[0.92]">
              Made for more
            </h1>

            <p className="mt-6 max-w-[480px] text-[15px] leading-relaxed text-ink-soft">
              Official cameras, audio and power gear for people who create,
              travel and work. Genuine stock, honest prices and same-day
              delivery in Kathmandu Valley.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/collections"
                className="inline-flex h-12 items-center gap-2 bg-coral px-6 text-[13px] font-semibold text-white transition-colors hover:bg-ink"
              >
                Shop all gear
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/collections?deals=true"
                className="inline-flex h-12 items-center bg-paper-deep px-6 text-[13px] font-semibold text-ink transition-colors hover:bg-line"
              >
                Explore deals
              </Link>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                ["52", "Products"],
                ["4", "Official brands"],
                ["4.9", "Customer rating"],
                ["1 yr", "Warranty"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-[24px] font-bold leading-none text-ink">
                    {value}
                  </p>
                  <p className="mt-1.5 text-[12px] text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[380px] flex-col justify-between bg-coral p-6 sm:min-h-[460px] sm:p-8 lg:min-h-[560px]">
          <p className="text-[13px] font-semibold text-white">
            Featured: {HERO_PRODUCT.title}
          </p>

          <div className="relative flex flex-1 items-center justify-center py-8">
            <img
              src={HERO_PRODUCT.image}
              alt={HERO_PRODUCT.title}
              className="max-h-[300px] w-auto max-w-full object-contain sm:max-h-[360px]"
            />
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[13px] text-white">
                {HERO_PRODUCT.storage} · 360° 8K
              </p>
              <p className="mt-1 text-[24px] font-bold text-white">
                {formatNpr(HERO_PRODUCT.price)}
              </p>
            </div>
            <Link
              href={`/products/${HERO_PRODUCT.id}`}
              className="inline-flex h-10 items-center gap-2 bg-white px-4 text-[12px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              View product
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 bg-paper-deep p-6 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((item) => {
          const Icon = TRUST_ICONS[item.icon];
          return (
            <div key={item.title} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
              <div>
                <p className="text-[13px] font-semibold text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
