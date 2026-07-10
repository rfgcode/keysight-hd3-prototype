import Image from "next/image";

const TILES = [
  {
    icon: "/images/icon-warranty.svg",
    label: (
      <>
        Up to 5 Years
        <br />
        Warranty
      </>
    ),
  },
  {
    icon: "/images/icon-update.svg",
    label: (
      <>
        Add Hardware.
        <br />
        Enhance Software.
      </>
    ),
  },
];

export default function TrustElement() {
  return (
    <section className="relative flex w-full items-center gap-6 overflow-hidden px-4 py-3">
      <div aria-hidden className="absolute inset-0">
        <Image src="/images/trust-tile-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/24" />
      </div>

      <p className="relative shrink-0 whitespace-nowrap text-[13px] font-medium leading-[1.4] text-white">
        Why You Should
        <br />
        Work with Keysight
      </p>

      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-2">
          {[...TILES, ...TILES].map((tile, i) => (
            <div
              key={i}
              className="relative flex h-[60px] shrink-0 items-start gap-3 overflow-hidden rounded-lg py-3 pl-4 pr-6"
            >
              <div aria-hidden className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg bg-[#871518]" />
                <Image
                  src="/images/trust-inner-bg.jpg"
                  alt=""
                  fill
                  sizes="240px"
                  className="rounded-lg object-cover opacity-80"
                />
                <div className="absolute inset-0 rounded-lg bg-black/40" />
              </div>
              <Image
                src={tile.icon}
                alt=""
                width={36}
                height={36}
                className="relative shrink-0"
              />
              <p className="relative shrink-0 whitespace-nowrap text-[13px] font-medium leading-[1.4] text-white">
                {tile.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
