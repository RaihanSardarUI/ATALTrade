import Hero from '@/components/Hero';
import CourseOverview from '@/components/CourseOverview';
import Level1Course from '@/components/Level1Course';
import Level2Course from '@/components/Level2Course';
import Trainers from '@/components/Trainers';
import Timeline from '@/components/Timeline';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <CourseOverview />
      <Level1Course />
      <Level2Course />
      <Trainers />
      <Timeline />
      <Pricing />
      <Contact />
    </main>
  );
}

