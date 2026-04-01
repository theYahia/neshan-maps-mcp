import { z } from "zod";
export declare const getDistanceMatrixSchema: z.ZodObject<{
    origins: z.ZodArray<z.ZodString, "many">;
    destinations: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    origins: string[];
    destinations: string[];
}, {
    origins: string[];
    destinations: string[];
}>;
export declare function handleGetDistanceMatrix(params: z.infer<typeof getDistanceMatrixSchema>): Promise<string>;
