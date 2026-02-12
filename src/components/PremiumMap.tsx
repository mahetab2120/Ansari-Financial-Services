import { motion } from "framer-motion";

const center = { lat: 22.5695464, lng: 72.9615987 };

export default function PremiumMap() {
  return (
    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">

      <iframe
        src={`https://www.google.com/maps?q=${center.lat},${center.lng}&z=14&output=embed`}
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: "grayscale(100%) invert(92%) contrast(90%)",
        }}
        loading="lazy"
      />

      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0.3, 0.7] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-8 h-8 bg-secondary rounded-full blur-xl opacity-70" />
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass p-8 w-[90%] md:w-[450px] text-center">
  <h3 className="text-lg font-semibold mb-3 gold-text">
    Private Office Location
  </h3>

  <a
    href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
    target="_blank"
    className="luxury-btn inline-flex items-center gap-2"
  >
    Get Directions
  </a>
</div>

    </div>
  );
}
