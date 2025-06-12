import { motion } from "framer-motion";

export default function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
}
