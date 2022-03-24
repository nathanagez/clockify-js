import fetch, {RequestInfo, RequestInit} from "node-fetch";

export class Routes {
    private readonly options: RequestInit;

    constructor(options: RequestInit) {
        this.options = options
    }

    async request(url: RequestInfo, init?: RequestInit) {
        return fetch(url, {...this.options, ...init})
    }
}
