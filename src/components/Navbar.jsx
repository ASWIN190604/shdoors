import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "../data/products";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
const callUrl = `tel:${PHONE_NUMBER}`;

export default function Navbar({ onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // On non-home pages the navbar is always solid
  const isHero = pathname === "/";
  const solid = scrolled || !isHero || menuOpen;

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: solid ? "rgba(247, 245, 240, 0.97)" : "transparent",
          borderBottomColor: solid ? "#E0D8CE" : "transparent",
          backdropFilter: solid ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ borderBottomWidth: "1px" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              aria-label="S.S.T. Doors Home"
            >
              {/* Door icon mark */}
              <div
                className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center"
                style={{ background: "#3B2418" }}
              >
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <rect x="1" y="1" width="14" height="18" rx="0.5" stroke="#D8C8B5" strokeWidth="1.2"/>
                  <rect x="3.5" y="3" width="9" height="7" rx="0.3" stroke="#D8C8B5" strokeWidth="0.8"/>
                  <circle cx="12" cy="10" r="0.9" fill="#8B5E3C"/>
                </svg>
              </div>

              {/* Wordmark */}
              <div>
                <span
                  className="block font-bold tracking-widest"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "1rem",
                    color: solid ? "#171717" : "#F7F5F0",
                    letterSpacing: "0.1em",
                    transition: "color 0.35s",
                  }}
                >
                  S.S.T. DOORS
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    [
                      "text-xs font-semibold tracking-widest uppercase transition-colors duration-200",
                      isActive
                        ? "text-[#8B5E3C]"
                        : solid
                        ? "text-[#2A2A2A] hover:text-[#8B5E3C]"
                        : "text-[#F7F5F0]/80 hover:text-[#F7F5F0]",
                    ].join(" ")
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={callUrl}
                className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-2.5 rounded transition-all duration-200"
                style={{
                  color: solid ? "#171717" : "#F7F5F0",
                  border: `1.5px solid ${solid ? "#E0D8CE" : "rgba(247,245,240,0.4)"}`,
                }}
                aria-label="Call S.S.T. Doors"
              >
                <Phone size={12} />
                Call Now
              </a>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-2.5 rounded text-white transition-all duration-200"
                style={{ background: "#25D366" }}
                aria-label="WhatsApp S.S.T. Doors"
              >
                <MessageCircle size={12} />
                WhatsApp
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden p-2 rounded"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{ color: solid ? "#171717" : "#F7F5F0" }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden flex flex-col"
              style={{ background: "#F7F5F0" }}
            >
              {/* Close */}
              <div className="flex justify-end p-4 border-b" style={{ borderColor: "#E0D8CE" }}>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                  style={{ color: "#171717" }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Wordmark in drawer */}
              <div className="px-6 py-4">
                <span
                  className="font-bold tracking-widest text-base"
                  style={{ fontFamily: '"Playfair Display", serif', color: "#171717" }}
                >
                  S.S.T. DOORS
                </span>
                <p className="text-xs mt-0.5" style={{ color: "#6B6457" }}>
                  Erode, Tamil Nadu
                </p>
              </div>

              {/* Links */}
              <nav className="flex-1 px-6 py-2 flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      [
                        "block py-3 text-sm font-semibold tracking-widest uppercase border-b transition-colors",
                        isActive ? "text-[#8B5E3C] border-[#E0D8CE]" : "text-[#171717] border-[#E0D8CE] hover:text-[#8B5E3C]",
                      ].join(" ")
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              {/* Bottom CTAs in drawer */}
              <div className="p-6 flex flex-col gap-3 mb-20">
                {onReplayIntro && (
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      onReplayIntro();
                    }}
                    className="text-center text-xs font-semibold tracking-widest uppercase py-2 text-[#8B5E3C] hover:underline cursor-pointer mb-1"
                  >
                    ✦ Replay Intro
                  </button>
                )}
                <a
                  href={callUrl}
                  className="flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-widest uppercase rounded border transition-all"
                  style={{ borderColor: "#E0D8CE", color: "#171717" }}
                >
                  <Phone size={13} />
                  Call Now
                </a>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-widest uppercase rounded text-white"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={13} />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
