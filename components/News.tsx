import Link from "next/link";

const news = [
  {
    date: "MAY 06, 2026",
    title: "Introducing Grok 3",
    excerpt:
      "Our most capable AI model yet, with enhanced reasoning and multimodal capabilities.",
    category: "GROK",
    image: "/assets/news-1.jpg",
  },
  {
    date: "APR 15, 2026",
    title: "xAI Raises $6B Series C",
    excerpt:
      "Funding will accelerate development of AI systems that help us understand the universe.",
    category: "COMPANY",
    image: "/assets/news-2.jpg",
  },
  {
    date: "MAR 22, 2026",
    title: "API Now Available Globally",
    excerpt:
      "Developers worldwide can now access Grok's capabilities through our REST API.",
    category: "API",
    image: "/assets/news-3.jpg",
  },
];

export default function News() {
  return (
    <section className="mx-auto max-w-[1280px] px-8 py-32">
      {/* Section label */}
      <p className="section-label mb-4">[ BLOG ]</p>

      {/* Section headline */}
      <h2 className="text-headline-lg mb-16 text-white">Latest news</h2>

      {/* News entries */}
      <div className="flex flex-col">
        {news.map((item) => (
          <article key={item.date} className="blog-entry group">
            {/* Date column */}
            <div className="flex-shrink-0 md:w-40">
              <time className="text-mono-label text-white/50">{item.date}</time>
            </div>

            {/* Title and excerpt column */}
            <div className="flex-grow md:px-8">
              <div className="mb-2">
                <span className="text-mono-label text-xs text-white/50">
                  {item.category}
                </span>
              </div>
              <h3 className="text-headline-sm mb-3 text-white group-hover:text-white/80">
                {item.title}
              </h3>
              <p className="text-body-md mb-4 text-white/50">{item.excerpt}</p>
              <Link href="#" className="button-outline-sm inline-flex items-center gap-2">
                READ
                <span>↗</span>
              </Link>
            </div>

            {/* Image column */}
            <div className="flex-shrink-0 md:w-64">
              <div className="aspect-video w-full border border-white/25 bg-white/5" />
            </div>
          </article>
        ))}
      </div>

      {/* View all link */}
      <div className="mt-12 flex justify-center">
        <Link href="#" className="button-outline inline-flex items-center gap-2">
          EXPLORE MORE
          <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
