import { z } from "zod";

export const StopSchema = z.object({
  name: z.string(),
  time: z.string(),
  description: z.string(),
});

export const DaySchema = z.object({
  day: z.number(),
  title: z.string(),
  stops: z.array(StopSchema),
});

export const ItinerarySchema = z.object({
  tripTitle: z.string(),
  days: z.array(DaySchema),
});

export type Itinerary = z.infer<typeof ItinerarySchema>;