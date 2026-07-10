import Accordion from "./ui/Accordion";
import KeyMeasurementBody from "./KeyMeasurementBody";

const ITEMS = [
  {
    question: "Power Integrity & Ripple Measurement",
    answer: <KeyMeasurementBody />,
  },
  {
    question: "Serial Bus Debugging (CAN, LIN, FlexRay)",
    answer: <KeyMeasurementBody />,
  },
  {
    question: "Capturing Rare Glitches And Intermittent Signals",
    answer: <KeyMeasurementBody />,
  },
  {
    question: "Frequency and RF Signal Analysis",
    answer: <KeyMeasurementBody />,
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
