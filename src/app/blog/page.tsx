import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import LatestArticles from "@/components/blog/LatestArticles";
import PopularTopics from "@/components/blog/PopularTopics";
import SeasonalGuides from "@/components/blog/SeasonalGuides";
import LocalExpertInsights from "@/components/blog/LocalExpertInsights";
import ServiceEducationHub from "@/components/blog/ServiceEducationHub";
import SubscribeSection from "@/components/blog/SubscribeSection";
import SEOContentBlock from "@/components/blog/SEOContentBlock";
import BlogCTA from "@/components/blog/BlogCTA";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Center & Blog",
  description: "Expert tips, maintenance guides, seasonal recommendations, and trusted home service insights for Sudurpashchim Province.",
  keywords: [
    "Home Maintenance Nepal",
    "Electrical Safety Tips",
    "Plumbing Guide Dhangadhi",
    "AC Service Tips",
    "Mero Sewa Blog",
    "Home Services Sudurpashchim"
  ]
};

export default function BlogPage() {
  return (
    <main className="flex-1 bg-white min-h-screen">
      <BlogHero />
      <FeaturedArticle />
      <LatestArticles />
      <PopularTopics />
      <SeasonalGuides />
      <LocalExpertInsights />
      <ServiceEducationHub />
      <SubscribeSection />
      <SEOContentBlock />
      <BlogCTA />
      <Footer />
    </main>
  );
}
