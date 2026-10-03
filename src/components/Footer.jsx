import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_NUMBER, PHONE_NUMBER, BUSINESS_LOCATION } from "../data/products";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const PRODUCT_LINKS = [
  { to: "/products?cat=wooden", label: "Wooden Doors" },
  { to: "/products?cat=teak", label: "Teak Wood Doors" },
  { to: "/products?cat=flush", label: "Flush Doors" },
  { to: "/products?cat=membrane", label: "Membrane Doors" },
  { to: "/products?cat=plywood", label: "Plywood Doors" },
  { to: "/products?cat=exterior", label: "Exterior Doors" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer
      style={{ background: "#171717", color: "#F7F5F0" }}
      className="mt-0"
    >
      {/* Main footer grid */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo mark */}
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: "#3B2418" }}
              >
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <rect x="1" y="1" width="14" height="18" rx="0.5" stroke="#D8C8B5" strokeWidth="1.2"/>
                  <rect x="3.5" y="3" width="9" height="7" rx="0.3" stroke="#D8C8B5" strokeWidth="0.8"/>
                  <circle cx="12" cy="10" r="0.9" fill="#8B5E3C"/>
                </svg>
              </div>
              <span
                className="font-bold tracking-widest text-base"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                S.S.T. DOORS
              </span>
            </div>

            <p className="text-xs leading-relaxed mb-4" style={{ color: "#9B9286" }}>
              Manufacturer &amp; Wholesaler of Wooden Doors, Teak Wood Doors, Flush Doors and related door products.
            </p>

            <div className="flex items-start gap-1.5 mb-2">
              <MapPin size={12} className="mt-0.5 flex-shrink-0" style={{ color: "#8B5E3C" }} />
              <span className="text-xs" style={{ color: "#9B9286" }}>{BUSINESS_LOCATION}, India</span>
            </div>

            <p className="text-xs mb-5" style={{ color: "#9B9286" }}>Established {2021}</p>

            {/* Contact CTAs */}
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase py-2.5 px-4 rounded border transition-all"
                style={{ borderColor: "#3A3632", color: "#D8C8B5" }}
              >
                <Phone size={11} />
                {PHONE_DISPLAY}
              </a>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase py-2.5 px-4 rounded text-white transition-all"
                style={{ background: "#25D366" }}
              >
                <MessageCircle size={11} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#8B5E3C" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm transition-colors"
                    style={{ color: "#9B9286" }}
                    onMouseOver={(e) => (e.target.style.color = "#F7F5F0")}
                    onMouseOut={(e) => (e.target.style.color = "#9B9286")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#8B5E3C" }}
            >
              Products
            </h3>
            <ul className="flex flex-col gap-3">
              {PRODUCT_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm transition-colors"
                    style={{ color: "#9B9286" }}
                    onMouseOver={(e) => (e.target.style.color = "#F7F5F0")}
                    onMouseOut={(e) => (e.target.style.color = "#9B9286")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#8B5E3C" }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6B6457" }}>Phone / WhatsApp</p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-sm transition-colors"
                  style={{ color: "#D8C8B5" }}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6B6457" }}>Location</p>
                <p className="text-sm" style={{ color: "#9B9286" }}>
                  Erode, Tamil Nadu<br />India
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6B6457" }}>Business Hours</p>
                <p className="text-sm" style={{ color: "#9B9286" }}>
                  Contact us for details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "#2A2520" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#6B6457" }}>
            © {year} S.S.T. Doors. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#6B6457" }}>
            Manufacturer &amp; Wholesaler · Erode, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
