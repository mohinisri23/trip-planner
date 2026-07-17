import { useState } from "react";
import { Sparkles, LoaderCircle } from "lucide-react";
import { useGenerateTrip } from "../hooks/useGenerateTrip";
import type { Trip } from "../types/itinerary";

interface PromptBoxProps {
  onTripGenerated: (trip: Trip) => void;
}

export default function PromptBox({
  onTripGenerated,
}: PromptBoxProps) {
  const [prompt, setPrompt] = useState("");

  const { loading, generate } = useGenerateTrip();

  async function handleGenerate() {
    if (!prompt.trim()) return;

    try {
      const response = await generate(prompt);

      // Send only the trip data to App.tsx
      onTripGenerated(response.data);

      // Clear the textbox
      setPrompt("");
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data.message || "Failed to generate trip.");
      } else {
        alert(error.message);
      }
    }
  }

  return (
    <div className="mt-16 flex flex-col items-center px-5">
      <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/70">

        <textarea
          rows={6}
          value={prompt}
          disabled={loading}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Example: Plan a 5-day trip to Japan with sightseeing, anime places, local food and a budget of $1500."
          className="w-full resize-none rounded-xl bg-transparent text-lg outline-none placeholder:text-slate-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-60"
        />

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <LoaderCircle className="animate-spin" size={18} />
                <span>Planning your adventure...</span>
              </>
            ) : (
              <>
                <Sparkles size={18} />
                Generate Itinerary
              </>
            )}
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
          AI usually takes 3–10 seconds to generate a personalized itinerary.
        </p>

      </div>
    </div>
  );
}