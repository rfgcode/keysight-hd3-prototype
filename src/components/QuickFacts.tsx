import Accordion from "./ui/Accordion";

const FAQS = [
  {
    question:
      "What is the buying process on the Keysight Used Equipment Store?",
    answer:
      "Browse certified used inventory, request a quote or buy online, and Keysight handles inspection, calibration, and shipping directly.",
  },
  {
    question:
      "What is included when buying a used HD3 oscilloscope from Keysight?",
    answer:
      "Every unit ships with OEM inspection, standard calibration, power cords, and access to Keysight support and documentation.",
  },
  {
    question: "Is a used HD3 oscilloscope reliable for professional measurements?",
    answer:
      "Yes — every unit is functionally tested and certified by Keysight before resale, backed by the same support organization as new equipment.",
  },
  {
    question: "What is the HD3 oscilloscope best suited for?",
    answer:
      "Power integrity, serial bus debugging, glitch capture, and general-purpose bench measurements that benefit from 14-bit resolution.",
  },
  {
    question: "What is the advantage of a 14-bit oscilloscope like the HD3?",
    answer:
      "14-bit resolution resolves 4x more amplitude detail than a standard 12-bit scope, making small signals and noise easier to see.",
  },
  {
    question: "How does the HD3 compare to 12-bit and 8-bit oscilloscopes?",
    answer:
      "The HD3's native 14-bit ADC delivers a lower noise floor and higher effective resolution than 12-bit or 8-bit alternatives at similar bandwidths.",
  },
  {
    question: "What is Fault Hunter and how does it work on the HD3?",
    answer:
      "Fault Hunter is Keysight's automated anomaly-detection feature that continuously compares live waveforms against a baseline to flag rare faults.",
  },
  {
    question: "Which HD3 model should I choose?",
    answer:
      "Model selection depends on channel count, bandwidth, and memory needs — request a quote and a Keysight specialist can help you match the right configuration.",
  },
];

export default function QuickFacts() {
  return (
    <section className="flex w-full flex-col items-start gap-8 px-4 py-8">
      <h2 className="w-full text-[19px] font-medium leading-[1.4] text-black">
        FAQs
      </h2>
      <Accordion items={FAQS} />
    </section>
  );
}
