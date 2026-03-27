import { useQuery } from "@tanstack/react-query";
import { ResourceService } from "@/services/ResourceService";

export const GET_RESOURCES_KEY = (category?: string) => ["resources", category || "all"];

export const getResourcesQuery = async (category?: string) => {
    return new ResourceService().getResources(category);
};

export const useGetResourcesQuery = (category?: string) => {
    return useQuery({
        queryKey: GET_RESOURCES_KEY(category),
        queryFn: () => getResourcesQuery(category),
    });
};
