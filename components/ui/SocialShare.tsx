'use client';

import { Share2, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

const SocialShare = ({ url, title, description, className }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="text-sm text-zinc-400 flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        Share:
      </span>
      
      <div className="flex items-center gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
        
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
        
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors relative"
          aria-label="Copy link"
        >
          <LinkIcon className="w-4 h-4" />
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-dark text-xs rounded whitespace-nowrap">
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
