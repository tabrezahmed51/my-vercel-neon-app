import Link from "next/link";

const footerLinks = {
  tryGrokOn: [
    { text: "Web", href: "#" },
    { text: "iOS", href: "#" },
    { text: "Android", href: "#" },
  ],
  products: [
    { text: "Grok", href: "#" },
    { text: "API", href: "#" },
    { text: "SuperGrok", href: "#" },
  ],
  api: [
    { text: "Documentation", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Status", href: "#" },
  ],
  company: [
    { text: "About", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Press", href: "#" },
  ],
  resources: [
    { text: "Blog", href: "#" },
    { text: "Research", href: "#" },
    { text: "Security", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer-gradient relative mt-32 pb-0 pt-32">
      <div className="mx-auto max-w-[1280px] px-8">
        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* TRY GROK ON */}
          <div>
            <h4 className="text-mono-label mb-6 text-white/50 text-xs">
              TRY GROK ON
            </h4>
            <ul className="space-y-4">
              {footerLinks.tryGrokOn.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-body-md text-white transition-opacity duration-150 hover:opacity-70"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-mono-label mb-6 text-white/50 text-xs">
              PRODUCTS
            </h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-body-md text-white transition-opacity duration-150 hover:opacity-70"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* API */}
          <div>
            <h4 className="text-mono-label mb-6 text-white/50 text-xs">API</h4>
            <ul className="space-y-4">
              {footerLinks.api.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-body-md text-white transition-opacity duration-150 hover:opacity-70"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-mono-label mb-6 text-white/50 text-xs">
              COMPANY
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-body-md text-white transition-opacity duration-150 hover:opacity-70"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-mono-label mb-6 text-white/50 text-xs">
              RESOURCES
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-body-md text-white transition-opacity duration-150 hover:opacity-70"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/25 pt-8 md:flex-row">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M6 6L16 16M16 16L26 6M16 16V26"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
            <span className="text-mono-label text-white/50 text-sm">
              © 2026 xAI
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-mono-label text-white/50 text-sm hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-mono-label text-white/50 text-sm hover:text-white">
              Terms
            </Link>
            <Link href="#" className="text-mono-label text-white/50 text-sm hover:text-white">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
