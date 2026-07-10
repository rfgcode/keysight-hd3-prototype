const BUYING_GUIDE_URL =
  "https://www.keysight.com/used/us/en/knowledge/guides/used-oscilloscope-buying-guide/refurbished-oscilloscope-probes-buying-guide/";

export default function HD3SummaryBody({
  size = "sheet",
}: {
  size?: "sheet" | "accordion";
}) {
  const isSheet = size === "sheet";
  const textClass = isSheet
    ? "text-[16px] leading-[1.5] text-black"
    : "text-[13px] leading-[1.5] text-black";
  const spacingClass = isSheet ? "mb-4" : "mb-3";

  return (
    <div className={textClass}>
      <p className={spacingClass}>
        The Keysight InfiniiVision HD3 Series oscilloscope delivers a native
        14-bit ADC, 200 MHz to 1 GHz bandwidth, 50 µVRMS noise floor, and 100
        Mpts of memory across four channels.
      </p>
      <p className={spacingClass}>
        It supports hardware-based decode of eleven protocols — CAN, CAN FD,
        CAN XL, LIN, SENT, ARINC 429, MIL-STD-1553, I2C, SPI, RS-422/485, and
        USB — with some protocols enabled via software license.
      </p>
      <p>
        New to buying second-hand instruments? Start with our{" "}
        <a
          href={BUYING_GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          used oscilloscope buying guide
        </a>
        .
      </p>
    </div>
  );
}
