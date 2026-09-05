import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Tool - Next.js Template for AI Tools",
  description: "This is Blog page for AI Tool",
};

const posts = [
  {
    _id: 1,
    title: "How AI Product Teams Ship Faster",
    slug: { current: "how-ai-product-teams-ship-faster" },
    metadata: "A practical look at how startup teams use AI tooling to prototype, validate, and ship quickly.",
    mainImage: "/images/blog/blog-01.jpg",
    author: { name: "Alicia Morgan", slug: { current: "alicia-morgan" } },
    tags: ["AI", "Product"],
    publishedAt: "2026-08-01",
  },
  {
    _id: 2,
    title: "Designing a Clear SaaS Pricing Page",
    slug: { current: "designing-a-clear-saas-pricing-page" },
    metadata: "Learn the structure, messaging, and trust signals that help users convert without friction.",
    mainImage: "/images/blog/blog-02.jpg",
    author: { name: "Marcus Lee", slug: { current: "marcus-lee" } },
    tags: ["Marketing", "Growth"],
    publishedAt: "2026-07-22",
  },
  {
    _id: 3,
    title: "Simple Automation Ideas for Small Teams",
    slug: { current: "simple-automation-ideas-for-small-teams" },
    metadata: "From content generation to support triage, small teams can automate repetitive work without complexity.",
    mainImage: "/images/blog/blog-03.jpg",
    author: { name: "Nina Patel", slug: { current: "nina-patel" } },
    tags: ["Automation", "Workflow"],
    publishedAt: "2026-06-18",
  },
];

export default async function BlogPage() {
  return (
    <>
      <Breadcrumb pageTitle='Blog Grid' />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          <BlogGridContainer blogs={posts} />
        </div>
      </section>
    </>
  );
}
