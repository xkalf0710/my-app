import { CategorySection } from "./components/categories";
import FeatureCards from "./components/FeatureCards";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
   <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategorySection />
      <FeatureCards />
   </main>
  );
}
