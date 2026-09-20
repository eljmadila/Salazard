import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-12 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4 tracking-wider">SALAZARD</h2>
            <p className="text-sm text-gray-400 mb-6">
              Experience the finest culinary arts in an unforgettable ambiance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & News</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">Visit Us</h3>
            <ul className="space-y-3 text-sm">
              <li>123 Culinary Avenue</li>
              <li>Kinshasa, Congo 10001</li>
              <li className="pt-2 text-primary font-semibold">+243 000 888 111</li>
              <li>hello@salazard.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
              />
              <button 
                type="submit" 
                className="bg-primary text-black font-semibold rounded-md px-4 py-2 hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Salazard Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;