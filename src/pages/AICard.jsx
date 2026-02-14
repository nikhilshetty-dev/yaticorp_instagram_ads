import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import AnimatedHeroBackground from "../components/AnimatedHeroBackground";
import FAQ from "../components/FAQ";
import { CheckCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import aiCardImg from "../assets/ai-card.jpg";
import certificateSampleImg from "../assets/certificate-sample.jpg";
import trainerEnglishImg from "../assets/trainer-english.png";
import trainerKannadaImg from "../assets/trainer-kannada.png";
import yaticorpLogoImg from "../assets/yaticorp-logo.png";
import aiCardBackImg from "../assets/ai-card-back.jpg";


/** @typedef {"hero" | "mobile-hero" | "demo" | "final" | "sticky"} CtaPlacement */


const whatsappLink = "https://www.yaticorp.com/buy-ai-card";
const curriculumPath = "/curriculum.pdf";
const youtubeVideoId = "yBr56a0SMdQ";


const outcomes = [
 "Confident with AI tools used in industry",
 "Portfolio-ready project exposure",
 "Interview and career guidance included",
 "Verified certificate from Yaticorp",
];


const metrics = [
 { label: "Learners Enrolled", value: "75,000+" },
 { label: "Access", value: "Lifetime" },
 { label: "Mode", value: "Physical + Digital" },
 { label: "Support", value: "English / Kannada" },
];


const howItWorks = [
 {
   title: "Register via WhatsApp",
   desc: "Enroll with a one-time payment and get instant onboarding.",
 },
 {
   title: "Receive AI Card",
   desc: "Physical AI Card kit is delivered to your address.",
 },
 {
   title: "Start Learning",
   desc: "Access modules, assignments, and guided practice on platform.",
 },
 {
   title: "Assessment & Certificate",
   desc: "Complete tests to unlock certification and scholarship eligibility.",
 },
];


const platformFeatures = [
 "Progress tracking dashboard",
 "Module quizzes and assessments",
 "Hands-on assignments",
 "Downloadable study materials",
 "Leaderboard and challenge activities",
 "Mentor support for doubts",
];


const whyChooseItems = [
 "Affordable one-time fee of just ₹500",
 "Physical AI Card with online learning dashboard",
 "Hands-on experience with industry-used AI tools",
 "Access to internship opportunities and career guidance",
 "Scholarship assistance and higher education support",
 "Designed for beginners from any background",
];


const skillsYouWillBuild = [
 "AI Foundations from scratch",
 "Applied AI with 50+ tools",
 "Microsoft Power BI",
 "Tableau for data visualization",
];


const trainers = [
 {
   name: "Dr. S. Ruban",
   role: "AI Trainer (English)",
   img: trainerEnglishImg,
   desc: "Associate Professor with 23+ years of teaching experience and international academic exposure.",
 },
 {
   name: "Mrs. Akshatha Shetty",
   role: "AI Trainer (Kannada)",
   img: trainerKannadaImg,
   desc: "Assistant Professor and National Trainer, passionate about teaching AI to beginners.",
 },
];


const heroTrustPoints = [
 "Trusted by 75,000+ learners",
 "Physical AI Card delivered to your home",
 "Beginner-friendly • Any background • Lifetime access",
];


const certificatePoints = [
 "Assessment-based validation",
 "Verifiable certificate format",
 "Career profile ready credential",
];


const quickLinks = [
 { label: "Home", href: "/" },
 { label: "Services", href: "/services" },
 { label: "Products", href: "/products" },
 { label: "About Us", href: "/about-us" },
 { label: "News & Media", href: "/news-media" },
];


// Keep empty until real profiles are verified to avoid dead links.
const socialLinks = [];


const sectionBg = {
 base: "bg-[#eef4ff]",
 alt: "bg-[#f7f9ff]",
 deep: "bg-[linear-gradient(180deg,#dce9ff_0%,#eef4ff_100%)]",
};


const sectionPad = "py-12 sm:py-20";
const cardStyle =
 "bg-white/90 border border-[#d7e4ff] backdrop-blur-sm shadow-[0_18px_40px_-24px_rgba(37,99,235,0.28)]";
const focusRing =
 "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-transparent";
const hoverLift =
 "hover:-translate-y-1 hover:shadow-[0_22px_45px_-24px_rgba(37,99,235,0.35)] transition-all duration-300";


const fadeUp = {
 hidden: { opacity: 0, y: 24 },
 visible: { opacity: 1, y: 0 },
};


const stagger = {
 visible: { transition: { staggerChildren: 0.08 } },
};


const cn = (...parts) => parts.filter(Boolean).join(" ");


function trackEnrollClick(placement) {
 if (typeof window !== "undefined" && typeof window.fbq === "function") {
   window.fbq("track", "InitiateCheckout", {
     placement,
     source: "ai-card-landing",
   });
 }
}


function AnimatedHeading({ text }) {
 const shouldReduceMotion = useReducedMotion();
 const words = useMemo(() => text.split(" "), [text]);


 return (
   <motion.h1
     className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
     initial={shouldReduceMotion ? false : "hidden"}
     animate={shouldReduceMotion ? undefined : "visible"}
     variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
   >
     {words.map((word, i) => (
       <motion.span
         key={`${word}-${i}`}
         className="inline-block mr-3 bg-gradient-to-r from-slate-100 via-blue-100 to-slate-200 bg-clip-text text-transparent"
         variants={
           shouldReduceMotion
             ? undefined
             : {
                 hidden: { opacity: 0, y: 18 },
                 visible: { opacity: 1, y: 0 },
               }
         }
       >
         {word}
       </motion.span>
     ))}
   </motion.h1>
 );
}


function MetricCard({ value, label }) {
 return (
   <div className={`${cardStyle} rounded-xl p-5 text-center`}>
     <p className="text-xl sm:text-2xl font-bold text-blue-700">{value}</p>
     <p className="text-sm text-slate-700 mt-1">{label}</p>
   </div>
 );
}


function FeatureCard({ text, iconClassName = "text-blue-600" }) {
 return (
   <div className={`${cardStyle} flex gap-4 p-6 rounded-xl ${hoverLift}`}>
     <CheckCircleIcon className={cn("w-6 h-6 mt-1", iconClassName)} />
     <p className="font-medium text-slate-700">{text}</p>
   </div>
 );
}


function PrimaryCtaButton({
 placement,
 compact = false,
 fullWidth = false,
 withGlow = false,
 className = "",
}) {
 const shouldReduceMotion = useReducedMotion();


 return (
   <motion.a
     href={whatsappLink}
     target="_blank"
     rel="noopener noreferrer"
     onClick={() => trackEnrollClick(placement)}
     aria-label={`Enroll now via WhatsApp (${placement})`}
     className={cn(
       "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 min-h-[48px]",
       "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_20px_40px_-12px_rgba(37,99,235,0.45)]",
       focusRing,
       compact ? "px-8 py-3 text-sm" : "px-10 py-4",
       fullWidth && "w-full",
       className
     )}
     animate={
       withGlow && !shouldReduceMotion
         ? {
             boxShadow: [
               "0 0 0 rgba(37,99,235,0)",
               "0 0 40px rgba(37,99,235,0.4)",
               "0 0 0 rgba(37,99,235,0)",
             ],
           }
         : undefined
     }
     transition={withGlow && !shouldReduceMotion ? { duration: 2.5, repeat: Infinity } : undefined}
   >
     Enroll Now @ ₹500
   </motion.a>
 );
}


function CurriculumButton({ compact = false, className = "" }) {
 return (
   <a
     href={curriculumPath}
     download
     className={cn(
       "inline-flex items-center justify-center rounded-xl font-semibold min-h-[48px]",
       "border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition",
       focusRing,
       compact ? "px-6 py-3 text-sm" : "px-8 py-4",
       className
     )}
     aria-label="Download detailed curriculum PDF"
   >
     Download Curriculum
   </a>
 );
}


export default function AICard() {
 const shouldReduceMotion = useReducedMotion();
 const [isDemoLoaded, setIsDemoLoaded] = useState(false);
 const [canTilt, setCanTilt] = useState(false);



 const cardRef = useRef(null);
 const x = useMotionValue(0);
 const y = useMotionValue(0);
 const rotateX = useSpring(y, { stiffness: 120, damping: 18 });
 const rotateY = useSpring(x, { stiffness: 120, damping: 18 });


 useEffect(() => {
   if (typeof window === "undefined") return undefined;


   const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
   const updateCanTilt = () => setCanTilt(mediaQuery.matches && !shouldReduceMotion);


   updateCanTilt();


   if (mediaQuery.addEventListener) {
     mediaQuery.addEventListener("change", updateCanTilt);
     return () => mediaQuery.removeEventListener("change", updateCanTilt);
   }


   mediaQuery.addListener(updateCanTilt);
   return () => mediaQuery.removeListener(updateCanTilt);
 }, [shouldReduceMotion]);


 const handleMouseMove = (e) => {
   if (!canTilt) return;
   const rect = cardRef.current?.getBoundingClientRect();
   if (!rect) return;


   const px = (e.clientX - rect.left) / rect.width - 0.5;
   const py = (e.clientY - rect.top) / rect.height - 0.5;


   x.set(px * 16);
   y.set(-py * 16);
 };


 const handleMouseLeave = () => {
   x.set(0);
   y.set(0);
 };


 const demoPreviewImage = `https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg`;
 const demoEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=1&modestbranding=1&rel=0`;


 return (
   <div className="bg-[#0b1320] text-slate-100 pb-24 sm:pb-0">
     <Navbar />


     <section className="relative px-4 sm:px-6 pt-20 sm:pt-32 pb-16 sm:pb-28 overflow-hidden">
       <AnimatedHeroBackground />


       <motion.div
         className="absolute inset-0 opacity-30"
         style={{
           backgroundImage:
             "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(34,211,238,0.25), transparent 45%), radial-gradient(circle at 50% 80%, rgba(96,165,250,0.2), transparent 50%)",
         }}
         animate={shouldReduceMotion ? { opacity: 0.22 } : { opacity: [0.18, 0.35, 0.18] }}
         transition={shouldReduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
       />


       <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] h-[620px] rounded-full bg-blue-500/15 blur-3xl" />
       <div className="absolute -bottom-40 right-0 w-[520px] h-[520px] rounded-full bg-cyan-400/10 blur-3xl" />


       <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
         <motion.div
           className="text-center lg:text-left order-1"
           initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
           animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
           transition={shouldReduceMotion ? undefined : { duration: 0.9 }}
         >
           <div className="inline-flex items-center gap-2 text-xs sm:text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
             Price will increase soon
           </div>


           <div className="mt-6">
             <AnimatedHeading text="Get Your AI Card" />
              <AnimatedHeading text="@ ₹500" />
           </div>


           <p className="mt-4 text-xl md:text-2xl text-slate-100 font-medium">AI & Data Analytics Career Program</p>


           <p className="mt-6 text-base md:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
             Build practical AI & Data skills with 50+ tools, Power BI, Tableau, internships, scholarships and
             career guidance - all in one program.
           </p>


           <ul className="mt-6 text-sm text-slate-200 space-y-2">
             {heroTrustPoints.map((point) => (
               <li key={point} className="flex items-start gap-2 justify-center lg:justify-start">
                 <CheckCircleIcon className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                 <span>{point}</span>
               </li>
             ))}
           </ul>


           <div className="mt-10 hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
             <PrimaryCtaButton placement="hero" withGlow />
             <CurriculumButton />
           </div>


           <p className="mt-4 text-xs text-slate-300 hidden sm:block">
             Verified certificate • Physical card delivery • Lifetime access
           </p>
         </motion.div>


         <div className="order-2 flex flex-col items-center lg:items-end">
           <motion.div
            ref={cardRef}
            onMouseMove={canTilt ? handleMouseMove : undefined}
            onMouseLeave={canTilt ? handleMouseLeave : undefined}
            style={canTilt ? { rotateX, rotateY, transformPerspective: 1200 } : undefined}
            className="relative w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[420px]"
          >
            <div
              className="relative bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute -inset-y-10 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[20deg]"
                  animate={{ x: ["-150%", "150%"] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transform: "translateZ(35px)" }}
                />
              )}




              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/10 via-transparent to-cyan-300/10"
                style={{ transform: "translateZ(20px)" }}
              />




              <img
                src={aiCardImg}
                alt="AI Card"
                className="w-full h-auto rounded-xl object-cover"
                style={{ transform: "translateZ(0px)" }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>





           <div className="mt-4 flex sm:hidden flex-col items-center gap-3 w-full max-w-[300px]">
             <PrimaryCtaButton placement="mobile-hero" compact fullWidth />
             <CurriculumButton compact className="w-full" />


             <p className="mt-1 text-xs text-slate-300 text-center">
               Verified certificate • Physical card delivery • Lifetime access
             </p>
           </div>
         </div>
       </div>
     </section>


     <section className={`px-4 sm:px-6 py-8 ${sectionBg.alt} border-y border-[#d7e4ff]`}>
       <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
         {metrics.map((item) => (
           <MetricCard key={item.label} value={item.value} label={item.label} />
         ))}
       </div>
     </section>


     <section className={`px-4 sm:px-6 py-14 ${sectionBg.deep} border-y border-[#d7e4ff]`}>
       <div className="max-w-4xl mx-auto text-center">
         <motion.h2
           className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8"
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           Watch the Course Demo
         </motion.h2>


         <motion.div className={`${cardStyle} rounded-2xl p-3`} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
           <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900">
             {!isDemoLoaded ? (
               <button
                 type="button"
                 onClick={() => setIsDemoLoaded(true)}
                 className={cn("absolute inset-0 w-full h-full text-left", focusRing)}
                 aria-label="Play course demo video"
               >
                 <img
                   src={demoPreviewImage}
                   alt="Course demo preview"
                   className="w-full h-full object-cover"
                   loading="lazy"
                   decoding="async"
                 />
                 <span className="absolute inset-0 bg-black/35 flex items-center justify-center gap-3 text-white font-semibold text-lg">
                   <PlayCircleIcon className="w-12 h-12" />
                   Play Demo
                 </span>
               </button>
             ) : (
               <iframe
                 className="absolute inset-0 w-full h-full"
                 src={demoEmbedUrl}
                 title="Course Demo"
                 frameBorder="0"
                 allow="autoplay; picture-in-picture"
                 allowFullScreen
                 loading="lazy"
               />
             )}
           </div>
         </motion.div>


         <p className="text-sm text-slate-700 mt-3">A quick preview of the AI & Data course experience and learning flow.</p>


         <div className="mt-5">
           <PrimaryCtaButton placement="demo" />
         </div>
       </div>
     </section>


     <section className={`px-4 sm:px-6 ${sectionPad} ${sectionBg.base}`}>
       <div className="max-w-6xl mx-auto text-center">
         <motion.h2
           className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-10"
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           How It Works
         </motion.h2>


         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
           {howItWorks.map((step, i) => (
             <div key={step.title} className={`${cardStyle} rounded-2xl p-6 ${hoverLift}`}>
               <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                 {i + 1}
               </div>
               <h3 className="font-semibold text-lg text-slate-900">{step.title}</h3>
               <p className="text-slate-700 text-sm mt-2">{step.desc}</p>
             </div>
           ))}
         </div>
       </div>
     </section>


     <section className={`px-4 sm:px-6 ${sectionPad} ${sectionBg.alt} border-b border-[#d7e4ff]`}>
       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border border-[#d7e4ff] rounded-2xl p-8">
           <p className="text-xs uppercase tracking-widest text-blue-700 mb-2">Language Flexibility</p>
           <h3 className="text-2xl font-bold text-slate-900">Learn in English or Kannada</h3>
           <p className="text-slate-700 mt-3 leading-relaxed">
             Choose your preferred language and continue learning without friction. The same curriculum is available
             in both tracks.
           </p>
         </div>


         <div className={`${cardStyle} rounded-2xl p-8`}>
           <p className="text-xs uppercase tracking-widest text-emerald-700 mb-2">Outcomes</p>
           <h3 className="text-2xl font-bold text-slate-900 mb-4">What You&apos;ll Achieve</h3>
           <ul className="space-y-3">
             {outcomes.map((item) => (
               <li key={item} className="flex items-start gap-3">
                 <CheckCircleIcon className="w-5 h-5 text-emerald-600 mt-0.5" />
                 <p className="text-slate-700">{item}</p>
               </li>
             ))}
           </ul>
         </div>
       </div>
     </section>


     <section className={`relative px-4 sm:px-6 ${sectionPad} ${sectionBg.base}`}>
       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8dafd] to-transparent" />
       <div className="max-w-4xl mx-auto text-center">
         <motion.h2
           className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-10"
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           Why Learners Choose AI Card
         </motion.h2>


         <motion.div className="grid sm:grid-cols-2 gap-6 text-left" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
           {whyChooseItems.map((item) => (
             <motion.div key={item} variants={fadeUp} className={`${cardStyle} flex gap-4 p-6 rounded-2xl ${hoverLift}`}>
               <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-1" />
               <p className="leading-relaxed text-slate-700">{item}</p>
             </motion.div>
           ))}
         </motion.div>
       </div>
     </section>


     <section className={`relative px-4 sm:px-6 ${sectionPad} ${sectionBg.alt} border-t border-[#d7e4ff]`}>
       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8dafd] to-transparent" />
       <div className="max-w-6xl mx-auto text-center">
         <motion.h2
           className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-12"
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           Learn From Experienced AI Trainers
         </motion.h2>


         <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
           {trainers.map((t) => (
             <motion.div
               key={t.name}
               variants={fadeUp}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className={`${cardStyle} p-8 rounded-2xl ${hoverLift}`}
             >
               <img
                 src={t.img}
                 alt={t.name}
                 className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 ring-4 ring-blue-200/80 shadow-lg object-cover"
                 loading="lazy"
                 decoding="async"
               />
               <h3 className="font-bold text-xl text-slate-900">{t.name}</h3>
               <p className="text-blue-700">{t.role}</p>
               <p className="text-sm text-slate-700 mt-3 leading-relaxed">{t.desc}</p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>


     <section className={`px-4 sm:px-6 ${sectionPad} ${sectionBg.base} border-t border-[#d7e4ff]`}>
       <div className="max-w-5xl mx-auto text-center">
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-10">Inside the Learning Platform</h2>
         <div className="grid sm:grid-cols-2 gap-6 text-left">
           {platformFeatures.map((item) => (
             <FeatureCard key={item} text={item} />
           ))}
         </div>
       </div>
     </section>


     <section className={`px-4 sm:px-6 ${sectionPad} ${sectionBg.alt} border-t border-[#d7e4ff]`}>
       <div className="max-w-5xl mx-auto text-center">
         <motion.h2
           className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-10"
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           Skills You Will Build
         </motion.h2>


         <motion.div className="grid sm:grid-cols-2 gap-6 text-left mb-12" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
           {skillsYouWillBuild.map((item) => (
             <motion.div key={item} variants={fadeUp}>
               <FeatureCard text={item} iconClassName="text-emerald-600" />
             </motion.div>
           ))}
         </motion.div>


         <a
           href={curriculumPath}
           download
           className={cn(
             "inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition min-h-[48px]",
             focusRing
           )}
           aria-label="Download detailed curriculum PDF"
         >
           Download Detailed Curriculum (PDF)
         </a>
       </div>
     </section>


     {/* ================= CERTIFICATE SHOWCASE ================= */}
<section className="bg-[#e5e7eb] px-4 py-16 sm:px-6 sm:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="rounded-[28px] border border-white/20 bg-gradient-to-br from-[#3b66e2] via-[#2f55c6] to-[#25439c] p-4 sm:p-8 lg:p-10 shadow-[0_30px_80px_-28px_rgba(28,53,138,0.65)]">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div className="relative">
          <div className="rounded-2xl border-4 border-blue-200/70 bg-[#ececec] p-3 sm:p-4 shadow-[0_24px_55px_-28px_rgba(0,0,0,0.6)]">
            <img
              src={certificateSampleImg}
              alt="AI Professional Certificate sample"
              className="w-full rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="absolute right-4 top-4 rounded-sm bg-[#b9832d] px-4 py-2 text-sm font-bold tracking-wide text-white sm:right-5 sm:top-5 sm:text-base">
            SAMPLE
          </div>
        </div>

        <div className="text-center text-white lg:text-left">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm lg:mx-0">
            <CheckCircleIcon className="h-12 w-12 text-white" />
          </div>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            AI Professional Certificate
          </h2>

          <p className="mt-4 text-xl text-blue-100 sm:text-2xl">
            Industry-recognized certification from Yaticorp
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEnrollClick("final")}
            className={cn(
              "mt-8 inline-flex min-h-[56px] items-center justify-center rounded-sm bg-white px-8 py-3 text-xl font-semibold text-[#2f55c6] shadow-[0_20px_45px_-24px_rgba(0,0,0,0.45)] transition hover:scale-[1.02] hover:bg-blue-50",
              "w-full sm:w-auto",
              focusRing
            )}
            aria-label="Enroll now and start learning"
          >
            Enroll Now &amp; Start Learning
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



     <section className={`px-4 sm:px-6 ${sectionPad} ${sectionBg.alt}`}>
       <div className="max-w-5xl mx-auto">
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
           Frequently Asked Questions
         </h2>
         <FAQ />
       </div>
     </section>


     <footer className="bg-gradient-to-br from-[#0b1320] via-[#0f1b36] to-[#122244] text-slate-100">
       <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
         <div>
           <img
             src={yaticorpLogoImg}
             alt="Yaticorp"
             className="h-10 mb-4"
             loading="lazy"
             decoding="async"
           />
           <p className="text-sm leading-relaxed text-slate-200">
             Empowering innovation through digitalization, automation, and intelligent business solutions. Building
             the future of technology with purpose and precision.
           </p>
         </div>


         <div>
           <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">Quick Links</h4>
           <ul className="space-y-2 text-sm text-slate-200">
             {quickLinks.map((link) => (
               <li key={link.label}>
                 <a href={link.href} className={cn("hover:text-white transition", focusRing)}>
                   {link.label}
                 </a>
               </li>
             ))}
           </ul>
         </div>


         <div>
           <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">Contact Us</h4>
           <div className="text-sm text-slate-200 space-y-4">
             <div className="flex gap-3">
               <MapPinIcon className="w-5 h-5 text-slate-300 mt-1" />
               <p>
                 <span className="font-semibold">Bangalore Office:</span>
                 <br />
                 1st FLOOR, 677, Suite 899, 13th Cross, Sector-1, HSR Layout, Bangalore, Karnataka - 560102
               </p>
             </div>
             <div className="flex gap-3">
               <MapPinIcon className="w-5 h-5 text-slate-300 mt-1" />
               <p>
                 <span className="font-semibold">Mangalore Office:</span>
                 <br />
                 Door No. V6-4-152/14(2), 2nd Floor, Sri Ram Building, Kottara Chowki, Mangalore, Karnataka - 575006
               </p>
             </div>
             <div className="flex items-center gap-3">
               <PhoneIcon className="w-5 h-5 text-slate-300" />
               <a href="tel:+919606977984" className={cn("hover:underline", focusRing)}>
                 +91 9606977984
               </a>
             </div>
             <div className="flex items-center gap-3">
               <EnvelopeIcon className="w-5 h-5 text-slate-300" />
               <a href="mailto:contact@yaticorp.com" className={cn("hover:underline", focusRing)}>
                 contact@yaticorp.com
               </a>
             </div>
           </div>
         </div>


         <div>
           <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">Connect With Us</h4>
           {socialLinks.length > 0 ? (
             <div className="flex gap-4">
               {socialLinks.map((item) => (
                 <a
                   key={item.name}
                   href={item.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label={item.ariaLabel}
                   className={cn(
                     "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition",
                     focusRing
                   )}
                 >
                   {item.icon === "facebook" && <FaFacebookF />}
                   {item.icon === "instagram" && <FaInstagram />}
                   {item.icon === "youtube" && <FaYoutube />}
                   {item.icon === "linkedin" && <FaLinkedinIn />}
                 </a>
               ))}
             </div>
           ) : (
             <p className="text-sm text-slate-300">Official social links will be updated soon.</p>
           )}
         </div>
       </div>


       <div className="bg-black text-center text-xs text-slate-300 py-4">
         © 2026 Yaticorp India Pvt Ltd. All rights reserved.
       </div>
     </footer>
   </div>
 );
}



