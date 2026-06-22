import { AboutHero } from "@/components/about/AboutHero";
import { MissionStory } from "@/components/about/MissionStory";
import { Ecosystem } from "@/components/about/Ecosystem";
import { RoadmapAndValues } from "@/components/about/RoadmapAndValues";
import { Footer } from "@/components/home/Footer";

export const metadata = {
  title: 'About Us | Mero Sewa - Building Trust in Home Services',
  description: 'Learn about Mero Sewa\'s mission to organize the unorganized home service sector in Nepal, empowering professionals and delighting households.',
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white min-h-screen">
      <AboutHero />
      <MissionStory />
      <Ecosystem />
      <RoadmapAndValues />
      <Footer />
    </main>
  );
}
