import { Metadata } from 'next';
import AppHero from '@/components/download/AppHero';
import AppFeatures from '@/components/download/AppFeatures';
import AppScreenshots from '@/components/download/AppScreenshots';
import AppBottomCta from '@/components/download/AppBottomCta';

export const metadata: Metadata = {
  title: 'Download the Teachifyy App - Learn Anywhere',
  description:
    'Download the Teachifyy mobile app on iOS and Android. Access courses, track your progress, connect with mentors, and continue your learning journey from any device.',
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white">
      <AppHero />
      <AppFeatures />
      {/* <AppScreenshots /> */}
      <AppBottomCta />
    </div>
  );
}
