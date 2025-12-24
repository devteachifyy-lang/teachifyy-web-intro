import type { Metadata } from 'next';

export const siteConfig = {
    name: 'LMS Academy',
    description: 'Master modern web development with expert-led courses. Learn React, Next.js, TypeScript, and more.',
    url: 'https://lms-academy.com',
    ogImage: '/og-image.jpg',
    links: {
        twitter: 'https://twitter.com/lmsacademy',
        linkedin: 'https://linkedin.com/company/lmsacademy',
        youtube: 'https://youtube.com/@lmsacademy',
    },
};

export function constructMetadata({
    title = siteConfig?.name,
    description = siteConfig?.description,
    image = siteConfig?.ogImage,
    ...props
}: {
    title?: string;
    description?: string;
    image?: string;
    [key: string]: any;
}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: image }],
            type: 'website',
            siteName: siteConfig.name,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@lmsacademy',
        },
        ...props,
    };
}
