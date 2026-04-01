import { z } from "zod";
export declare const getMapTileSchema: z.ZodObject<{
    z: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
    style: z.ZodDefault<z.ZodEnum<["neshan", "standard-day", "standard-night", "dreamy"]>>;
}, "strip", z.ZodTypeAny, {
    z: number;
    x: number;
    y: number;
    style: "neshan" | "standard-day" | "standard-night" | "dreamy";
}, {
    z: number;
    x: number;
    y: number;
    style?: "neshan" | "standard-day" | "standard-night" | "dreamy" | undefined;
}>;
export declare function handleGetMapTile(params: z.infer<typeof getMapTileSchema>): Promise<string>;
