import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductIntro from "@/components/ProductIntro";
import Benefits from "@/components/Benefits";
import ComparisonSection from "@/components/ComparisonSection";
import AddOns from "@/components/AddOns";
import TrustElement from "@/components/TrustElement";
import Downloads from "@/components/Downloads";
import QuickFacts from "@/components/QuickFacts";
import Browse from "@/components/Browse";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col items-center bg-extra-light-gray">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Hero />
        <ProductIntro />
        <Benefits />
        <ComparisonSection />
        <AddOns />
        <TrustElement />
        <Downloads />
        <QuickFacts />
        <Browse />
      </main>
      <Footer />
    </div>
  );
}
