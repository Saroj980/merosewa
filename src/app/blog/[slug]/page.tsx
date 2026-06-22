import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogContent from "@/components/blog/BlogContent";
import RelatedArticles from "@/components/blog/RelatedArticles";
import SubscribeSection from "@/components/blog/SubscribeSection";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Often Should You Service Your AC in Nepal? | Mero Sewa Blog",
  description: "Learn the ideal servicing frequency for your air conditioner to maximize cooling efficiency during the hot Dhangadhi summers.",
};

export function generateStaticParams() {
  return [
    { slug: "how-often-should-you-service-ac-nepal" },
    { slug: "plumbing-problems-monsoon" },
    { slug: "generator-maintenance-guide" },
    { slug: "cctv-systems-home-security" },
    { slug: "solar-panel-maintenance-tips" },
    { slug: "home-deep-cleaning-dashain" },
    { slug: "electrical-safety-checks" },
    { slug: "monsoon-preparation" },
    { slug: "summer-ac-maintenance" },
    { slug: "generator-preparation" },
    { slug: "all" }
  ];
}

export default function BlogPostPage() {
  return (
    <main className="flex-1 bg-white min-h-screen">
      <BlogDetailHero />
      <BlogContent />
      <RelatedArticles />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
