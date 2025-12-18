import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import MemoryLane from "@/components/MemoryLane";
import GiftSection from "@/components/GiftSection";
import FoodMenu from "@/components/FoodMenu";
import { Volume2, VolumeX } from "lucide-react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("https://assets.pixabay.com/download/audio/2022/03/10/audiotrim_46244_ypYLvKJ.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      console.log("Audio autoplay prevented by browser");
      setIsPlaying(false);
    });

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 size={24} />
        ) : (
          <VolumeX size={24} />
        )}
      </button>

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