import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, getWhatsAppUrl } from "../data/products";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-5 z-40 hidden md:flex items-center gap-2"
      role="complementary"
      aria-label="WhatsApp quick contact"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded shadow-lg"
            style={{ background: "#171717", color: "#F7F5F0", whiteSpace: "nowrap" }}
          >
            Chat with S.S.T. Doors
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with S.S.T. Doors on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white"
        style={{ background: "#25D366" }}
      >
        <MessageCircle size={26} />
      </motion.a>
    </div>
  );
}
