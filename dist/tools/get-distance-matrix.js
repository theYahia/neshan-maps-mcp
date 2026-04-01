import { z } from "zod";
import { NeshanClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new NeshanClient(); return _client; }
export const getDistanceMatrixSchema = z.object({
    origins: z.array(z.string()).min(1).describe("Array of origin coordinates as 'lat,lng'"),
    destinations: z.array(z.string()).min(1).describe("Array of destination coordinates as 'lat,lng'"),
});
export async function handleGetDistanceMatrix(params) {
    const result = await getClient().get("/v1/distance-matrix", {
        origins: params.origins.join("|"),
        destinations: params.destinations.join("|"),
    });
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=get-distance-matrix.js.map