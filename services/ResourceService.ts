import { Client } from "@/lib/apiClient";

export class ResourceService extends Client {
    async getResources(category?: string) {
        const response = await this.api.get("/api/v1/resources", {
            params: { category }
        });
        return response.data;
    }
}
