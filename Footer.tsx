import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "Women", href: "#women" },
      { name: "Men", href: "#men" },
      { name: "Children", href: "#children" },
      { name: "New Arrivals", href: "#new" },
    ],
    help: [
      { name: "Contact Us", href: "#contact" },
      { name: "Shipping", href: "#shipping" },
      { name: "Returns", href: "#returns" },
      { name: "Size Guide", href: "#size" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Sustainability", href: "#sustainability" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-2xl tracking-wider">
              ATELIER
            </Link>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Timeless fashion for the modern family. Crafted with care, 
              designed to last, and made with sustainable practices.
            </p>
            <div className="mt-6">
              <p className="text-xs tracking-wide uppercase text-primary-foreground/50 mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60"
                />
                <button className="bg-primary-foreground text-foreground px-6 py-2 text-xs tracking-wide uppercase hover:bg-primary-foreground/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/50">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/50">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/50">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {currentYear} ATELIER. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
