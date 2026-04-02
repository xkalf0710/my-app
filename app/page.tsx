import { CategorySection } from "./components/categories";
import FeatureCards from "./components/FeatureCards";

import Hero from "./components/Hero";

import PopularCourses from "./components/PopularCourses";
import TrustSection from "./components/TrustSection";


export default function Home() {
  return (
   <main className="min-h-screen bg-white">
      <Hero />
      <CategorySection />
      <FeatureCards />
      <PopularCourses />
      <TrustSection />
      
   </main>
  );
}
