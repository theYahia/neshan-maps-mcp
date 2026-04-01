import { z } from "zod";
export declare const geocodeSchema: z.ZodObject<{
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>;
export declare function handleGeocode(params: z.infer<typeof geocodeSchema>): Promise<string>;
