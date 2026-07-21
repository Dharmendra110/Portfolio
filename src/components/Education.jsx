import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-20 px-5 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-white mb-3">Education</h2>
          <p className="text-gray-400">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        {/* Card 1 */}
        <EducationCard
          title="Bachelor of Technology"
          stream="Computer Science and Engineering"
          college="Chouksey Engineering College, Bilaspur"
          year="2021 – 2025"
          location="Bilaspur, Chhattisgarh"
          gpa="7.5 / 10"
          desc="Comprehensive engineering program with focus on electronics,
          communication systems, and software development fundamentals."
        />

        {/* Card 2 */}
        <EducationCard
          title="Intermediate (12th)"
          stream="Science"
          college="S L S Academy Higher Secondary School, Mungeli"
          year="2019 – 2021"
          location="Mungeli, Chhattisgarh"
          percentage="91%"
          desc="Higher secondary education with focus on science subjects,
          building foundation for engineering studies."
        />
      </div>
    </section>
  );
}

function EducationCard({ title, stream, college, year, location, gpa, percentage, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#111C2E] border border-white/5 rounded-xl p-6 mb-8 shadow-lg hover:shadow-blue-500/10 transition"
    >
      <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
        <GraduationCap size={16} />
        EDUCATION
      </div>

      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-blue-400 font-medium mb-1">{stream}</p>
      <p className="text-gray-300 mb-3">{college}</p>

      <div className="flex flex-wrap gap-5 text-gray-400 text-sm mb-4">
        <span className="flex items-center gap-1">
          <Calendar size={16} /> {year}
        </span>

        <span className="flex items-center gap-1">
          <MapPin size={16} /> {location}
        </span>

        {gpa && (
          <span className="flex items-center gap-1">
            <Award size={16} /> GPA: {gpa}
          </span>
        )}
         {percentage && (
          <span className="flex items-center gap-1">
            <Award size={16} /> Percentage: {percentage}
          </span>
        )}
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
