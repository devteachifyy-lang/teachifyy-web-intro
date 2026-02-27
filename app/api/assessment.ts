import { useQuery, useMutation } from "@tanstack/react-query";
import { AssessmentService } from "@/services/AssessmentService";

// ==================== Query Keys ====================

export const GET_ASSESSMENT_QUESTIONS_KEY = ["assessment", "questions"];

// ==================== Query Functions ====================

export const getAssessmentQuestionsQuery = async () => {
    return new AssessmentService().getAssessmentQuestions();
};

export const submitAssessmentFn = async (data: any) => {
    return new AssessmentService().submitAssessment(data);
};

export const submitCategoryAnswersFn = async (data: {
    categoryId: string;
    answers: { questionId: string; selectedOption: string }[];
}) => {
    return new AssessmentService().submitCategoryAnswers(data);
};

export const submitAssessmentTestFn = async (data: {
    userLeadId: string;
    answers: Record<string, string>;
}) => {
    return new AssessmentService().submitAssessmentTest(data);
};

// ==================== Query Hooks ====================

export const useGetAssessmentQuestionsQuery = () => {
    return useQuery({
        queryKey: GET_ASSESSMENT_QUESTIONS_KEY,
        queryFn: () => getAssessmentQuestionsQuery(),
    });
};

// ==================== Mutation Hooks ====================

export const useSubmitAssessmentMutation = () => {
    return useMutation({
        mutationFn: (data: any) => submitAssessmentFn(data),
    });
};

export const useSubmitCategoryAnswersMutation = () => {
    return useMutation({
        mutationFn: (data: {
            categoryId: string;
            answers: { questionId: string; selectedOption: string }[];
        }) => submitCategoryAnswersFn(data),
    });
};

export const useSubmitAssessmentTestMutation = () => {
    return useMutation({
        mutationFn: (data: {
            userLeadId: string;
            answers: Record<string, string>;
        }) => submitAssessmentTestFn(data),
    });
};
