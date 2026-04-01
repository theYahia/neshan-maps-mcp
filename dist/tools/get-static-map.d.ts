import { z } from "zod";
export declare const getStaticMapSchema: z.ZodObject<{
    center: z.ZodString;
    zoom: z.ZodNumber;
    markers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    width: z.ZodDefault<z.ZodNumber>;
    height: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    center: string;
    zoom: number;
    width: number;
    height: number;
    markers?: string[] | undefined;
}, {
    center: string;
    zoom: number;
    markers?: string[] | undefined;
    width?: number | undefined;
    height?: number | undefined;
}>;
export declare function handleGetStaticMap(params: z.infer<typeof getStaticMapSchema>): Promise<string>;
