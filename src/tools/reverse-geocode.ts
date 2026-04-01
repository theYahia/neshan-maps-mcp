import { z } from "zod";
import { NeshanClient } from "../client.js";
let _client: NeshanClient | null = null;function getClient(): NeshanClient { if (!_client) _client = new NeshanClient(); return _client; }
export const reverseGeocodeSchema = z.object({
  lat: z.number().min(-90).max(90).describe("Latitude"),
  lng: z.number().min(-180).max(180).describe("Longitude"),
});

export async function handleReverseGeocode(params: z.infer<typeof reverseGeocodeSchema>): Promise<string> {
  const result = await getClient().get("/v5/reverse", {
    lat: params.lat.toString(),
    lng: params.lng.toString(),
  });
  return JSON.stringify(result, null, 2);
}
