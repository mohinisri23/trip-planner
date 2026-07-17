import { Plane } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/70 px-6 py-5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/70 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 p-2 shadow-lg">
            <Plane className="text-white" size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              AI Trip Planner
            </h1>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Plan smarter with Gemini AI
            </p>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}