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

export interface TrackDownloadPayload {
    fullName: string;
    email: string;
    phone: string;
    age?: string | null;
    city?: string | null;
    profession?: string | null;
    qualifications?: string | null;
    cta?: string | null;
    resourceId: string;
}

export class ContactService extends Client {
    async submitContactForm(payload: ContactFormPayload) {
        const response = await this.api.post("/api/v1/lead-generate/contact", payload);
        return response.data;
    }

    async trackDownload(payload: TrackDownloadPayload) {
        const response = await this.api.post("/api/v1/lead-generate/track-download", payload);
        return response.data;
    }
}
