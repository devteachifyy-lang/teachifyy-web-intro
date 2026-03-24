import { useMutation } from "@tanstack/react-query";
import { ContactService, ContactFormPayload } from "@/services/ContactService";

export const useSubmitContactMutation = () => {
    return useMutation({
        mutationFn: async (payload: ContactFormPayload) => {
            return new ContactService().submitContactForm(payload);
        },
    });
};
