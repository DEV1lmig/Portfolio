import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react'

export const InfoSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white p-10 rounded-lg shadow-lg w-auto mx-auto"
    >
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <Briefcase className="mr-2" size={20} />
          Experiencia laboral
        </h3>
        <ul className="space-y-4">
          <li>
            <h4 className="font-medium">Frontend Dev</h4>
            <p className="text-gray-400">2023 - 2024</p>
            <p className="text-gray-300">Frontend dev en una start up web3 desarrollando el dashboard (unreleased product)</p>
          </li>
          <li>
            <h4 className="font-medium">Diseñador de UI-UX </h4>
            <p className="text-gray-400">2020 - Presennte</p>
            <p className="text-gray-300">Diseñador en diferentes proyectos como freelancer, desde apps hasta webs</p>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <GraduationCap className="mr-2" size={20} />
          Educación
        </h3>
        <ul className="space-y-4">
          <li>
            <h4 className="font-medium">Estudiante en ingenieria informatica</h4>
            <p className="text-gray-400">Rafael Belloso Chacin, 2020 - Presente</p>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <Code className="mr-2" size={20} />
          Habilidades
        </h3>
        <ul className="flex flex-wrap gap-2">
          {['React', 'Node.js', 'TypeScript', 'SQL', 'PocketBase', 'Supabase', 'Svelte'].map((skill) => (
            <li key={skill} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  )
}
