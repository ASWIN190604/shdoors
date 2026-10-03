import { Phone, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "../data/products";

export default function MobileActionBar() {
  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex"
      style={{
        background: "#171717",
        height: "64px",
        paddingBottom: "env(safe-area-inset-bottom)",
        borderTop: "1px solid #2A2520",
      }}
      role="complementary"
      aria-label="Quick contact actions"
    >
      {/* Call */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1 flex flex-col items-center justify-center gap-1 text-white transition-all active:bg-white/10"
        aria-label="Call S.S.T. Doors"
        style={{ borderRight: "1px solid #2A2520" }}
      >
        <Phone size={18} />
        <span className="text-[10px] font-semibold tracking-widest uppercase">Call Now</span>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 transition-all active:opacity-80"
        aria-label="WhatsApp S.S.T. Doors"
        style={{ background: "#25D366" }}
      >
        <MessageCircle size={18} color="#fff" />
        <span className="text-[10px] font-semibold tracking-widest uppercase text-white">WhatsApp</span>
      </a>
    </div>
  );
}
