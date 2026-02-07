import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LocaleProvider from "./context/LocaleProvider";

import Home from "./pages/Home";
import WritingDetail from "./pages/WritingDetail";

export default function App() {
  return (
    <LocaleProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <div className="min-h-screen bg-primary text-text-primary font-sans">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/writings/:type/:slug" element={<WritingDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </BrowserRouter>
    </LocaleProvider>
  );
}
