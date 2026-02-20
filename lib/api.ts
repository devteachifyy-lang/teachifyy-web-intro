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
