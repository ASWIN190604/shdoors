import { motion } from "framer-motion";

/**
 * SectionHeading — used across all pages for consistent section titles.
 * @param {string} label — small uppercase eyebrow label
 * @param {string} title — main heading text
 * @param {string} subtitle — optional subtitle/description text
 * @param {boolean} light — if true, renders for dark backgrounds
 * @param {string} align — "left" | "center" (default: center)
 */
export default function SectionHeading({ label, title, subtitle, light = false, align = "center" }) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";
  const mutedColor = light ? "rgba(216, 200, 181, 0.7)" : "#6B6457";
  const titleColor = light ? "#F7F5F0" : "#171717";
  const labelColor = light ? "#D8C8B5" : "#8B5E3C";
  const lineColor = light ? "#8B5E3C" : "#8B5E3C";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`flex flex-col gap-3 ${alignClass}`}
    >
      {label && (
        <div className="flex items-center gap-3" style={{ justifyContent: align === "left" ? "flex-start" : "center" }}>
          <span
            className="block"
            style={{ width: "1.5rem", height: "1.5px", background: lineColor, flexShrink: 0 }}
          />
          <span
            className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase"
            style={{ color: labelColor }}
          >
            {label}
          </span>
          <span
            className="block"
            style={{ width: "1.5rem", height: "1.5px", background: lineColor, flexShrink: 0 }}
          />
        </div>
      )}

      <h2
        className="font-bold"
        style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          color: titleColor,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="max-w-xl leading-relaxed"
          style={{
            fontSize: "0.9375rem",
            color: mutedColor,
            margin: align === "center" ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
