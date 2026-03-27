import { useMutation } from "@tanstack/react-query";
import { ContactService, ContactFormPayload, TrackDownloadPayload } from "@/services/ContactService";

export const useSubmitContactMutation = () => {
    return useMutation({
        mutationFn: async (payload: ContactFormPayload) => {
            return new ContactService().submitContactForm(payload);
        },
    });
};

export const useTrackDownloadMutation = () => {
    return useMutation({
        mutationFn: async (payload: TrackDownloadPayload) => {
            return new ContactService().trackDownload(payload);
        },
    });
};
