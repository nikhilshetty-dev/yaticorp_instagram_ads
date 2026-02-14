import { motion } from "framer-motion";

export default function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden
                 bg-white border-t border-slate-200 px-4 py-3"
    >
      <a
        href="https://wa.me/919535440195"
        className="block text-center bg-indigo-600 text-white
                   py-3 rounded-xl font-semibold shadow-lg"
      >
        Enroll on WhatsApp • ₹500 One-time
      </a>
    </motion.div>
  );
}
