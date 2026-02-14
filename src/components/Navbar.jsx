import logo from "../assets/yaticorp-logo.png";


export default function Navbar() {
 return (
   <nav
     className="fixed top-0 left-0 right-0 z-50
                bg-[#0f172a]/90 backdrop-blur-md
                border-b border-white/10"
   >
     {/* subtle bottom divider */}
     <div
       className="absolute inset-x-0 bottom-0 h-px
                  bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"
     />


     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4
                     flex items-center justify-between">
       {/* Logo */}
       <img
         src={logo}
         alt="Yaticorp Logo"
         className="h-10 w-auto"
       />


       {/* Enroll CTA */}
       <a
         href="https://www.yaticorp.com/buy-ai-card"
         className="inline-flex items-center justify-center
                    bg-blue-600 hover:bg-blue-700
                    text-white px-6 py-2.5 rounded-xl font-semibold
                    shadow-[0_8px_20px_-8px_rgba(37,99,235,0.55)]
                    transition-all duration-300
                    hover:scale-105 active:scale-95"
       >
         Enroll Now @ ₹500
       </a>
     </div>
   </nav>
 );
}
