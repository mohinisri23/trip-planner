import TripSummary from "./TripSummary";
import type { Trip } from "../types/itinerary";

interface Props {
  trip: Trip;
}

export default function Itinerary({ trip }: Props) {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-5">
      {/* Trip Summary */}
      <TripSummary trip={trip} />

      <div className="space-y-8">
        {trip.days.map((day) => (
          <div
            key={day.day}
            className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/70"
          >
            {/* Day Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  📅 Day {day.day}
                </h3>

                <p className="mt-1 text-lg font-medium text-sky-600 dark:text-cyan-400">
                  {day.title}
                </p>
              </div>

              <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-300">
                {day.stops.length} Stops
              </span>
            </div>

            {/* Stops */}
            <div className="space-y-5">
              {day.stops.map((stop, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/80"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                        📍 {stop.name}
                      </h4>

                      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                        {stop.description}
                      </p>
                    </div>

                    <span className="whitespace-nowrap rounded-full bg-sky-500/20 px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-300">
                      🕒 {stop.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}