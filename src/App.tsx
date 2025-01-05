import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CircleNav } from '@/components/CircleNav'
import { TypingTitle } from '@/components/TypingTitle'
import { ContentDisplay } from '@/components/ContentDisplay'

export default function App() {
  const [selectedOption, setSelectedOption] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = 'DEV1lmig'
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }
    const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          e.preventDefault()
        }
      }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }
    document.addEventListener('keydown', handleTabKey)

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
      document.removeEventListener('keydown', handleTabKey)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col pt-5 md:pt-10">
      <div className="flex-grow flex flex-col justify-center items-center">
        <motion.div
          ref={containerRef}
          className="container mx-auto bg-gray-900 rounded-3xl overflow-hidden relative mb-4 md:mb-8 px-4 md:px-8"
          style={{
            boxShadow: `0 0 40px 5px rgba(255, 255, 255, 0.1)`,
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)`,
            }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
          />
          <div className='flex flex-col md:flex-row justify-center items-center p-4 md:p-8 relative z-10'>
            <section className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="flex flex-col justify-between">
                <div className='pb-14'>
                  <h1 className="font-bold text-6xl">Miguel Quiroz</h1>
                  <TypingTitle/>
                </div>
                  <p>Mi nombre es Miguel Quiroz, desarrollador front-end venezolano apasionado por crear UIs intuitivas y minimalistas. Con experiencia en el diseño de interfaces completas, componentes web3, aplicaciones AI, y plataformas de comercio electrónico. Comprometido con el aprendizaje continuo y la exploración de nuevas tecnologías.</p>
              </div>
            </section>
            <section className="w-full md:w-1/2 flex flex-col items-center md:items-end">
              <CircleNav selectedOption={selectedOption} onSelect={setSelectedOption} />
            </section>
          </div>
        </motion.div>
      </div>
      <div className="w-full max-w-4xl mx-auto mb-8">
        <ContentDisplay selectedOption={selectedOption} />
      </div>
    </div>
  )
}
