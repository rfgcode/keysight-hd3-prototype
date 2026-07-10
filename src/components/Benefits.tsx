import Accordion from "./ui/Accordion";
import HD3SummaryBody from "./HD3SummaryBody";

const ITEMS = [
  {
    question: "Power Integrity & Ripple Measurement",
    answer: <HD3SummaryBody size="accordion" />,
  },
  {
    question: "Serial Bus Debugging (CAN, LIN, FlexRay)",
    answer: <HD3SummaryBody size="accordion" />,
  },
  {
    question: "Capturing Rare Glitches And Intermittent Signals",
    answer: <HD3SummaryBody size="accordion" />,
  },
  {
    question: "Frequency and RF Signal Analysis",
    answer: <HD3SummaryBody size="accordion" />,
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
