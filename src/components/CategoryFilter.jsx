import { motion } from "framer-motion";
import { CATEGORIES } from "../data/products";

/**
 * CategoryFilter — filter bar for the products catalog page.
 * @param {string} active — currently active category id
 * @param {function} onChange — callback with new category id
 */
export default function CategoryFilter({ active, onChange }) {
  return (
    <div
      className="flex items-center gap-2 flex-wrap"
      role="group"
      aria-label="Filter products by category"
    >
      {CATEGORIES.map((cat) => {
        const isActive = cat.id === active;
        return (
          <motion.button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            whileTap={{ scale: 0.96 }}
            className="relative text-[11px] font-semibold tracking-widest uppercase px-4 py-2 border transition-all duration-200"
            style={{
              background: isActive ? "#171717" : "transparent",
              color: isActive ? "#F7F5F0" : "#6B6457",
              borderColor: isActive ? "#171717" : "#E0D8CE",
              borderRadius: "2px",
            }}
            aria-pressed={isActive}
          >
            {cat.label}
          </motion.button>
        );
      })}
    </div>
  );
}
