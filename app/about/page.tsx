import AboutUsHero from '@/components/about/AboutUsHero';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import WhyWeExistSection from '@/components/about/WhyWeExistSection';
import CoreValuesSection from '@/components/about/CoreValuesSection';
import TeamSection from '@/components/about/TeamSection';
import AboutBottomCta from '@/components/about/AboutBottomCta';

export const metadata = {
  title: 'About Teachifyy - Teacher Diploma Program',
  description: 'A diploma for teachers who don\'t want to get stuck. Teachifyy prepares you for growth, respect, and better opportunities. UK-based. India-focused.',
};

export default function AboutPage() {
  return (
    <>
      <AboutUsHero />
      <WhoWeAreSection />
      <WhyWeExistSection />
      <CoreValuesSection />
      {/* <TeamSection /> */}
      <AboutBottomCta />
    </>
  );
}
