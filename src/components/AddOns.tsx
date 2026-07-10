import Image from "next/image";

const ADD_ONS = [
  {
    title: "Keysight Calibration",
    description:
      "Add OEM calibration before shipment for measurement confidence from day one.",
  },
  {
    title: "KeysightCare with Up to 5-Year Warranty",
    description:
      "Add extended warranty coverage and priority technical support directly from Keysight.",
  },
];

export default function AddOns() {
  return (
    <section className="flex w-full flex-col items-start gap-3 bg-[#f6f7f9] px-4 py-8">
      <h2 className="w-full text-[23px] font-medium leading-[1.4] text-black">
        Complete Your HD3 Purchase
      </h2>
      <div className="flex w-full flex-col items-start gap-2">
        {ADD_ONS.map((item) => (
          <div
            key={item.title}
            className="flex w-full items-center rounded-2xl bg-white px-4 py-5"
          >
            <div className="flex w-full items-start gap-3">
              <Image
                src="/images/icon-circle-check-filled.svg"
                alt=""
                width={20}
                height={24}
              />
              <div className="flex flex-1 flex-col items-start gap-1">
                <p className="text-[16px] font-medium leading-[1.5] text-black">
                  {item.title}
                </p>
                <p className="text-[13px] leading-[1.5] text-black">
                  {item.description}
                </p>
                <button
                  type="button"
                  className="text-[13px] font-medium leading-[1.5] text-keysight-red hover:underline"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
