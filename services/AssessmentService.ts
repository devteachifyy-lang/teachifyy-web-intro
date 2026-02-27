import { Client } from "@/lib/apiClient";

const client = new Client();

export class AssessmentService {
    submitAssessment(data: any) {
        return client.api({
            method: "post",
            url: "/api/v1/lead-generate",
            data,
        });
    }

    submitCategoryAnswers(data: {
        categoryId: string;
        answers: { questionId: string; selectedOption: string }[];
    }) {
        return client.api({
            method: "post",
            url: "/assessment/category",
            data,
        });
    }

    submitAssessmentTest(data: {
        userLeadId: string;
        answers: Record<string, string>;
    }) {
        return client.api({
            method: "post",
            url: "/api/v1/lead/assessments/submit",
            data,
        });
    }

    getAssessmentQuestions() {
        return client.api({
            method: "get",
            url: "/api/v1/lead/assessments/questions",
        });
    }
}
