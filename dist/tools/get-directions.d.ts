import { z } from "zod";
export declare const getDirectionsSchema: z.ZodObject<{
    origin: z.ZodString;
    destination: z.ZodString;
    type: z.ZodDefault<z.ZodEnum<["car", "foot", "bicycle"]>>;
}, "strip", z.ZodTypeAny, {
    type: "car" | "foot" | "bicycle";
    origin: string;
    destination: string;
}, {
    origin: string;
    destination: string;
    type?: "car" | "foot" | "bicycle" | undefined;
}>;
export declare function handleGetDirections(params: z.infer<typeof getDirectionsSchema>): Promise<string>;
