import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 block">
              <Image 
                src="/logo-js.png" 
                alt="JustSearch Logo" 
                width={150} 
                height={40} 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              UAE&apos;s leading digital directory and lead-generation partner. Empowering businesses with innovative marketing solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-orange">Core Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#services" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">SEO & AEO</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Lead Generation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-orange">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition-colors">Our Solutions</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Expert</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-orange">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
           <div>© {new Date().getFullYear()} JustSearch UAE. All Rights Reserved.</div>
           <div className="flex gap-8">
              <span>www.justsearch.ae</span>
              <span>Dubai, UAE</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
