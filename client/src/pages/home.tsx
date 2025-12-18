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
    // Try multiple fallback audio sources
    const audioSources = [
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      "https://media-files.vidyard.com/videos/f1e7b91e-0ef9-4f7c-b95b-2f4f17e5c7a4/preview/media_1669308340.mp3"
    ];
    
    let currentIndex = 0;
    
    const tryLoadAudio = () => {
      if (currentIndex >= audioSources.length) {
        setIsPlaying(false);
        return;
      }

      const audio = new Audio();
      audio.loop = true;
      audio.volume = 0.3;
      audio.crossOrigin = "anonymous";
      
      audio.addEventListener('canplay', () => {
        audioRef.current = audio;
      });
      
      audio.addEventListener('error', () => {
        currentIndex++;
        tryLoadAudio();
      });
      
      audio.src = audioSources[currentIndex];
    };

    tryLoadAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
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