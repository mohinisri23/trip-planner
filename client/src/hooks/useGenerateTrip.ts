import { useState } from "react";
import api from "../services/api";

export function useGenerateTrip() {
  const [loading, setLoading] = useState(false);

  async function generate(prompt: string) {
    setLoading(true);

    try {
      const res = await api.post("/generate-itinerary", {
        prompt,
      });

      return res.data;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    generate,
  };
}