import "dotenv/config";

import express from "express";
import cors from "cors";
import itineraryRoutes from "./routes/itinerary";



const app = express();

app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (_req, res) => {
  res.send("🚀 Trip Planner API is running!");
});

// API routes
app.use("/api", itineraryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on https://trip-planner-cnig.onrender.com/`);
});