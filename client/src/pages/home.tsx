import { useEffect } from "react";
import Hero from "@/components/Hero";
import MemoryLane from "@/components/MemoryLane";
import GiftSection from "@/components/GiftSection";
import FoodMenu from "@/components/FoodMenu";

export default function Home() {
  useEffect(() => {
    const audio = new Audio("https://assets.mixkit.co/active_storage/musics/2/2-lofi-study.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(() => {
      console.log("Audio autoplay prevented by browser");
    });

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-purple-500 selection:text-white">
      <Hero />
      <MemoryLane />
      <GiftSection />
      <FoodMenu />
      
      <footer className="py-8 text-center text-purple-300/60 font-sans text-sm">
        <p>Made with 💜 just for you.</p>
      </footer>
    </div>
  );
}