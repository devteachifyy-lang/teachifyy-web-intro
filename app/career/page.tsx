import { Metadata } from 'next';
import CareerHero from '@/components/career/CareerHero';
import WhatWeCareAbout from '@/components/career/WhatWeCareAbout';
import WhoCanReachOut from '@/components/career/WhoCanReachOut';
import InterestedInWorking from '@/components/career/InterestedInWorking';
import CareerBottomCta from '@/components/career/CareerBottomCta';

export const metadata: Metadata = {
  title: 'Career at Teachifyy - Build the Future of Education',
  description:
    'Join Teachifyy and help build meaningful learning experiences. We are looking for educators, designers, engineers, and more.',
};

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white">
      <CareerHero />
      <WhatWeCareAbout />
      <WhoCanReachOut />
      <InterestedInWorking />
      <CareerBottomCta />
    </div>
  );
}
