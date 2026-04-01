const BASE_URL = "https://api.neshan.org";
const TIMEOUT = 15_000;
export class NeshanClient {
    apiKey;
    constructor() {
        this.apiKey = process.env.NESHAN_API_KEY ?? "";
        if (!this.apiKey) {
            throw new Error("Environment variable NESHAN_API_KEY is required. " +
                "Get your API key at https://platform.neshan.org/developer/");
        }
    }
    async request(method, path, params) {
        const url = new URL(`${BASE_URL}${path}`);
        if (params) {
            Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
        }
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), TIMEOUT);
        try {
            const response = await fetch(url.toString(), {
                method,
                headers: {
                    "Api-Key": this.apiKey,
                    "Accept": "application/json",
                },
                signal: controller.signal,
            });
            clearTimeout(timer);
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Neshan HTTP ${response.status}: ${text}`);
            }
            const contentType = response.headers.get("content-type") ?? "";
            if (contentType.includes("application/json")) {
                return response.json();
            }
            return { status: response.status, message: await response.text() };
        }
        catch (error) {
            clearTimeout(timer);
            if (error instanceof DOMException && error.name === "AbortError") {
                throw new Error("Neshan: request timeout (15s). Try again later.");
            }
            throw error;
        }
    }
    async get(path, params) {
        return this.request("GET", path, params);
    }
}
//# sourceMappingURL=client.js.map