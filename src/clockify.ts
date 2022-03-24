import fetch from 'node-fetch'
import {Client} from "./client";

export default class Clockify {

    private options: any;
    private fetch: any;
    private static baseUrl = 'https://api.clockify.me/api/v1';
    public client: Client;

    constructor(options: any) {
        this.options = options;
        if (typeof window !== 'undefined') {
            this.fetch = window.fetch.bind(window);
        } else {
            this.fetch = fetch
        }
        // Pass header etc..
        this.client = new Client(Clockify.baseUrl, options);
    }

    static getBaseUrl() {
        return Clockify.baseUrl;
    }
}
