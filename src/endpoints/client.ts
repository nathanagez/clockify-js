import {RequestInit} from "node-fetch";
import {Routes} from "../routes";

export class Client extends Routes {
    static baseRoute = 'workspaces'
    private readonly uri: string;

    constructor(baseUrl: string, options: RequestInit) {
        super(options)
        this.uri = `${baseUrl}/${Client.baseRoute}`
    }

    async getAll(workspaceId: string) {
        return this.request(`${this.uri}/${workspaceId}/clients`)
    }

    async getById(workspaceId: string, clientId: string) {
        return this.request(`${this.uri}/${workspaceId}/clients/${clientId}`)
    }

    async add(workspaceId: string) {
        // POST
        return this.request(`${this.uri}/${workspaceId}/clients`)
    }

    async update(workspaceId: string, clientId: string) {
        // PUT
        return this.request(`${this.uri}/${workspaceId}/clients/${clientId}`)
    }

    async delete(workspaceId: string, clientId: string) {
        // DELETE
        return this.request(`${this.uri}/${workspaceId}/clients/${clientId}`)
    }
}
