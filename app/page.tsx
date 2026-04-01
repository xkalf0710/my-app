import { CategorySection } from "./components/categories";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import PopularCourses from "./components/PopularCourses";
import TrustSection from "./components/TrustSection";


export default function Home() {
  return (
   <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategorySection />
      <FeatureCards />
      <PopularCourses />
      <TrustSection />
      <Footer/>
   </main>
  );
}
