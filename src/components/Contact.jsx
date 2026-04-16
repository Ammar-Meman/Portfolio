import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// Animated dot grid shown below social icons
const AnimatedDotGrid = () => {
  const ROWS = 6;
  const COLS = 10;
  const dots = Array.from({ length: ROWS * COLS }, (_, i) => i);
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: '10px' }}
      className="w-full pt-4 opacity-40"
    >
      {dots.map((i) => (
        <motion.div
          key={i}
          className="w-1 h-1 rounded-full bg-zinc-400 mx-auto"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: (i % COLS) * 0.08 + Math.floor(i / COLS) * 0.12,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // Using Vite environment variables for security
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      })
      .finally(() => {
          setIsSending(false);
          // Hide status after 5 seconds
          setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-transparent border-t border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

        {/* Top: Header */}
        <div className="text-center mb-16 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Let's Build Something Together
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start bg-zinc-900/50 p-4 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-zinc-800 backdrop-blur-sm">

          {/* Left Column — Contact Info */}
          <div>
            <div className="rounded-2xl min-h-auto md:min-h-[420px]">
              <div className="space-y-6 sm:space-y-8 p-2 sm:p-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Get in Touch</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-sm text-sm sm:text-base">
                    Feel free to reach out for collaborations, project inquiries, or any open frontend developer roles.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: FaEnvelope, label: "Email", value: "ammar.meman.cg@gmail.com", href: "mailto:ammar.meman.cg@gmail.com" },
                    { icon: FaPhoneAlt, label: "Phone", value: "+91 8849839615", href: "tel:+918849839615" },
                    { icon: FaMapMarkerAlt, label: "Location", value: "Gujarat, India", href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-3 sm:gap-4 group">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-zinc-800 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors border border-zinc-700 shrink-0">
                        <Icon size={16} className="sm:text-lg" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm sm:text-base font-bold text-zinc-200 hover:text-blue-400 transition-colors block truncate">
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm sm:text-base font-bold text-zinc-200 block truncate">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social icons */}
                <div className="pt-4 border-t border-zinc-800 flex gap-3">
                  <a href="https://github.com/Ammar-Meman" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-800 text-zinc-400 rounded-full hover:bg-white hover:text-black transition-all border border-zinc-700">
                    <FaGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/ammarmeman/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-800 text-zinc-400 rounded-full hover:bg-blue-500 hover:text-white transition-all border border-zinc-700">
                    <FaLinkedin size={18} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-800 text-zinc-400 rounded-full hover:bg-blue-400 hover:text-white transition-all border border-zinc-700">
                    <FaTwitter size={18} />
                  </a>
                </div>

                {/* Animated dot grid */}
                <AnimatedDotGrid />

              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-7">Send me a message</h3>
            <form ref={form} className="space-y-5" onSubmit={sendEmail}>
              {[
                { label: "Your Name", name: "from_name", type: "text", placeholder: "Enter your full name" },
                { label: "Email Address", name: "from_email", type: "email", placeholder: "Enter your email address" },
                { label: "Subject", name: "subject", type: "text", placeholder: "What is this regarding?" },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="relative">
                  <label className="block text-sm font-bold text-zinc-400 mb-2">{label}</label>
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-zinc-600 text-sm"
                    required
                  />
                </div>
              ))}
              <div className="relative">
                <label className="block text-sm font-bold text-zinc-400 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-white placeholder-zinc-600 text-sm"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 font-bold text-base rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] ${
                  isSending 
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                {isSending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-zinc-500 border-t-zinc-200 rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane size={14} />
                  </>
                )}
              </button>

              {/* Status Message */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-400 text-sm font-bold flex items-center gap-2 justify-center mt-4"
                  >
                    <FaCheckCircle /> Message sent successfully!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm font-bold flex items-center gap-2 justify-center mt-4"
                  >
                    <FaExclamationCircle /> Failed to send. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
