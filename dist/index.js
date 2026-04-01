#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { geocodeSchema, handleGeocode } from "./tools/geocode.js";
import { reverseGeocodeSchema, handleReverseGeocode } from "./tools/reverse-geocode.js";
import { searchPlacesSchema, handleSearchPlaces } from "./tools/search-places.js";
import { getDirectionsSchema, handleGetDirections } from "./tools/get-directions.js";
import { getDistanceMatrixSchema, handleGetDistanceMatrix } from "./tools/get-distance-matrix.js";
import { getStaticMapSchema, handleGetStaticMap } from "./tools/get-static-map.js";
import { suggestSchema, handleSuggest } from "./tools/suggest.js";
import { getMapTileSchema, handleGetMapTile } from "./tools/get-map-tile.js";
const server = new McpServer({ name: "neshan-maps-mcp", version: "1.0.0" });
server.tool("geocode", "Convert address to coordinates.", geocodeSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGeocode(params) }] }));
server.tool("reverse_geocode", "Convert coordinates to address.", reverseGeocodeSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleReverseGeocode(params) }] }));
server.tool("search_places", "Search for places near a location.", searchPlacesSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleSearchPlaces(params) }] }));
server.tool("get_directions", "Get driving/walking/cycling directions.", getDirectionsSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetDirections(params) }] }));
server.tool("get_distance_matrix", "Calculate distances between multiple points.", getDistanceMatrixSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetDistanceMatrix(params) }] }));
server.tool("get_static_map", "Generate a static map image.", getStaticMapSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetStaticMap(params) }] }));
server.tool("suggest", "Autocomplete place suggestions.", suggestSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleSuggest(params) }] }));
server.tool("get_map_tile", "Get a map tile image.", getMapTileSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetMapTile(params) }] }));
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("[neshan-maps-mcp] Server started. 8 tools registered.");
}
main().catch((error) => { console.error("[neshan-maps-mcp] Error:", error); process.exit(1); });
//# sourceMappingURL=index.js.map