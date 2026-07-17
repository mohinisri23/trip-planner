import type { Trip } from "../types/itinerary";

interface Props {
  trip: Trip;
}

export default function TripSummary({ trip }: Props) {
  const totalStops = trip.days.reduce(
    (total, day) => total + day.stops.length,
    0
  );

  return (
    <div className="mb-10 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/70">
      <h2 className="break-words text-3xl font-bold text-slate-900 dark:text-white">
  {trip.tripTitle}
</h2>

      <div className="mt-5 flex flex-wrap gap-6">
        <span className="rounded-full bg-sky-500/20 px-4 py-2 text-sm font-medium text-sky-700 dark:text-sky-300">
          📅 {trip.days.length} Days
        </span>

        <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">
          📍 {totalStops} Stops
        </span>
      </div>
    </div>
  );
}