import Image from "next/image";

const HIGHLIGHTS = [
  "Certified used direct from Keysight",
  "Save up to 45% compared to new",
  "Available with up to 5-year warranty",
  "Available with OEM calibration options",
];

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center gap-4 overflow-hidden px-6 pb-10 pt-8">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative w-[180px] px-4 py-2">
        <div className="relative aspect-[470/359] w-full">
          <Image
            src="/images/hero-instrument.png"
            alt="Keysight InfiniiVision HD3 oscilloscope"
            fill
            priority
            sizes="180px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center gap-5">
        <h1 className="text-center text-[23px] font-medium leading-[1.4] text-white">
          Keysight InfiniiVision HD3 Oscilloscopes – Certified Used with
          14-Bit ADC Precision
        </h1>

        <div className="flex w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {HIGHLIGHTS.map((text) => (
            <div
              key={text}
              className="flex w-[160px] shrink-0 flex-col gap-3 rounded-lg bg-black/16 p-4 last:mr-4"
            >
              <Image
                src="/images/icon-circle-check.svg"
                alt=""
                width={20}
                height={20}
              />
              <p className="text-[13px] leading-[1.5] text-white">{text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2">
          <button
            type="button"
            className="flex h-[26px] items-center gap-[6px] rounded-full bg-keysight-red px-3 py-1 text-[13px] font-medium text-white transition-colors hover:bg-[#c40022] active:bg-[#a3001c]"
          >
            <Image src="/images/icon-list-ul.svg" alt="" width={12} height={12} />
            Request quote
          </button>
          <button
            type="button"
            className="flex h-[26px] items-center gap-[6px] rounded-full border border-white px-3 py-1 text-[13px] font-medium text-white transition-colors hover:bg-white/10 active:bg-white/20"
          >
            <Image src="/images/icon-list-ul.svg" alt="" width={12} height={12} />
            HD3 summary
          </button>
        </div>
      </div>
    </section>
  );
}
