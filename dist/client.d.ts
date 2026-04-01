export declare class NeshanClient {
    private apiKey;
    constructor();
    request(method: string, path: string, params?: Record<string, string>): Promise<unknown>;
    get(path: string, params?: Record<string, string>): Promise<unknown>;
}
