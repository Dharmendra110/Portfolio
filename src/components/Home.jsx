import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-16 px-5 sm:px-8"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-xs tracking-wider text-blue-400 font-medium">
              AVAILABLE FOR NEW PROJECTS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-gray-200"
          >
            Hi, I'm{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "200% 50%" }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="bg-gradient-to-r from-blue-500 via-white to-indigo-500
                         bg-[length:200%_200%] bg-clip-text text-transparent"
            >
              Dharmendra Mahilange
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold text-gray-300 mt-3"
          >
            Full Stack Developer <span className="text-blue-500">|</span>{" "}
            MERN Specialist
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-gray-400 mt-6 max-w-xl leading-relaxed text-lg"
          >
            I build scalable, high-performance web applications with clean
            frontend experiences and powerful backend architecture.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-blue-600/40 cursor-pointer"
            >
              View My Projects →
            </motion.a>

            <motion.a
              href="/Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-500 text-blue-400 px-6 py-3 rounded-xl font-medium hover:bg-blue-500 hover:text-white transition cursor-pointer"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px]
            bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-[2px]"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden bg-[#0F172A]">
              <img
                src="/myphoto.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}