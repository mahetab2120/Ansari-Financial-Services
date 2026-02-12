


import { motion } from 'framer-motion';
import { FaCalculator, FaBook, FaChartLine, FaMoneyCheckAlt, FaBriefcase } from 'react-icons/fa';

const services = [
  { icon: <FaCalculator />, title: 'Accounting Services', desc: 'Financial statements, taxation, compliance & reporting.' },
  { icon: <FaBook />, title: 'Bookkeeping', desc: 'Daily transactions, payroll, bank reconciliation.' },
  { icon: <FaChartLine />, title: 'Financial Advisory', desc: 'Business planning, cash flow & investment guidance.' },
  { icon: <FaMoneyCheckAlt />, title: 'Loan Advisory', desc: 'Personal, business & home loan assistance.' },
  { icon: <FaBriefcase />, title: 'Portfolio Management', desc: 'Investment planning, asset allocation & monitoring.' },
];

export default function Services() {
  return (
    <section id="services" className="px-6">
  <div className="max-w-6xl mx-auto py-24">

    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gold-text">
      Our Services
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass p-12 text-center"
            >
              <div className="text-5xl text-secondary mb-6">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-4 gold-text">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

