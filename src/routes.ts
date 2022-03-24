import fetch, {RequestInfo, RequestInit} from "node-fetch";

export class Routes {
    private readonly options: RequestInit;
    private readonly fetch: any;

    constructor(options: RequestInit) {
        this.options = options
        if (typeof window !== 'undefined') {
            this.fetch = window.fetch.bind(window);
        } else {
            this.fetch = fetch
        }
    }

    async request(url: RequestInfo, init?: RequestInit) {
        return this.fetch(url, {...this.options, ...init})
    }
}
