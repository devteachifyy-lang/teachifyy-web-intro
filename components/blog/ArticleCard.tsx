import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { Article } from '@/data/articles';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

const ArticleCard = ({ article, className }: ArticleCardProps) => {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={cn('card card-hover group block', className)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-zinc-800">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="default">{article.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4 pb-4 border-b border-zinc-800">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(article.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime} min read
          </span>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-700 overflow-hidden relative">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-300">{article.author.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
