import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const faqData = [
 {
   question: "Who can enroll in this AI Card program?",
   answer:
     "Students from any background, freshers, job seekers, and working professionals can enroll. No prior AI or coding knowledge is required.",
 },
 {
   question: "What is the language of the course?",
   answer:
     "The course is available in Kannada and English, making it easy for beginners to understand.",
 },
 {
   question: "Is the certificate verified?",
   answer:
     "Yes. On successful completion, you will receive a verified certificate from Yaticorp.",
 },
 {
   question: "How do I activate my AI Card?",
   answer:
     "You will receive an AI Card with a QR code. Simply scan the QR code and follow the activation steps.",
 },
 {
   question: "Is this a one-time payment?",
   answer: "Yes. ₹500 is a one-time payment. There are no hidden charges.",
 },
];


export default function FAQ() {
 const [openIndex, setOpenIndex] = useState(null);


 return (
   <div className="max-w-3xl mx-auto space-y-4">
     {faqData.map((item, index) => {
       const isOpen = openIndex === index;
       const panelId = `faq-panel-${index}`;


       return (
         <div
           key={item.question}
           className="rounded-2xl overflow-hidden border border-[#d7e4ff] bg-white shadow-[0_12px_28px_-20px_rgba(37,99,235,0.35)]"
         >
           <button
             type="button"
             className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left font-semibold text-slate-900 hover:bg-[#f6f9ff] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
             onClick={() => setOpenIndex(isOpen ? null : index)}
             aria-expanded={isOpen}
             aria-controls={panelId}
           >
             <span>{item.question}</span>
             <span className="text-2xl leading-none text-blue-600">
               {isOpen ? "−" : "+"}
             </span>
           </button>


           <AnimatePresence initial={false}>
             {isOpen && (
               <motion.div
                 id={panelId}
                 initial={{ height: 0, opacity: 0 }}
                 animate={{ height: "auto", opacity: 1 }}
                 exit={{ height: 0, opacity: 0 }}
                 transition={{ duration: 0.25, ease: "easeOut" }}
               >
                 <div className="px-6 pb-5 text-slate-700 leading-relaxed">
                   {item.answer}
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
         </div>
       );
     })}
   </div>
 );
}


