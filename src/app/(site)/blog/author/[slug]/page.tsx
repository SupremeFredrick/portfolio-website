import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
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
];

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Author: ${slug} | Blog`,
    description: `Author: ${slug} | Blog`,
  };
}

const AuthorPage = async (props: Props) => {
  const params = await props.params;
  const { slug } = params;
  const author = posts.find((post) => post.author?.slug?.current === slug)?.author || { name: "Author" };

  return (
    <>
      <Breadcrumb pageTitle={author.name} />

      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <BlogGridContainer blogs={posts.filter((post) => post.author?.slug?.current === slug || !slug)} />
        </div>
      </section>
    </>
  );
};

export default AuthorPage;
