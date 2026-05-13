import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "industrial_splash_shown";

const IndustrialSplash = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    setVisible(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(false);
    }, 5000);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] bg-[#1a1815] text-[#e8e3d8] overflow-hidden flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          {/* Blueprint grid */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e8e3d8 1px, transparent 1px), linear-gradient(to bottom, #e8e3d8 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Concrete texture vignette */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(193,108,74,0.18), transparent 55%), radial-gradient(circle at 80% 75%, rgba(120,110,95,0.22), transparent 60%)",
            }}
          />

          {/* Top frame */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute top-6 left-6 right-6 h-px bg-[#c16c4a] origin-left"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="absolute bottom-6 left-6 right-6 h-px bg-[#c16c4a] origin-right"
          />

          {/* Corner marks */}
          {[
            "top-6 left-6",
            "top-6 right-6",
            "bottom-6 left-6",
            "bottom-6 right-6",
          ].map((pos, i) => (
            <motion.div
              key={pos}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
              className={`absolute ${pos} w-3 h-3 border border-[#c16c4a]`}
            />
          ))}

          {/* Tickers */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-10 left-10 font-mono text-[10px] tracking-[0.3em] text-[#c16c4a]"
          >
            ◼ EST · 2024 — RIAU, ID
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute top-10 right-10 font-mono text-[10px] tracking-[0.3em] text-[#c16c4a]"
          >
            N 0.5°7′ · E 101.4°4′
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-10 left-10 font-mono text-[10px] tracking-[0.3em] text-[#8a8275]"
          >
            BLUEPRINT · DRAFT 001
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-10 right-10 font-mono text-[10px] tracking-[0.3em] text-[#8a8275]"
          >
            SCALE 1 : 100
          </motion.div>

          {/* Center content */}
          <div className="relative text-center px-6">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="font-mono text-[10px] md:text-xs text-[#c16c4a] mb-6 uppercase"
            >
              Architecture · Studio
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-8xl font-light leading-[0.95] tracking-tight"
              >
                MORNING
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display italic text-5xl sm:text-7xl md:text-8xl font-light leading-[0.95] tracking-tight text-[#c16c4a]"
              >
                ARCT STUDIO
              </motion.h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="h-px w-32 bg-[#c16c4a] mx-auto my-8 origin-center"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="font-mono text-[11px] md:text-xs tracking-[0.4em] text-[#bdb4a3] uppercase"
            >
              Building · The · Future · Of · Living
            </motion.p>

            {/* Loading bar */}
            <div className="mt-12 mx-auto w-56 sm:w-72">
              <div className="flex justify-between font-mono text-[9px] tracking-[0.3em] text-[#8a8275] mb-2">
                <span>LOADING</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  100%
                </motion.span>
              </div>
              <div className="h-px bg-[#3a3530] relative overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 3.4, ease: "easeInOut" }}
                  className="h-full bg-[#c16c4a]"
                />
              </div>
            </div>
          </div>

          {/* Scanning line */}
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "110%", opacity: [0, 0.4, 0] }}
            transition={{ delay: 0.8, duration: 3.6, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-[#c16c4a]/40 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IndustrialSplash;
