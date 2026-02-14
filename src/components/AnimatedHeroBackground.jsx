import { motion } from "framer-motion";

export default function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* FAST ANIMATED GRADIENT */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #020617, #1e1b4b, #312e81, #020617)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8, // 🔥 faster = visible motion
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* BIG FLOATING BLOB 1 */}
      <motion.div
        className="absolute -top-40 -left-40 w-[520px] h-[520px]
                   bg-indigo-500/40 rounded-full blur-[140px]"
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* BIG FLOATING BLOB 2 */}
      <motion.div
        className="absolute top-1/3 -right-40 w-[520px] h-[520px]
                   bg-purple-500/40 rounded-full blur-[140px]"
        animate={{
          x: [0, -140, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* BLOB 3 – SLOW DRIFT */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[420px] h-[420px]
                   bg-sky-500/30 rounded-full blur-[120px]"
        animate={{
          y: [0, -120, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}
