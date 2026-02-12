import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl glass px-6 md:px-10 py-4 flex justify-between items-center z-50"
    >
      {/* <h1 className="text-lg md:text-xl font-semibold gold-text">
        Ansari Financial
      </h1> */}
      <div className="flex items-center gap-3">

  {/* Smaller A */}
  <span className="
    text-3xl md:text-4xl font-bold
    bg-gradient-to-br from-secondary to-accent
    bg-clip-text text-transparent
    drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]
    leading-none
  ">
    A
  </span>

  {/* Divider */}
  <div className="w-px h-8 bg-secondary/40" />

  {/* Text */}
  <div className="flex flex-col leading-tight">
    <span className="text-xs md:text-sm font-semibold tracking-wide text-gray-200">
      Financial
    </span>
    <span className="text-xs md:text-sm font-light tracking-wider text-gray-400">
      Services
    </span>
  </div>

</div>




      {/* Desktop */}
      <div className="hidden md:flex gap-10 text-sm uppercase tracking-wider text-gray-300">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile button */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full glass py-6 flex flex-col items-center gap-6 md:hidden">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </motion.nav>
  );
}
