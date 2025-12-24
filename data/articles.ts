export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    thumbnail: string;
    category: string;
    author: {
        name: string;
        avatar: string;
        bio: string;
    };
    publishedAt: string;
    readTime: number;
    tags: string[];
}

export const articles: Article[] = [
    {
        id: '1',
        slug: 'getting-started-with-nextjs-15',
        title: 'Getting Started with Next.js 15: A Complete Guide',
        excerpt: 'Learn everything you need to know about Next.js 15, including the new App Router, Server Components, and performance improvements.',
        content: `
# Getting Started with Next.js 15: A Complete Guide

Next.js 15 brings revolutionary changes to how we build React applications. In this comprehensive guide, we'll explore all the new features and best practices.

## What's New in Next.js 15?

The latest version of Next.js introduces several game-changing features:

- **Turbopack**: Faster builds and hot module replacement
- **Server Actions**: Simplified data mutations
- **Partial Prerendering**: Combine static and dynamic rendering
- **Enhanced Metadata API**: Better SEO control

## App Router Deep Dive

The App Router is now stable and production-ready. Here's what makes it special:

### Server Components by Default

All components in the app directory are Server Components by default. This means:
- Reduced JavaScript bundle size
- Better performance
- Direct database access
- Improved SEO

### Client Components When Needed

Use the 'use client' directive for interactive components that need browser APIs or state management.

## Getting Started

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Conclusion

Next.js 15 represents a major leap forward in web development. Start building today!
    `,
        thumbnail: 'https://placehold.co/1200x675/1a1a1a/FFC107?text=Next.js+15+Guide&font=roboto',
        category: 'Web Development',
        author: {
            name: 'John Doe',
            avatar: 'https://ui-avatars.com/api/?name=John+Doe&size=400&background=FFC107&color=0A0A0A&bold=true',
            bio: 'Senior Full-Stack Developer with 10+ years of experience.',
        },
        publishedAt: '2024-12-15',
        readTime: 8,
        tags: ['Next.js', 'React', 'Web Development'],
    },
    {
        id: '2',
        slug: 'mastering-tailwind-css-dark-mode',
        title: 'Mastering Dark Mode with Tailwind CSS',
        excerpt: 'Discover how to implement beautiful dark mode designs in your applications using Tailwind CSS and modern best practices.',
        content: `
# Mastering Dark Mode with Tailwind CSS

Dark mode has become an essential feature in modern web applications. Let's explore how to implement it elegantly with Tailwind CSS.

## Why Dark Mode Matters

- Reduces eye strain in low-light environments
- Saves battery on OLED screens
- Provides user preference and accessibility
- Modern, professional aesthetic

## Implementation Strategies

### 1. Class-based Dark Mode

\`\`\`html
<div class="bg-white dark:bg-gray-900">
  <h1 class="text-gray-900 dark:text-white">Hello World</h1>
</div>
\`\`\`

### 2. System Preference Detection

Configure Tailwind to respect system preferences:

\`\`\`js
// tailwind.config.js
module.exports = {
  darkMode: 'media', // or 'class'
}
\`\`\`

## Best Practices

1. **Consistent Color Palette**: Use semantic color names
2. **Test Thoroughly**: Check all components in both modes
3. **Smooth Transitions**: Add transition classes for mode switching
4. **Accessibility**: Ensure proper contrast ratios

## Conclusion

Dark mode is more than just inverting colors. It's about creating a cohesive, accessible experience.
    `,
        thumbnail: 'https://placehold.co/1200x675/1a1a1a/06B6D4?text=Tailwind+Dark+Mode&font=roboto',
        category: 'UI/UX Design',
        author: {
            name: 'Mike Johnson',
            avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&size=400&background=06B6D4&color=fff&bold=true',
            bio: 'UI/UX designer and frontend developer.',
        },
        publishedAt: '2024-12-10',
        readTime: 6,
        tags: ['Tailwind CSS', 'Dark Mode', 'UI Design'],
    },
    {
        id: '3',
        slug: 'react-performance-optimization-tips',
        title: '10 React Performance Optimization Tips',
        excerpt: 'Boost your React application performance with these proven optimization techniques and best practices.',
        content: `
# 10 React Performance Optimization Tips

Performance is crucial for user experience. Here are 10 actionable tips to optimize your React applications.

## 1. Use React.memo for Component Memoization

Prevent unnecessary re-renders:

\`\`\`jsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## 2. Implement Code Splitting

Use dynamic imports to reduce initial bundle size:

\`\`\`jsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));
\`\`\`

## 3. Optimize Images

Use next/image for automatic optimization:

\`\`\`jsx
<Image src="/photo.jpg" width={500} height={300} alt="Photo" />
\`\`\`

## 4. Use useMemo and useCallback

Memoize expensive calculations and callback functions.

## 5. Virtual Scrolling

For long lists, use libraries like react-window.

## Conclusion

Small optimizations add up to significant performance improvements!
    `,
        thumbnail: 'https://placehold.co/1200x675/1a1a1a/61DAFB?text=React+Performance&font=roboto',
        category: 'Web Development',
        author: {
            name: 'Sarah Williams',
            avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams&size=400&background=61DAFB&color=000&bold=true',
            bio: 'React core contributor and consultant.',
        },
        publishedAt: '2024-12-05',
        readTime: 10,
        tags: ['React', 'Performance', 'Optimization'],
    },
    {
        id: '4',
        slug: 'typescript-best-practices-2024',
        title: 'TypeScript Best Practices for 2024',
        excerpt: 'Level up your TypeScript skills with these modern best practices and patterns for writing type-safe, maintainable code.',
        content: `
# TypeScript Best Practices for 2024

TypeScript has evolved significantly. Here are the best practices you should follow in 2024.

## 1. Enable Strict Mode

Always use strict mode in tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## 2. Use Type Inference

Let TypeScript infer types when possible:

\`\`\`typescript
// Good
const name = "John"; // TypeScript infers string

// Unnecessary
const name: string = "John";
\`\`\`

## 3. Prefer Interfaces for Objects

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}
\`\`\`

## 4. Use Utility Types

Leverage built-in utility types like Partial, Pick, Omit, etc.

## 5. Avoid 'any'

Use 'unknown' instead of 'any' when the type is truly unknown.

## Conclusion

Following these practices will make your TypeScript code more robust and maintainable.
    `,
        thumbnail: 'https://placehold.co/1200x675/1a1a1a/3B82F6?text=TypeScript+Best+Practices&font=roboto',
        category: 'Programming',
        author: {
            name: 'Jane Smith',
            avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&size=400&background=3B82F6&color=fff&bold=true',
            bio: 'Frontend architect specializing in TypeScript.',
        },
        publishedAt: '2024-11-28',
        readTime: 7,
        tags: ['TypeScript', 'Best Practices', 'Programming'],
    },
];

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
    return articles.filter((article) => article.category === category);
}

export function getRecentArticles(limit: number = 3): Article[] {
    return articles
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, limit);
}
