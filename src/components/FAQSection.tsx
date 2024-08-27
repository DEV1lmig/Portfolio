import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "¿Cuál es tu experiencia en desarrollo web?",
    answer: "Tengo más de 2 años de experiencia en desarrollo web, trabajando con tecnologías como React, Svelte, nextjs, y bases de datos SQL."
  },
  {
    question: "¿Cómo manejas los plazos y la comunicación durante un proyecto?",
    answer: "La comunicación es clave en mis proyectos. Utilizo herramientas de gestión de proyectos para mantener a los clientes actualizados sobre el progreso. Establezco hitos claros y me comunico regularmente a través de reuniones semanales y actualizaciones por correo electrónico."
  },
  {
    question: "¿Puedes trabajar en proyectos a largo plazo o prefieres contratos cortos?",
    answer: "Soy flexible y puedo adaptarme tanto a proyectos a largo plazo como a contratos cortos. Mi objetivo es proporcionar el mejor valor posible, independientemente de la duración del proyecto."
  },
]

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{item.question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-4 text-gray-300">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white p-10 rounded-lg shadow-lg w-auto mx-auto"
    >
      <h3 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h3>
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </motion.div>
  )
}
