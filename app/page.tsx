import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <News />
      </main>
      <Footer />
    </div>
  );
}
