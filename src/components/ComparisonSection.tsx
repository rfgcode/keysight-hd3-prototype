"use client";

import Image from "next/image";
import { useState } from "react";

const ROWS = [
  {
    label: "ADC Resolution",
    hd3: "14-Bit (Native)",
    mid: "12-Bit",
    conventional: "8-bit or 10-bit",
  },
  {
    label: "Vertical Precision",
    hd3: "16,384 levels (4x more detail)",
    mid: "4,096 Levels",
    conventional: "256 to 1,024 Levels",
  },
  {
    label: "Waveform Update Rate",
    hd3: "1,300,000 wfms/s",
    mid: "< 500,000 wfms/s",
    conventional: "< 70,000 wfms/s",
  },
  {
    label: "Noise Floor (at 500MHz)",
    hd3: "50 uVrms",
    mid: "Typically > 100 uVrms",
    conventional: "Significantly Higher",
  },
];

export default function ComparisonSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative flex w-full items-start overflow-hidden px-4 py-8">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/comparison-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative flex w-full flex-1 flex-col items-start justify-center rounded-2xl bg-black shadow-[0_0_40px_rgba(233,0,41,0.24)]">
        <div className="flex w-full flex-col items-center justify-center gap-5 p-6">
          <div className="relative h-[132px] w-[160px]">
            <Image
              src="/images/comparison-photo.webp"
              alt="Keysight HD3 oscilloscope"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <h2 className="w-full text-[19px] font-medium leading-[1.4] text-white">
              Why the HD3 Delivers Higher Measurement Accuracy Than Typical
              Mid-Range Oscilloscopes
            </h2>

            {expanded && (
              <div className="flex w-full flex-col items-start gap-4 text-[16px] leading-[1.5] text-white">
                <div className="flex w-full flex-col items-start">
                  <p className="font-bold">
                    The advantage of 14-bit architecture
                  </p>
                  <p>
                    Most oscilloscopes in this class use 8–12 bit ADCs. While
                    sufficient for general-purpose measurements, they often
                    lack the resolution needed to accurately capture small
                    signal variations.
                  </p>
                  <p>
                    The number of bits in an ADC sets its vertical
                    resolution: the HD3&rsquo;s custom 14-bit ADC delivers
                    16,384 levels – 4× the resolution of a 12-bit design
                    (16,384 vs. 4,096 levels - see comparison table below),
                    and 64× the levels of an 8-bit scope. This increases
                    vertical precision and reduces measurement noise, making
                    it easier to detect low-amplitude signals on top of
                    larger waveforms.
                  </p>
                </div>
                <p>
                  The HD3 performs many functions in hardware for real-time
                  speed, and its low-noise front-end reaches roughly half the
                  noise floor of other general-purpose oscilloscopes. (50
                  µVrms vs. typically &gt;100 µVrms). 16 digital channels
                  make it well suited to inspect digital systems by capturing
                  analog and digital signals together. Compared with
                  Keysight&rsquo;s ultra-high-end UXR Series, the HD3 brings
                  true 14-bit ADC vertical resolution into a more
                  general-purpose benchtop oscilloscope class.
                </p>
                <p>
                  The differences become clear when comparing key
                  measurement parameters.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="text-[16px] leading-[1.5] text-[#d6d7d9] hover:text-white"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto rounded-b-2xl bg-[#373a36]/50 px-6 pb-6 pt-4">
          <table className="w-max min-w-full border-collapse text-[13px]">
            <thead>
              <tr>
                <th className="w-[150px] border-b border-[#373a36] py-2 text-left align-bottom font-medium text-[#e9eaed]">
                  Feature
                </th>
                <th className="w-[150px] rounded-t-lg border-b border-black/50 bg-[#373a36] px-4 py-2 text-left align-bottom font-medium text-[#e9eaed]">
                  Keysight InfiniiVision HD3
                </th>
                <th className="w-[150px] border-b border-[#373a36] px-4 py-2 text-left align-bottom font-medium text-[#e9eaed]">
                  Standard 12-Bit Class
                </th>
                <th className="w-[150px] border-b border-[#373a36] px-4 py-2 text-left align-bottom font-medium text-[#e9eaed]">
                  Conventional Midrange Scopes
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <td className="border-b border-[#373a36] py-2 font-medium text-[#e9eaed]">
                    {row.label}
                  </td>
                  <td className="border-b border-black/50 bg-[#373a36] px-4 py-2 text-[#e9eaed]">
                    {row.hd3}
                  </td>
                  <td className="border-b border-[#373a36] px-4 py-2 text-[#e9eaed]">
                    {row.mid}
                  </td>
                  <td className="border-b border-[#373a36] px-4 py-2 text-[#e9eaed]">
                    {row.conventional}
                  </td>
                </tr>
              ))}
              <tr>
                <td />
                <td className="rounded-b-lg bg-[#373a36] px-4 py-3">
                  <button
                    type="button"
                    className="w-full rounded bg-keysight-red px-[18px] py-[10px] text-[13px] font-medium text-white transition-colors hover:bg-[#c40022] active:bg-[#a3001c]"
                  >
                    Request quote
                  </button>
                </td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
