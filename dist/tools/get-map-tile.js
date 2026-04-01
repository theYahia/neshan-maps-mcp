import { z } from "zod";
import { NeshanClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new NeshanClient(); return _client; }
export const getMapTileSchema = z.object({
    z: z.number().min(1).max(21).describe("Zoom level"),
    x: z.number().min(0).describe("Tile X coordinate"),
    y: z.number().min(0).describe("Tile Y coordinate"),
    style: z.enum(["neshan", "standard-day", "standard-night", "dreamy"]).default("neshan").describe("Map style"),
});
export async function handleGetMapTile(params) {
    const result = await getClient().get(`/v3/map-tile/${params.z}/${params.x}/${params.y}`, {
        style: params.style,
    });
    return JSON.stringify({ message: "Map tile retrieved", z: params.z, x: params.x, y: params.y }, null, 2);
}
//# sourceMappingURL=get-map-tile.js.map