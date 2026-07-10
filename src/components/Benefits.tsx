import Accordion from "./ui/Accordion";

const ITEMS = [
  {
    question: "Power Integrity & Ripple Measurement",
    answer:
      "The HD3's 14-bit ADC and low noise floor resolve small ripple and noise riding on DC rails that 8-bit scopes miss entirely.",
  },
  {
    question: "Serial Bus Debugging (CAN, LIN, FlexRay)",
    answer:
      "Hardware-based triggering and decode isolate protocol violations across automotive and industrial serial buses in seconds.",
  },
  {
    question: "Capturing Rare Glitches And Intermittent Signals",
    answer:
      "Up to 1,300,000 waveforms/second update rate means the HD3 catches infrequent glitches conventional scopes blink past.",
  },
  {
    question: "Frequency and RF Signal Analysis",
    answer:
      "Built-in FFT and frequency-domain analysis tools turn the HD3 into a capable spot check for RF and mixed-signal work.",
  },
];

export default function Benefits() {
  return (
    <section className="flex w-full flex-col items-start gap-8 bg-[#f6f7f9] px-4 py-8">
      <h2 className="w-full text-center text-[23px] font-medium leading-[1.4] text-black">
        Key Measurement Tasks the HD3 Is Built For
      </h2>
      <Accordion items={ITEMS} />
    </section>
  );
}
