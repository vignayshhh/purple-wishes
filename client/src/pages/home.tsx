import Hero from "@/components/Hero";
import MemoryLane from "@/components/MemoryLane";
import GiftSection from "@/components/GiftSection";
import FoodMenu from "@/components/FoodMenu";
import SecretGift from "@/components/SecretGift";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-purple-500 selection:text-white">
      <Hero />
      <MemoryLane />
      <GiftSection />
      <FoodMenu />
      <SecretGift />
      <div className="h-20"></div>
      <footer className="py-10 text-center text-purple-300/70 font-sans text-base">
        <p>Made with 💜 from vignayyyshhh for you and you alone!</p>
        <p className="text-sm mt-2 text-purple-400/50">End of website</p>
      </footer>
    </div>
  );
}
