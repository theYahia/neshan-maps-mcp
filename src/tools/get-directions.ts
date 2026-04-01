import { z } from "zod";
import { NeshanClient } from "../client.js";
let _client: NeshanClient | null = null;function getClient(): NeshanClient { if (!_client) _client = new NeshanClient(); return _client; }
export const getDirectionsSchema = z.object({
  origin: z.string().describe("Origin coordinates as 'lat,lng'"),
  destination: z.string().describe("Destination coordinates as 'lat,lng'"),
  type: z.enum(["car", "foot", "bicycle"]).default("car").describe("Route type"),
});

export async function handleGetDirections(params: z.infer<typeof getDirectionsSchema>): Promise<string> {
  const [oLat, oLng] = params.origin.split(",");
  const [dLat, dLng] = params.destination.split(",");
  const result = await getClient().get("/v4/direction", {
    type: params.type,
    origin: `${oLat},${oLng}`,
    destination: `${dLat},${dLng}`,
  });
  return JSON.stringify(result, null, 2);
}
