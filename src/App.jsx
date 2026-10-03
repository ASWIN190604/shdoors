import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";
import WhatsAppButton from "./components/WhatsAppButton";
import SplashScreen from "./components/SplashScreen";

// Lazy load pages for performance
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Page loading fallback
function PageLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#F7F5F0" }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated door icon */}
        <div
          className="border-2 animate-pulse"
          style={{ borderColor: "#D8C8B5", width: "40px", height: "56px" }}
        />
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "#8B5E3C" }}
        >
          S.S.T. Doors
        </p>
      </div>
    </div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function AppRoutes({ onReplayIntro }) {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar onReplayIntro={onReplayIntro} />
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer onReplayIntro={onReplayIntro} />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}

export default function App() {
  // Splash screen shown on initial visit/reload
  const [showSplash, setShowSplash] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      <AppRoutes onReplayIntro={() => setShowSplash(true)} />
    </BrowserRouter>
  );
}

