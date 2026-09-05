import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { RelatedArticles } from './_components/related-articles';

type Props = { params: Promise<{ slug: string }> };

const posts = [
  {
    _id: 1,
    title: 'How AI Product Teams Ship Faster',
    slug: { current: 'how-ai-product-teams-ship-faster' },
    metadata: 'A practical look at how startup teams use AI tooling to prototype, validate, and ship quickly.',
    mainImage: '/images/blog/blog-01.jpg',
    author: { name: 'Alicia Morgan', slug: { current: 'alicia-morgan' } },
    tags: ['AI', 'Product'],
    publishedAt: '2026-08-01',
    body: [
      { _type: 'block', children: [{ _type: 'span', text: 'AI tooling helps teams move from idea to product with less overhead, faster feedback loops, and clearer validation.' }] },
      { _type: 'block', children: [{ _type: 'span', text: 'The winning pattern is simple: ship a small slice, learn quickly, and improve the product based on real behavior.' }] },
    ],
  },
  {
    _id: 2,
    title: 'Designing a Clear SaaS Pricing Page',
    slug: { current: 'designing-a-clear-saas-pricing-page' },
    metadata: 'Learn the structure, messaging, and trust signals that help users convert without friction.',
    mainImage: '/images/blog/blog-02.jpg',
    author: { name: 'Marcus Lee', slug: { current: 'marcus-lee' } },
    tags: ['Marketing', 'Growth'],
    publishedAt: '2026-07-22',
    body: [
      { _type: 'block', children: [{ _type: 'span', text: 'The strongest pricing pages are easy to scan and honest about the value each package provides.' }] },
      { _type: 'block', children: [{ _type: 'span', text: 'Clear tiers, a visible comparison, and proof that the product solves a real problem remove hesitation.' }] },
    ],
  },
  {
    _id: 3,
    title: 'Simple Automation Ideas for Small Teams',
    slug: { current: 'simple-automation-ideas-for-small-teams' },
    metadata: 'From content generation to support triage, small teams can automate repetitive work without complexity.',
    mainImage: '/images/blog/blog-03.jpg',
    author: { name: 'Nina Patel', slug: { current: 'nina-patel' } },
    tags: ['Automation', 'Workflow'],
    publishedAt: '2026-06-18',
    body: [
      { _type: 'block', children: [{ _type: 'span', text: 'Start with the work that happens repeatedly: responses, routing, reporting, and content drafts.' }] },
      { _type: 'block', children: [{ _type: 'span', text: 'Once the process is documented, automation becomes a force multiplier rather than a project in itself.' }] },
    ],
  },
];

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const post = posts.find((entry) => entry.slug.current === params.slug) ?? posts[0];

  return {
    title: `${post.title} | Blog`,
    description: post.metadata,
  };
}

export default async function BlogDetails(props: Props) {
  const params = await props.params;
  const post = posts.find((entry) => entry.slug.current === params.slug) ?? posts[0];

  return (
    <>
      <Breadcrumb pageTitle='Blog Details' />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='relative mx-auto mb-10 aspect-97/44 w-full max-w-[1170px] overflow-hidden rounded-2xl px-4 sm:px-8 md:rounded-3xl xl:px-0'>
          <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/30 via-slate-800 to-slate-900 text-2xl font-semibold text-white'>
            {post.title}
          </div>
        </div>

        <div className='mx-auto w-full max-w-[1170px]'>
          <div className='mx-auto max-w-[870px]'>
            <div className='mb-7.5 flex flex-wrap items-center justify-between gap-5'>
              <div className='flex flex-wrap items-center gap-2.5'>
                {post.tags?.map((tag) => (
                  <span key={tag} className='cursor-pointer rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-[3px] text-xs font-medium duration-300 ease-out hover:border-white/25 hover:text-white'>
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex flex-wrap items-center gap-4.5'>
                <div className='flex cursor-pointer flex-wrap items-center gap-2 duration-300 ease-in hover:text-white'>
                  <Link href={`/blog/author/${post.author?.slug?.current}`} className='text-sm font-medium'>
                    {post.author?.name}
                  </Link>
                </div>

                <span className='text-sm font-medium'>
                  {new Date(post.publishedAt).toDateString().split(' ').slice(1).join(' ')}
                </span>
              </div>
            </div>

            <h1 className='mb-7.5 text-[34px] leading-[45px] font-semibold text-white'>
              {post.title}
            </h1>

            <div className='blog-details mb-12 space-y-6 text-lg leading-8 text-slate-200'>
              {post.body?.map((block, index) => (
                <p key={index}>{block.children?.map((child: any) => child.text).join(' ')}</p>
              ))}
            </div>
          </div>

          <RelatedArticles />
        </div>
      </section>
    </>
  );
}
