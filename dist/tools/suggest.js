import { z } from "zod";
import { NeshanClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new NeshanClient(); return _client; }
export const suggestSchema = z.object({
    query: z.string().describe("Autocomplete query text"),
    lat: z.number().min(-90).max(90).describe("Latitude for location bias"),
    lng: z.number().min(-180).max(180).describe("Longitude for location bias"),
});
export async function handleSuggest(params) {
    const result = await getClient().get("/v1/search", {
        term: params.query,
        lat: params.lat.toString(),
        lng: params.lng.toString(),
    });
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=suggest.js.map