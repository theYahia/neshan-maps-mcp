import { z } from "zod";
export declare const suggestSchema: z.ZodObject<{
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
export declare function handleSuggest(params: z.infer<typeof suggestSchema>): Promise<string>;
