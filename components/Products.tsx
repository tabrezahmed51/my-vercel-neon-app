import Link from "next/link";

const products = [
  {
    title: "Grok",
    description:
      "An AI assistant that helps you understand the universe. Ask anything, get thoughtful responses powered by cutting-edge research.",
    cta: "USE NOW",
  },
  {
    title: "API",
    description:
      "Build with our powerful API. Access Grok's capabilities programmatically and integrate AI into your applications.",
    cta: "BUILD NOW",
  },
  {
    title: "Developer Docs",
    description:
      "Comprehensive documentation for developers. Learn how to integrate xAI technology into your projects.",
    cta: "LEARN MORE",
  },
];

export default function Products() {
  return (
    <section className="mx-auto max-w-[1280px] px-8 py-32">
      {/* Section label */}
      <p className="section-label mb-4">[ PRODUCTS ]</p>

      {/* Section headline */}
      <h2 className="text-headline-lg mb-16 text-white">
        AI for all humanity
      </h2>

      {/* Product cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {products.map((product) => (
          <div key={product.title} className="product-card first:border-l-0 md:first:border-l">
            <h3 className="text-headline-sm mb-4 text-white">{product.title}</h3>
            <p className="text-body-md mb-8 text-white/50">{product.description}</p>
            
            {/* Line art illustration placeholder */}
            <div className="mb-8 flex h-32 items-center justify-center border border-white/25">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white/25"
              >
                <rect x="10" y="10" width="60" height="60" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="40" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M25 55H55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M25 45H55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </div>

            <Link href="#" className="button-outline inline-flex items-center gap-2 self-start">
              {product.cta}
              <span>↗</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
