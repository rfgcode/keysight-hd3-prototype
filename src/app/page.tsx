"use client";

import { useState } from "react";
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
import StickyBar from "@/components/StickyBar";
import SummarySheet from "@/components/SummarySheet";

export default function Home() {
  const [summaryOpen, setSummaryOpen] = useState(false);

  return (
    <div className="mx-auto flex w-full flex-1 flex-col items-center bg-extra-light-gray">
      <Header />
      <main className="relative flex w-full flex-1 flex-col items-center">
        <StickyBar />
        <Hero onOpenSummary={() => setSummaryOpen(true)} />
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
      <SummarySheet open={summaryOpen} onClose={() => setSummaryOpen(false)} />
    </div>
  );
}
