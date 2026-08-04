import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#141414] text-slate-400 font-sans pt-16 pb-12 px-6 md:px-12 lg:px-16 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Logo Column */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-black tracking-tight text-white flex items-center">
              Moveo<span className="text-blue-500">.</span>
            </h2>
          </div>

          {/* Navigation Links Column 1 */}
          <div className="flex flex-col gap-3 text-sm">
            <a href="#audio-subtitles" className="hover:text-white transition-colors">
              Audio and Subtitles
            </a>
            <a href="#media-center" className="hover:text-white transition-colors">
              Media Center
            </a>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy & Legal
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>

          {/* Navigation Links Column 2 */}
          <div className="flex flex-col gap-3 text-sm">
            <a href="#help-center" className="hover:text-white transition-colors">
              Help Center
            </a>
            <a href="#investor-relations" className="hover:text-white transition-colors">
              Investor Relations
            </a>
            <a href="#terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>

          {/* Navigation Links Column 3 */}
          <div className="flex flex-col gap-3 text-sm">
            <a href="#gift-cards" className="hover:text-white transition-colors">
              Gift Cards
            </a>
            <a href="#jobs" className="hover:text-white transition-colors">
              Careers & Jobs
            </a>
            <a href="#cookie-preferences" className="hover:text-white transition-colors">
              Cookie Preferences
            </a>
          </div>

          {/* Navigation Links Column 4 */}
          <div className="flex flex-col gap-3 text-sm">
            <a href="#service-code" className="hover:text-white transition-colors">
              Travel Guides
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Corporate Information
            </a>
            <a href="#destinations" className="hover:text-white transition-colors">
              Explore Destinations
            </a>
          </div>

        </div>

        {/* Action Button & Social Media Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          {/* Helmet / Service Code Button */}
          <button
            type="button"
            className="border border-slate-600 hover:border-slate-300 text-slate-300 hover:text-white px-3 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer bg-transparent"
          >
            Service Code
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-xl text-slate-300">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="hover:text-white transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="#twitter"
              aria-label="X (Twitter)"
              className="hover:text-white transition-colors duration-200 text-lg"
            >
              <FaXTwitter />
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="hover:text-white transition-colors duration-200 text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-xs text-slate-500 font-mono">
          © 1997-{currentYear} Moveo, Inc. {'{i-062d573a0ee099242}'}
        </div>

      </div>
    </footer>
  );
}