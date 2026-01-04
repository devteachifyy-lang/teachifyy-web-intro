import AboutHero from '@/components/about/AboutHero';
import ProblemStatement from '@/components/about/ProblemStatement';
import WhyTeachifyy from '@/components/about/WhyTeachifyy';
import ThreePillars from '@/components/about/ThreePillars';
import ProfessionalJourney from '@/components/about/ProfessionalJourney';
import GlobalExposure from '@/components/about/GlobalExposure';
import TargetAudience from '@/components/about/TargetAudience';
import FAQ from '@/components/about/FAQ';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Teachifyy - Teacher Diploma Program',
  description: 'A diploma for teachers who don\'t want to get stuck. Teachifyy prepares you for growth, respect, and better opportunities. UK-based. India-focused.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProblemStatement />
      <WhyTeachifyy />
      <ThreePillars />
      <ProfessionalJourney />
      <GlobalExposure />
      <TargetAudience />
      <FAQ />
      <AboutCTA />
    </>
  );
}
