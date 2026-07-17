import { GoogleGenAI } from "@google/genai";
import { tripPrompt } from "../prompts/tripPrompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODELS = [
  "models/gemini-3.5-flash",
  "models/gemini-3.1-flash-lite",
  "models/gemini-pro-latest",
];

export async function generateTrip(userInput: string) {
  let lastError: unknown;

  for (const model of MODELS) {
    try {
      console.log(`Trying model: ${model}`);

      const response = await ai.models.generateContent({
        model,
        contents: tripPrompt(userInput),
      });

      const text = response.text;

      if (!text) {
        throw new Error("Empty response from Gemini");
      }

      console.log(`Success with: ${model}`);
      return text;

    } catch (error) {
      console.log(`Failed with ${model}`);
      lastError = error;
    }
  }

  throw lastError;
}