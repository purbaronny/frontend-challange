"use client"

import Header from "./pages/header/page";
import Body from "./pages/body/page";
import Footer from "./pages/footer/page";

export default function BodyHome() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header tetap di atas */}
      <Header />

      {/* Body tumbuh memenuhi sisa ruang */}
      <main className="flex-grow">
        <Body />
      </main>

      {/* Footer tetap di bawah */}
      <Footer />
    </div>
  );
}
