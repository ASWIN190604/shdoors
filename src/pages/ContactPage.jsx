import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import EnquiryForm from "../components/EnquiryForm";
import { PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_NUMBER, getWhatsAppUrl } from "../data/products";

const waUrl = getWhatsAppUrl();

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact S.S.T. Doors | Wooden Door Enquiry in Erode";
    return () => {
      document.title = "S.S.T. Doors | Wooden Doors, Teak Doors & Flush Doors in Erode";
    };
  }, []);

  return (
    <div className="page-with-mobile-cta">
      {/* Hero */}
      <section
        className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden"
        style={{ background: "#171717" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(139,94,60,0.3) 60px,
              rgba(139,94,60,0.3) 61px
            )`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px" style={{ background: "#8B5E3C" }} />
              <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "#8B5E3C" }}>
                Get in Touch
              </span>
            </div>
            <h1
              className="font-bold mb-5"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                color: "#F7F5F0",
                lineHeight: 1.1,
                maxWidth: "700px",
              }}
            >
              Let's Talk About Your Requirement.
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(216,200,181,0.75)", maxWidth: "520px" }}
            >
              Looking for wooden doors for your home, project or bulk requirement? Contact S.S.T. Doors directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12" style={{ background: "#EDE9E1" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Call */}
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-5 p-6 border group transition-all hover:bg-[#171717]"
              style={{ borderColor: "#E0D8CE", background: "#fff" }}
            >
              <div
                className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#8B5E3C]"
                style={{ background: "#F7F5F0" }}
              >
                <Phone size={20} style={{ color: "#8B5E3C" }} className="group-hover:text-white" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase mb-1 transition-colors group-hover:text-[#8B5E3C]" style={{ color: "#6B6457" }}>
                  Call Now
                </p>
                <p className="text-sm font-semibold transition-colors group-hover:text-white" style={{ color: "#171717" }}>
                  {PHONE_DISPLAY}
                </p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-5 p-6 border group transition-all"
              style={{ borderColor: "#E0D8CE", background: "#fff" }}
            >
              <div
                className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0 transition-all group-hover:opacity-80"
                style={{ background: "#25D366" }}
              >
                <MessageCircle size={20} color="#fff" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: "#6B6457" }}>
                  WhatsApp
                </p>
                <p className="text-sm font-semibold" style={{ color: "#171717" }}>
                  {PHONE_DISPLAY}
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-5 p-6 border"
              style={{ borderColor: "#E0D8CE", background: "#fff" }}
            >
              <div
                className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: "#F7F5F0" }}
              >
                <MapPin size={20} style={{ color: "#8B5E3C" }} />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: "#6B6457" }}>
                  Location
                </p>
                <p className="text-sm font-semibold" style={{ color: "#171717" }}>
                  Erode, Tamil Nadu, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form + Map placeholder */}
      <section className="py-16 md:py-24" style={{ background: "#F7F5F0" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div>
              <SectionHeading
                label="Enquiry Form"
                title="Send an Enquiry."
                subtitle="Fill in your details and we'll open WhatsApp with your message pre-filled."
                align="left"
              />
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>

            {/* Right info panel */}
            <div className="flex flex-col gap-6">
              {/* Contact details */}
              <div
                className="border p-8"
                style={{ borderColor: "#E0D8CE", background: "#fff" }}
              >
                <h2
                  className="font-bold mb-6"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "1.25rem",
                    color: "#171717",
                  }}
                >
                  Contact Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase mb-1.5" style={{ color: "#8B5E3C" }}>
                      Phone / WhatsApp
                    </p>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="text-base font-semibold hover:text-[#8B5E3C] transition-colors"
                      style={{ color: "#171717" }}
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>

                  <div className="h-px" style={{ background: "#E0D8CE" }} />

                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase mb-1.5" style={{ color: "#8B5E3C" }}>
                      Location
                    </p>
                    <p className="text-base font-semibold" style={{ color: "#171717" }}>
                      Erode, Tamil Nadu
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "#6B6457" }}>India</p>
                  </div>

                  <div className="h-px" style={{ background: "#E0D8CE" }} />

                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase mb-1.5" style={{ color: "#8B5E3C" }}>
                      Business
                    </p>
                    <p className="text-sm" style={{ color: "#6B6457" }}>
                      Manufacturer &amp; Wholesaler of Wooden Doors
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "#6B6457" }}>Established 2021</p>
                  </div>
                </div>
              </div>

              {/* CTA Block */}
              <div
                className="p-8"
                style={{
                  background: "linear-gradient(135deg, #3B2418, #8B5E3C)",
                }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(216,200,181,0.7)" }}>
                  Quickest Response
                </p>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.2rem", color: "#F7F5F0" }}
                >
                  Chat on WhatsApp
                </h3>
                <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(216,200,181,0.75)" }}>
                  For the fastest response, contact us directly on WhatsApp. Discuss pricing, availability and requirements in real-time.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3.5 text-xs font-semibold tracking-widest uppercase text-white transition-all hover:opacity-90"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={14} />
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
