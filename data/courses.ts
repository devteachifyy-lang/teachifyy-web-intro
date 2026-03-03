export interface Course {
    id: string;
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    instructor: {
        name: string;
        avatar: string;
        bio: string;
    };
    mentor: {
        name: string;
        imageUrl: string;
    },
    image: string;
    totalWeeks: number;
    rating: number;
    students: number;
    price: number;
    originalPrice?: number;
    badge?: 'Bestseller' | 'New' | 'Popular';
    curriculum: {
        module: string;
        lessons: string[];
    }[];
    whatYouLearn: string[];
    requirements: string[];
    button: boolean;
}

