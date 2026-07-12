import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterAndSortSection from "@/components/FilterAndSortSection";
import Pagination from "@/components/Pagination";
import ProductSection from "@/components/ProductSection";

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans dark:bg-yellow-100">
      <Header />
      <Hero />
      <main className="flex w-full flex-col bg-white dark:bg-black sm:items-start">
        <FilterAndSortSection />
        <ProductSection />
        <Pagination />
      </main>
    </div>
  );
}
