import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
  return data;
}
export default async function Home() {
  const products = await getProducts()
  return (
    <div className="flex flex-col flex-1 justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <Header />
      <Hero />
      <main className="flex flex-1 w-full flex-col justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ProductSection />
      </main>
    </div>
  );
}
