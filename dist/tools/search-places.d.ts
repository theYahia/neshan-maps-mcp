import { z } from "zod";
export declare const searchPlacesSchema: z.ZodObject<{
    query: z.ZodString;
    lat: z.ZodNumber;
    lng: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    lat: number;
    lng: number;
    query: string;
}, {
    lat: number;
    lng: number;
    query: string;
}>;
export declare function handleSearchPlaces(params: z.infer<typeof searchPlacesSchema>): Promise<string>;
