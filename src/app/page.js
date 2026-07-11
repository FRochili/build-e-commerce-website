import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <Header />
      <Hero />
      <main className="flex flex-1 w-full flex-col justify-between bg-white dark:bg-black sm:items-start">
        <ProductSection />
      </main>
    </div>
  );
}
