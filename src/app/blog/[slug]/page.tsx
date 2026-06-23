import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogContent from "@/components/blog/BlogContent";
import RelatedArticles from "@/components/blog/RelatedArticles";
import SubscribeSection from "@/components/blog/SubscribeSection";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import { getBlogData } from "@/data/blogs";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getBlogData(resolvedParams.slug);
  return {
    title: `${data.title} | Mero Sewa Blog`,
    description: data.paragraphs[0].substring(0, 150) + "...",
  };
}

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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = getBlogData(resolvedParams.slug);

  return (
    <main className="flex-1 bg-white min-h-screen">
      <BlogDetailHero data={data} />
      <BlogContent data={data} />
      <RelatedArticles />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
