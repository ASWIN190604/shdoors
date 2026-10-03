import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Lightbox — full-screen image viewer with navigation.
 * @param {array} images — array of { src, alt } objects
 * @param {number} currentIndex — currently shown image index
 * @param {boolean} isOpen — visibility state
 * @param {function} onClose — close handler
 * @param {function} onPrev — prev handler
 * @param {function} onNext — next handler
 */
export default function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  // Keyboard navigation
  const handleKey = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const current = images?.[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.96)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative flex items-center justify-center max-w-5xl max-h-[90vh] w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            {current.src ? (
              <img
                src={current.src}
                alt={current.alt || "Gallery image"}
                className="max-w-full max-h-[85vh] object-contain rounded"
                style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.6)" }}
              />
            ) : (
              <div
                className="flex flex-col items-center justify-center rounded"
                style={{
                  width: "400px",
                  height: "400px",
                  maxWidth: "90vw",
                  background: "linear-gradient(145deg, #2A1A10, #3B2418)",
                  boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
                }}
              >
                <div className="border-2 mb-4" style={{ borderColor: "#8B5E3C", width: "80px", height: "120px", opacity: 0.6 }} />
                <p className="text-sm text-center px-8" style={{ color: "#D8C8B5" }}>{current.alt}</p>
              </div>
            )}

            {/* Caption */}
            {current.alt && (
              <div
                className="absolute bottom-0 left-0 right-0 text-center py-3 text-sm"
                style={{ color: "#D8C8B5", background: "rgba(0,0,0,0.5)" }}
              >
                {current.alt}
              </div>
            )}
          </motion.div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded text-white transition-all hover:bg-white/10"
            aria-label="Close image viewer"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded text-white transition-all hover:bg-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded text-white transition-all hover:bg-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-widest"
              style={{ color: "#9B9286" }}
            >
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
