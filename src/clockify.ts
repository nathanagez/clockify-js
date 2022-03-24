import {Client} from "./endpoints/client";

export default class Clockify {
    private static baseUrl = 'https://api.clockify.me/api/v1';
    private readonly options: RequestInit;
    public client: Client;

    constructor(apiKey: string) {
        this.options = {
            headers: {
                'X-Api-Key': apiKey,
            }
        };
        this.client = new Client(Clockify.baseUrl, this.options);
    }

    static getBaseUrl() {
        return Clockify.baseUrl;
    }
}
