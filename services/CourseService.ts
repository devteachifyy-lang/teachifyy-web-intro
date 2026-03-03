import { Client } from "@/lib/apiClient";

export class CourseService extends Client {
    async getPublicCourses() {
        const response = await this.api.get("/api/v1/courses/public");
        return response.data;
    }

    async getPublicCourseBySlug(slug: string) {
        const response = await this.api.get(`/api/v1/courses/public/${slug}`);
        return response.data;
    }
}
