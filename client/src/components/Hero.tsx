import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-20 px-5 text-center"
    >
      {/* Badge */}
      <div className="mb-6 inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
        ✈️ Powered by Gemini AI
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl dark:text-white">
        Plan Your Dream
        <span className="block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Trip with AI
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        Create personalized travel itineraries in seconds with the power of
        Gemini AI. Discover places, organize your days, and start your next
        adventure with ease.
      </p>

      {/* Feature Pills */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
          🌍 Personalized Trips
        </span>

        <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300">
          ⚡ Generate in Seconds
        </span>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          🤖 AI Powered
        </span>
      </div>
    </motion.section>
  );
}