import { z } from "zod";
export declare const reverseGeocodeSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    lat: number;
    lng: number;
}, {
    lat: number;
    lng: number;
}>;
export declare function handleReverseGeocode(params: z.infer<typeof reverseGeocodeSchema>): Promise<string>;
