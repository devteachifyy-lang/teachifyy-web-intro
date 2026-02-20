import axios from 'axios';

// Base API instance
const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const submitAssessment = async (data: any) => {
    const response = await apiClient.post('/assessment', data);
    return response.data;
};

export const submitCategoryAnswers = async (data: {
    categoryId: string;
    answers: { questionId: string; selectedOption: string }[];
}) => {
    const response = await apiClient.post('/assessment/category', data);
    return response.data;
};
