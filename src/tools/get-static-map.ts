import { z } from "zod";
import { NeshanClient } from "../client.js";
let _client: NeshanClient | null = null;function getClient(): NeshanClient { if (!_client) _client = new NeshanClient(); return _client; }
export const getStaticMapSchema = z.object({
  center: z.string().describe("Map center coordinates as 'lat,lng'"),
  zoom: z.number().min(1).max(21).describe("Zoom level (1-21)"),
  markers: z.array(z.string()).optional().describe("Array of marker coordinates as 'lat,lng'"),
  width: z.number().min(100).max(1200).default(600).describe("Image width in pixels"),
  height: z.number().min(100).max(1200).default(400).describe("Image height in pixels"),
});

export async function handleGetStaticMap(params: z.infer<typeof getStaticMapSchema>): Promise<string> {
  const p: Record<string, string> = {
    center: params.center,
    zoom: params.zoom.toString(),
    width: params.width.toString(),
    height: params.height.toString(),
    type: "neshan",
  };
  if (params.markers?.length) {
    p.marker = params.markers.join("|");
  }
  const result = await getClient().get("/v2/static", p);
  return JSON.stringify(result, null, 2);
}
