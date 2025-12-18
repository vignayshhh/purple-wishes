import Hero from "@/components/Hero";
import GiftSection from "@/components/GiftSection";
import FoodMenu from "@/components/FoodMenu";
import MemoryLane from "@/components/MemoryLane";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-purple-500 selection:text-white">
      <Hero />
      <GiftSection />
      <FoodMenu />
      <MemoryLane />
      
      <footer className="py-8 text-center text-purple-300/60 font-sans text-sm">
        <p>Made with 💜 just for you.</p>
      </footer>
    </div>
  );
}