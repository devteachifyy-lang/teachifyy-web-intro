import type { Metadata } from 'next';

export const siteConfig = {
    name: 'Teachifyy',
    description: 'Master modern web development with expert-led courses. Learn React, Next.js, TypeScript, and more.',
    url: '',
    ogImage: '/og-image.jpg',
    links: {
        twitter: '',
        linkedin: '',
        youtube: '',
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
            creator: '@Teachifyy',
        },
        ...props,
    };
}
