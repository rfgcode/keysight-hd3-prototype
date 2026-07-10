const SECTIONS = [
  {
    heading: "What matters",
    items: [
      "High vertical resolution",
      "Low noise floor",
      "Clear signal visibility at low amplitudes",
    ],
  },
  {
    heading: "Where many oscilloscopes fall short",
    items: [
      "Limited resolution (8-12 bit)",
      "Noise masks small signals",
      "Inaccurate low-level measurements",
    ],
  },
  {
    heading: "Why the HD3 is different",
    items: [
      "14-bit ADC for higher measurement accuracy",
      "Low-noise front-end for uV-level signals",
      "Integrated analysis tools for faster validation",
    ],
  },
];

export default function KeyMeasurementBody() {
  return (
    <div className="flex w-full flex-col items-start gap-2 text-[13px] text-black">
      {SECTIONS.map((section) => (
        <div key={section.heading} className="flex w-full flex-col items-start">
          <p className="w-full font-medium leading-[1.5]">{section.heading}</p>
          <ul className="w-full list-disc pl-[19.5px]">
            {section.items.map((item) => (
              <li key={item} className="leading-[1.5]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
