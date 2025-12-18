import { useEffect, useRef, useState } from "react";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = async () => {
      console.log("Audio can play");
      audio.volume = volume;

      try {
        // Try to play automatically
        await audio.play();
        console.log("Autoplay started successfully");
      } catch (error) {
        console.log("Autoplay prevented:", error);
      }
    };

    const handleError = (e: Event) => {
      console.error("Audio error:", e);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);

    // Preload and try to play the audio
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Initial play failed, will try again on user interaction");
      });
    }

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
        <audio
          ref={audioRef}
          src="/background-music.mp3.mp3"
          loop
          preload="auto"
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 accent-purple-500"
          aria-label="Volume control"
          title="Adjust volume"
        />
      </div>
    </div>
  );
}
