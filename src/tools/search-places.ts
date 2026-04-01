import { z } from "zod";
import { NeshanClient } from "../client.js";
let _client: NeshanClient | null = null;function getClient(): NeshanClient { if (!_client) _client = new NeshanClient(); return _client; }
export const searchPlacesSchema = z.object({
  query: z.string().describe("Search query (e.g. restaurant, pharmacy)"),
  lat: z.number().min(-90).max(90).describe("Latitude for search center"),
  lng: z.number().min(-180).max(180).describe("Longitude for search center"),
});

export async function handleSearchPlaces(params: z.infer<typeof searchPlacesSchema>): Promise<string> {
  const result = await getClient().get("/v1/search", {
    term: params.query,
    lat: params.lat.toString(),
    lng: params.lng.toString(),
  });
  return JSON.stringify(result, null, 2);
}
