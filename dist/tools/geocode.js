import { z } from "zod";
import { NeshanClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new NeshanClient(); return _client; }
export const geocodeSchema = z.object({
    address: z.string().describe("Address to geocode (Persian or English)"),
});
export async function handleGeocode(params) {
    const result = await getClient().get("/v4/geocoding", { address: params.address });
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=geocode.js.map