import express from "express";
import { generateTrip } from "../services/geminiService";
import { ItinerarySchema } from "../schemas/itinerarySchema";

const router = express.Router();

router.post("/generate-itinerary", async (req, res) => {
  try {
    const { prompt } = req.body;

    // Validate request
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid trip description.",
      });
    }

    // Generate itinerary from Gemini
    const aiResponse = await generateTrip(prompt);

    let parsedResponse;

    // Parse AI response
    try {
      parsedResponse = JSON.parse(aiResponse);
    } catch {
      return res.status(500).json({
        success: false,
        message: "The AI returned invalid JSON.",
      });
    }

    // Validate JSON structure using Zod
    const validation = ItinerarySchema.safeParse(parsedResponse);

    if (!validation.success) {
      return res.status(500).json({
        success: false,
        message: "The AI returned an invalid itinerary format.",
        errors: validation.error.flatten(),
      });
    }

    // Success
    return res.status(200).json({
      success: true,
      data: validation.data,
    });

  } catch (error) {
    console.error("Generate Itinerary Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while generating the itinerary.",
    });
  }
});

export default router;