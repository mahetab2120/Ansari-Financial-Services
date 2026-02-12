import { motion } from 'framer-motion';

export default function About() {
  return (
    <section 
      id="about" 
      className="h-screen flex items-center justify-center bg-muted/40 dark:bg-muted/20 snap-start"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground dark:text-gray-300">
            Ansari Financial Services provides professional accounting, bookkeeping, financial advisory, loan advisory, and portfolio management services. We help individuals and businesses grow with confidence and compliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}