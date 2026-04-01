import { z } from "zod";
import { NeshanClient } from "../client.js";
let _client: NeshanClient | null = null;function getClient(): NeshanClient { if (!_client) _client = new NeshanClient(); return _client; }
export const geocodeSchema = z.object({
  address: z.string().describe("Address to geocode (Persian or English)"),
});

export async function handleGeocode(params: z.infer<typeof geocodeSchema>): Promise<string> {
  const result = await getClient().get("/v4/geocoding", { address: params.address });
  return JSON.stringify(result, null, 2);
}
