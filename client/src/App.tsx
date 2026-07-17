import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromptBox from "./components/PromptBox";
import Itinerary from "./components/Itinerary";
import type { Trip } from "./types/itinerary";

function App() {
  const [trip, setTrip] = useState<Trip | null>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-slate-100 dark:bg-slate-950">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
  <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-sky-400/20 blur-3xl animate-pulse" />

  <div className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />

  <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-sky-300/10 blur-3xl" />
</div>

      <Navbar />

      <main className="max-w-7xl mx-auto">
        <Hero />

        <PromptBox
  onTripGenerated={(generatedTrip) => {
    setTrip(generatedTrip);

    setTimeout(() => {
      itineraryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  }}
/>

 {trip ? (
  <div ref={itineraryRef}>
    <Itinerary trip={trip} />
  </div>
) : (
  <div className="mx-auto mt-20 max-w-4xl px-5">
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white/60 p-12 text-center shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/60">
      <div className="mb-6 text-6xl">✈️</div>

      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        Your itinerary will appear here
      </h2>

      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Describe your dream trip above and click
        <span className="font-semibold"> Generate Itinerary</span>.
      </p>
    </div>
  </div>
)}
      </main>
    </div>
  );
}

export default App;