import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div
      className="page-with-mobile-cta min-h-screen flex items-center justify-center"
      style={{ background: "#F7F5F0" }}
    >
      <div className="text-center px-6 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Door icon */}
          <div className="flex justify-center mb-8">
            <div
              className="border-2 flex items-center justify-center relative"
              style={{ borderColor: "#D8C8B5", width: "80px", height: "120px" }}
            >
              <div
                className="absolute border"
                style={{ borderColor: "#D8C8B5", top: "10px", left: "10px", right: "10px", height: "40px" }}
              />
              <div
                className="absolute border"
                style={{ borderColor: "#D8C8B5", top: "58px", left: "10px", right: "10px", height: "30px" }}
              />
              <div
                className="absolute rounded-full"
                style={{ background: "#D8C8B5", width: "7px", height: "7px", right: "12px", top: "50%" }}
              />
              {/* Open door effect */}
              <div
                className="absolute inset-0 border-2 origin-left"
                style={{
                  borderColor: "#E0D8CE",
                  transform: "perspective(200px) rotateY(-40deg)",
                  background: "rgba(216,200,181,0.15)",
                }}
              />
            </div>
          </div>

          <p
            className="font-bold mb-2"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "5rem",
              color: "#EDE3D7",
              lineHeight: 1,
            }}
          >
            404
          </p>

          <h1
            className="font-bold mb-4"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "1.75rem",
              color: "#171717",
            }}
          >
            Page Not Found
          </h1>

          <p className="text-sm leading-relaxed mb-8" style={{ color: "#6B6457" }}>
            The page you're looking for doesn't exist. It may have moved or been removed.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-6 py-3.5 border transition-all hover:bg-[#171717] hover:text-white hover:border-[#171717]"
            style={{ borderColor: "#E0D8CE", color: "#171717" }}
          >
            <ArrowLeft size={13} />
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
