import { motion } from 'framer-motion';
import PremiumMap from './PremiumMap';
import { FaEnvelope, FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';


export default function Contact() {
  return (
    <section 
      id="contact" 
      className=" flex items-center justify-center bg-muted/30 dark:bg-muted/10 snap-start"
    >
      <div className="max-w-6xl py-24 mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 md:p-16 text-center"
        >
          {/* ... your contact content, map will be centered ... */}
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Connect With Us
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            <div className="flex-1">
              <p className="text-lg mb-6 flex items-center justify-center gap-3">
                <FaEnvelope className="text-secondary text-2xl" />
                <a href="mailto:ansarifinancialservices@gmail.com" className="hover:text-secondary">ansarifinancialservices@gmail.com</a>
              </p>

              <div className="flex justify-center gap-8 mb-10">
                <a href="https://wa.me/919974336514" className="text-3xl hover:text-secondary"><FaWhatsapp /></a>
                <a href="#" className="text-3xl hover:text-secondary"><FaFacebook /></a>
                <a href="#" className="text-3xl hover:text-secondary"><FaLinkedin /></a>
              </div>
<PremiumMap />
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}