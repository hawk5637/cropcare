import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sprout, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  HelpCircle,
  FileText
} from 'lucide-react';

export default function Footer() {
  const { 
    setActiveNav, 
    setActiveModule, 
    setIsIntroModalOpen, 
    language,
    t 
  } = useApp();

  const [phone, setPhone] = useState('');
  const [formStatus, setFormStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'charter' | null

  const handleSubscribe = (e) => {
    e.preventDefault();
    setFormStatus({ type: '', text: '' });

    // Validate phone number (must be at least 10 digits)
    const cleaned = phone.replace(/[^0-9+]/g, '');
    if (!cleaned || cleaned.replace(/\D/g, '').length < 10) {
      setFormStatus({
        type: 'error',
        text: 'Please enter a valid 10-digit mobile number for WhatsApp alerts.'
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        text: 'Subscribed successfully! You will receive daily 08:30 AM Mandi rates on WhatsApp.'
      });
      setPhone('');
    }, 600);
  };

  const navigateTo = (nav, moduleName = null) => {
    if (moduleName) {
      setActiveModule(moduleName);
      setActiveNav('module');
    } else {
      setActiveNav(nav);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Direct Contacts */}
          <div className="space-y-4">
            <div 
              onClick={() => navigateTo('dashboard')}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">CropCare</span>
                <p className="text-[11px] font-medium text-emerald-400">Better Farms, Brighter Futures</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Full-stack smart agriculture platform connecting farmers, verified buyers, certified inputs, and live Agmarknet mandi auction prices with T+0 escrow security.
            </p>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>WDRA &amp; e-NAM Compliant</span>
              </span>
            </div>

            {/* Helpline & Email Links (Items 9 & 10) */}
            <div className="pt-2 space-y-2 border-t border-slate-800/80 text-xs">
              <a 
                href="tel:+9118002767227" 
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 font-medium py-1 transition-colors min-h-[44px]"
                aria-label="Call Kisan Toll-Free Helpline: 1800-276-7227"
              >
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>1800-276-7227 (Toll-Free Kisan Line)</span>
              </a>
              <a 
                href="mailto:support@cropcare.ag" 
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 font-medium py-1 transition-colors min-h-[44px]"
                aria-label="Email CropCare Support at support@cropcare.ag"
              >
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>support@cropcare.ag</span>
              </a>
            </div>
          </div>

          {/* Column 2: Platform Modules & Views (Item 6) */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Ecosystem Hub
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('dashboard')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  Farmer Cockpit Dashboard
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('scanner')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  AI Plant Pathology Vision
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('weather')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  14-Day Microclimate Forecast
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('catalog')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  Certified Input Marketplace
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('modules')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  18 Agritech Pillar Modules
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsIntroModalOpen(true)}
                  className="text-left text-emerald-400 hover:text-emerald-300 py-1 font-semibold transition-colors w-full cursor-pointer flex items-center gap-1.5"
                >
                  <span>✨ 6-Step Guided Platform Tour</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Advisory, Storage & Legal */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services &amp; Compliance
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('module', 'expert-support')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  Consult Certified Agronomist
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('module', 'ai-assistant')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  CropCare AI Farm Advisor
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('module', 'storage')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  Warehouse &amp; Silo Booking
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('module', 'payment')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  T+0 Escrow &amp; Bank Settlement
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('privacy')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  Privacy &amp; Data Sovereignty
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('charter')}
                  className="text-left text-slate-400 hover:text-emerald-400 py-1 transition-colors w-full cursor-pointer"
                >
                  Kisan Charter &amp; User Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Mandi Alerts Form (Items 11, 12, 13) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Daily Mandi Broadcast
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive opening auction rates for your district's Mandis every morning at 08:30 AM via WhatsApp or SMS.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
              <div className="relative">
                <input 
                  type="tel"
                  id="footerMandiPhone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter 10-digit Mobile Number"
                  aria-label="Mobile Number for WhatsApp Mandi rates"
                  aria-describedby="footerFormFeedback"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent min-h-[44px]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-950/40 min-h-[44px] cursor-pointer disabled:opacity-60"
              >
                <span>{isSubmitting ? 'Subscribing...' : 'Subscribe Free Alerts'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              {/* Form Status Banner with aria-live="polite" (Item 13) */}
              <div 
                id="footerFormFeedback" 
                aria-live="polite" 
                className="min-h-[20px]"
              >
                {formStatus.type === 'error' && (
                  <div className="flex items-start gap-1.5 p-2 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs mt-1">
                    <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{formStatus.text}</span>
                  </div>
                )}
                {formStatus.type === 'success' && (
                  <div className="flex items-start gap-1.5 p-2 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{formStatus.text}</span>
                  </div>
                )}
              </div>
            </form>
          </div>

        </div>

        {/* Footer Bottom Bar (Item 17: Dynamic Year) */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} CropCare Agritech Systems. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://github.com/hawk5637/cropcare" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="CropCare GitHub Repository (opens in new tab)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span>e-NAM &bull; ICAR &bull; WDRA &bull; ISO 27001</span>
          </div>
        </div>
      </div>

      {/* Modal for Privacy Policy / Kisan Charter */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legalModalTitle"
        >
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 id="legalModalTitle" className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>{activeModal === 'privacy' ? 'CropCare Privacy Policy & Data Sovereignty' : 'Kisan Charter & Terms of Service'}</span>
              </h2>
              <button 
                type="button" 
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="text-xs space-y-3 leading-relaxed text-slate-300 max-h-72 overflow-y-auto pr-1">
              {activeModal === 'privacy' ? (
                <>
                  <p><strong>1. Farmer Data Ownership:</strong> All land parcel coordinates, soil health card results, crop imagery, and yield forecasts belong solely to the registered farmer. CropCare does not sell or share farmer data with third-party advertisers.</p>
                  <p><strong>2. Agronomic AI Usage:</strong> Leaf diagnostic images submitted for scanning are analyzed using encrypted, privacy-preserving machine learning models solely to detect crop diseases and recommend organic or chemical remedies.</p>
                  <p><strong>3. Encryption:</strong> All communications, payment escrow instructions, and direct buyer bids are encrypted end-to-end with TLS 1.3 and stored in compliance with Indian IT Act provisions.</p>
                </>
              ) : (
                <>
                  <p><strong>1. Fair Price Guarantee:</strong> Bids placed on the CropCare platform adhere strictly to WDRA and e-NAM benchmark floors. Buyers cannot artificially depress auction prices below verified Mandi MSP floors.</p>
                  <p><strong>2. T+0 Escrow Settlement:</strong> When a produce lot is digitally checked into an affiliated warehouse or buyer receiving station, payments are released into the farmer's registered UPI/NEFT bank account on the same business day.</p>
                  <p><strong>3. Dispute Resolution:</strong> If quality or moisture disputes arise during delivery, an empanelled ICAR-certified quality inspector provides binding arbitration within 4 hours.</p>
                </>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl min-h-[44px]"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
