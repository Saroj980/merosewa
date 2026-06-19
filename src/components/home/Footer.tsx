import { Phone, Mail, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const SocialIcon = ({ path }: { path: string }) => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  return (
    <footer className="bg-white pt-10 md:pt-20 pb-0 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <Image 
              src="/mero-sewa-logo.png" 
              alt="Mero Sewa Logo" 
              width={180} 
              height={56} 
              className="h-12 w-auto object-contain"
            />
            <p className="text-slate-600 font-medium text-sm leading-relaxed max-w-sm">
              Your trusted home service platform in Sudurpashchim. Quality service at your doorstep.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-colors cursor-pointer">
                <SocialIcon path="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </div>
              {/* Instagram */}
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-colors cursor-pointer">
                <SocialIcon path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </div>
              {/* Twitter/X */}
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-colors cursor-pointer">
                <SocialIcon path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </div>
              {/* Youtube */}
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-colors cursor-pointer">
                <SocialIcon path="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-base">Services</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Electrician</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Plumbing</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">AC Repair</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">CCTV</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Cleaning</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">All Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-base">Company</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-[var(--primary-blue)]">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Blog</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Press & Media</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-base">For Providers</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Become a Provider</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Provider Login</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Provider Guidelines</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-base">Support & Contact</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600 mb-6">
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">FAQ</a></li>
            </ul>
            <div className="space-y-3 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> 01-5970234</div>
              <div className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.74.45 3.38 1.25 4.82L2 22l5.35-1.21A9.953 9.953 0 0012.01 22c5.53 0 10.01-4.48 10.01-10s-4.48-10-10.01-10zm0 18.25c-1.46 0-2.88-.38-4.13-1.08l-2.95.67.68-2.88c-.8-1.29-1.22-2.79-1.22-4.34 0-4.63 3.77-8.41 8.41-8.41s8.41 3.78 8.41 8.41-3.77 8.41-8.41 8.41zm4.41-6.13c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3s-.84.82-.84 2.01.86 2.33.98 2.49c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-.104.14-.114-.06-.02-.22-.04-.46-.16z"/></svg> 9800000000</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@merosewa.com</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Dhangadhi, Kailali, Nepal</div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar matching design */}
      <div className="bg-[#0b1b36] py-4 text-center md:flex md:justify-between px-4 md:px-12 items-center text-xs font-medium text-slate-300">
        <p>&copy; {new Date().getFullYear()} Mero Sewa. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Powered by Dig Nepal Technologies Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
