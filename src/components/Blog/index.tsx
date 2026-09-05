import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

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

export default async function BlogSection() {
  return (
    <section className="py-20 lg:py-25">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Read Our Latest Blogs"
          title="Latest Blogs & News"
          paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
        />

        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((blog, index) => (
            <SingleBlog key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
