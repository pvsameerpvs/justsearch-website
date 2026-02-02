"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
        isScrolled || !isHome
          ? "glass shadow-2xl py-4"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden rounded-lg">
             <Image 
               src="/logo-js.png" 
               alt="JustSearch Logo" 
               width={160} 
               height={45} 
               className={cn(
                 "h-10 w-auto object-contain transition-all duration-500 group-hover:scale-105"
               )}
               priority
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-orange relative group",
                pathname === link.href 
                  ? "text-brand-orange" 
                  : "text-brand-charcoal dark:text-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full",
                pathname === link.href ? "w-full" : ""
              )} />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Button variant="outline" className={cn(
            "border-brand-orange/50 text-brand-orange hover:bg-brand-orange hover:text-white rounded-xl px-6 font-bold transition-all duration-300",
            (!isScrolled && isHome) ? "dark:text-white" : ""
          )}>
            <Phone className="w-4 h-4 mr-2" />
            +971 55 615 2440
          </Button>
          <Button className="bg-gradient-brand hover:opacity-90 shadow-lg shadow-brand-orange/20 rounded-xl px-8 font-black text-xs uppercase tracking-widest group">
            Consult <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-3 rounded-xl transition-colors",
            "text-brand-charcoal dark:text-white bg-gray-100 dark:bg-white/5"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass border-b p-8 shadow-2xl overflow-hidden mt-4 mx-6 rounded-3xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-2xl font-black tracking-tighter transition-colors",
                    pathname === link.href ? "text-brand-orange" : "text-brand-charcoal dark:text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-100 dark:border-white/10 flex flex-col gap-4">
                <Button variant="outline" className="w-full py-7 border-brand-orange text-brand-orange rounded-2xl font-bold">
                  <Phone className="w-5 h-5 mr-3" />
                  Request Callback
                </Button>
                <Button className="w-full py-7 bg-gradient-brand rounded-2xl font-black text-xs uppercase tracking-[0.2em]">
                  Start Your Growth
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
