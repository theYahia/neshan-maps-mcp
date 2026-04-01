import { describe, it, expect, vi, beforeEach } from "vitest";
import { geocodeSchema } from "../tools/geocode.js";
import { reverseGeocodeSchema } from "../tools/reverse-geocode.js";
import { searchPlacesSchema } from "../tools/search-places.js";
import { getDirectionsSchema } from "../tools/get-directions.js";
import { getDistanceMatrixSchema } from "../tools/get-distance-matrix.js";
import { getStaticMapSchema } from "../tools/get-static-map.js";
import { suggestSchema } from "../tools/suggest.js";
import { getMapTileSchema } from "../tools/get-map-tile.js";
describe("neshan-maps-mcp schemas", () => {
    it("validates geocode params", () => {
        const valid = geocodeSchema.safeParse({ address: "میدان آزادی تهران" });
        expect(valid.success).toBe(true);
    });
    it("validates reverse_geocode params", () => {
        const valid = reverseGeocodeSchema.safeParse({ lat: 35.6892, lng: 51.3890 });
        expect(valid.success).toBe(true);
    });
    it("rejects reverse_geocode with out-of-range lat", () => {
        const invalid = reverseGeocodeSchema.safeParse({ lat: 100, lng: 51.3890 });
        expect(invalid.success).toBe(false);
    });
    it("validates search_places params", () => {
        const valid = searchPlacesSchema.safeParse({
            query: "restaurant",
            lat: 35.6892,
            lng: 51.3890,
        });
        expect(valid.success).toBe(true);
    });
    it("validates get_directions params", () => {
        const valid = getDirectionsSchema.safeParse({
            origin: "35.6892,51.3890",
            destination: "35.7000,51.4000",
            type: "car",
        });
        expect(valid.success).toBe(true);
    });
    it("validates get_directions with default type", () => {
        const valid = getDirectionsSchema.safeParse({
            origin: "35.6892,51.3890",
            destination: "35.7000,51.4000",
        });
        expect(valid.success).toBe(true);
    });
    it("validates get_distance_matrix params", () => {
        const valid = getDistanceMatrixSchema.safeParse({
            origins: ["35.6892,51.3890"],
            destinations: ["35.7000,51.4000", "35.7100,51.4100"],
        });
        expect(valid.success).toBe(true);
    });
    it("rejects get_distance_matrix with empty origins", () => {
        const invalid = getDistanceMatrixSchema.safeParse({
            origins: [],
            destinations: ["35.7000,51.4000"],
        });
        expect(invalid.success).toBe(false);
    });
    it("validates get_static_map params", () => {
        const valid = getStaticMapSchema.safeParse({
            center: "35.6892,51.3890",
            zoom: 14,
        });
        expect(valid.success).toBe(true);
    });
    it("rejects get_static_map with zoom > 21", () => {
        const invalid = getStaticMapSchema.safeParse({
            center: "35.6892,51.3890",
            zoom: 25,
        });
        expect(invalid.success).toBe(false);
    });
    it("validates suggest params", () => {
        const valid = suggestSchema.safeParse({
            query: "azadi",
            lat: 35.6892,
            lng: 51.3890,
        });
        expect(valid.success).toBe(true);
    });
    it("validates get_map_tile params", () => {
        const valid = getMapTileSchema.safeParse({ z: 14, x: 8500, y: 5700 });
        expect(valid.success).toBe(true);
    });
    it("validates get_static_map with markers", () => {
        const valid = getStaticMapSchema.safeParse({
            center: "35.6892,51.3890",
            zoom: 14,
            markers: ["35.6892,51.3890", "35.7000,51.4000"],
        });
        expect(valid.success).toBe(true);
    });
});
describe("NeshanClient", () => {
    beforeEach(() => {
        vi.stubEnv("NESHAN_API_KEY", "");
    });
    it("throws when credentials are missing", async () => {
        const { NeshanClient } = await import("../client.js");
        expect(() => new NeshanClient()).toThrow("NESHAN_API_KEY");
    });
});
//# sourceMappingURL=tools.test.js.map