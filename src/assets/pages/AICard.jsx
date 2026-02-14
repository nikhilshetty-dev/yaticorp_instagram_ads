import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import MobileCTA from "../components/MobileCTA";
import FAQ from "../components/FAQ";
import SyllabusAccordion from "../components/SyllabusAccordion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


export default function AICard() {
  console.log("AICard.jsx IS RENDERING");

  return (
    <div className="bg-red-600 text-white p-10 text-3xl font-bold">
      DEBUG — THIS IS AICARD.JSX
    </div>
  );
}

/* Fade animation */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* Word-by-word hero text */
const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  return (
    <motion.h1
      className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-3 ${
            word === "AI" || word === "Data"
              ? "bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent"
              : ""
          }`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default function AICard() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-20 px-6 py-20 md:py-28 text-center
                   bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
      >
        <AnimatedText text="AI & Data Analytics Career Program" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
        >
          Learn AI & Data skills using one smart AI Card — beginner friendly,
          practical, and career focused.
        </motion.p>

        <motion.a
          href="https://wa.me/919535440195"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-12 bg-indigo-600 text-white px-10 py-4
                     rounded-xl font-semibold shadow-lg hover:bg-indigo-700"
        >
          Enroll • One-time ₹500
        </motion.a>
      </motion.section>

      {/* SOCIAL PROOF */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-10 bg-white border-b border-slate-200"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6
                        text-center font-semibold text-slate-700">
          <div>1000+ Learners</div>
          <div>Beginner Friendly</div>
          <div>No Coding Required</div>
          <div>Lifetime Access</div>
        </div>
      </motion.section>

      {/* WHAT IS AI CARD */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-16 md:py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is this AI Card?
            </h2>
            <p className="text-slate-600 text-lg">
              The AI Card is a smart digital access card that unlocks your entry
              into the AI & Data Analytics Career Program.
            </p>
            <p className="text-slate-600 text-lg mt-4">
              Scan, activate, and start learning instantly — no technical
              background required.
            </p>
          </div>

          <motion.img
            src="/src/assets/ai-card.jpg"
            alt="AI Card"
            className="w-full max-w-md rounded-2xl shadow-2xl mx-auto"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.section>

      {/* HOW AI CARD WORKS */}
<motion.section
  id="how-ai-card-works"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="px-6 py-16 md:py-24 bg-slate-100 border-t border-slate-200"
>
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      How the AI Card Works
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
        <div className="text-indigo-600 text-4xl font-extrabold mb-4">
          01
        </div>
        <h3 className="text-xl font-semibold mb-2">
          Get the AI Card
        </h3>
        <p className="text-slate-600">
          Enroll once and receive your AI Card access.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
        <div className="text-indigo-600 text-4xl font-extrabold mb-4">
          02
        </div>
        <h3 className="text-xl font-semibold mb-2">
          Scan & Activate
        </h3>
        <p className="text-slate-600">
          Scan the card and activate your learning instantly.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
        <div className="text-indigo-600 text-4xl font-extrabold mb-4">
          03
        </div>
        <h3 className="text-xl font-semibold mb-2">
          Start Learning
        </h3>
        <p className="text-slate-600">
          Begin your AI & Data Analytics journey at your own pace.
        </p>
      </div>

    </div>
  </div>
</motion.section>


      {/* WHY BUY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-16 md:py-24 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why should you buy this AI Card?
          </h2>

          <ul className="space-y-5">
            {[
              "Beginner-friendly learning",
              "Industry-relevant AI tools",
              "Practical & career-oriented",
              "Lifetime access with certificate",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-lg">
                <CheckCircleIcon className="w-6 h-6 text-indigo-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* FOUNDER */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-16 md:py-24 bg-slate-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/src/assets/founder.jpg"
            alt="Yatheesha K S"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto
                       object-cover shadow-xl mb-6"
          />
          <h3 className="text-2xl md:text-3xl font-bold">
            Yatheesha K S
          </h3>
          <p className="text-indigo-600 text-lg mt-2">
            Managing Director, Yaticorp
          </p>
        </div>
      </motion.section>

      {/* SYLLABUS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-16 md:py-24 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            What You Will Learn
          </h2>
          <SyllabusAccordion />
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-16 md:py-24 bg-slate-50"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 px-6 py-10 text-center">
        <p className="text-white font-semibold">Yaticorp</p>
        <p className="text-sm opacity-70">
          Learn AI. Upgrade your career.
        </p>
      </footer>

      <WhatsAppButton />
      <MobileCTA />
    </div>
  );
}
