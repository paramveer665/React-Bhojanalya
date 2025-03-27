import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to React Bhojanalya 🍛
      </motion.h1>
      {/* Image Section */}
      <motion.img
        src="https://i.imgur.com/KwkSpvy.png"
        alt="React Bhojanalya"
        className="w-64 h-64 object-contain rounded-lg shadow-lg hover:scale-105 transition duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      {/* Description */}
      <motion.p
        className="text-lg text-center text-gray-300 mt-6 px-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Indulge in the rich flavors of India at{" "}
        <span className="text-yellow-400 font-semibold">React Bhojanalya</span>.
        From sizzling tandoori delights to aromatic biryanis, we bring you the
        authentic taste of Indian cuisine. Every bite is a journey through
        India's diverse culinary heritage. 🇮🇳
      </motion.p>
      {/* Interactive Food List */}
      {/* Call to Action */}{" "}
    </div>
  );
};

export default AboutUs;
