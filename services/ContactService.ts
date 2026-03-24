import { Client } from "@/lib/apiClient";

export interface ContactFormPayload {
    fullName: string;
    email: string;
    phone: string;
    age: string;
    city: string;
    profession: string;
    qualifications: string;
}

export class ContactService extends Client {
    async submitContactForm(payload: ContactFormPayload) {
        const response = await this.api.post("/api/v1/contact", payload);
        return response.data;
    }
}
