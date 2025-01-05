import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const options = ['FAQ', 'INFO', 'CONTACTO', 'PROYECTOS']

export const CircleNav = ({ selectedOption, onSelect }: { selectedOption: string, onSelect: (option: string) => void }) => {
  const [rotation, setRotation] = useState(0)
  const circleRef = useRef<HTMLDivElement>(null)
  const touchStartRef = useRef<number>(0)

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault()
    const sensitivity = 0.5
    const newRotation = rotation + e.deltaY * sensitivity
    const snappedRotation = Math.round(newRotation / 90) * 90
    setRotation(snappedRotation % 360)
  }, [rotation])

  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY
  }

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault()
    const touchDelta = touchStartRef.current - e.touches[0].clientY
    const sensitivity = 1
    const newRotation = rotation + touchDelta * sensitivity
    const snappedRotation = Math.round(newRotation / 90) * 90
    setRotation(snappedRotation % 360)
    touchStartRef.current = e.touches[0].clientY
  }, [rotation])

  useEffect(() => {
    const circle = circleRef.current
    if (circle) {
      circle.addEventListener('wheel', handleWheel, { passive: false })
      circle.addEventListener('touchstart', handleTouchStart, { passive: true })
      circle.addEventListener('touchmove', handleTouchMove, { passive: false })
    }
    return () => {
      if (circle) {
        circle.removeEventListener('wheel', handleWheel)
        circle.removeEventListener('touchstart', handleTouchStart)
        circle.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [rotation, handleWheel, handleTouchMove])

  return (
    <motion.div
      ref={circleRef}
      className="relative md:left-72 w-72 md:w-96 h-72 md:h-96 cursor-pointer touch-none"
      style={{ rotate: rotation }}
      animate={{ rotate: rotation }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }} // Smooth spring effect
    >
      {options.map((option, index) => {
        const angle = index * 90
        const isSelected = option === selectedOption

        // Calculate the rotation of the button based on its angle around the circle
        const buttonRotation = angle - rotation

        // Ensure the text remains upright by calculating the necessary counter-rotation
        let textRotation = -angle
        if (buttonRotation % 360 === 90 || buttonRotation % 360 === -270) {
          textRotation += 90
        } else if (buttonRotation % 360 === -90 || buttonRotation % 360 === 270) {
          textRotation -= 90
        } else if (buttonRotation % 360 === 180 || buttonRotation % 360 === -180) {
          textRotation += 180
        }

        return (
          <motion.button
            key={option}
            className={`border-solid absolute w-full z-10 text-lg font-bold ${isSelected ? 'text-xl' : ''}`}
            style={{
              top: angle === 0 ? '0%' : angle === 180 ? '100%' : '50%',
              left: angle === 90 ? '100%' : angle === 270 ? '0%' : '50%',
              transform: `translate(-50%, -50%)`,
            }}
            onClick={() => onSelect(option)}
            animate={{ fontSize: isSelected ? '1.35rem' : '1.25rem' }} // Smooth font size transition
            transition={{ duration: 0.3 }} // Duration for text size transition
          >
            <span className='w-full'
              style={{
                display: 'inline-block',
                transform: `rotate(${textRotation}deg)`,
              }}
            >
              {option}
            </span>
          </motion.button>
        )
      })}
      <svg className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-500" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="50"
          fill="none"
          stroke="white"
          strokeWidth="1.4"
          strokeDasharray="40 40"
          strokeDashoffset="63"
        />
      </svg>
    </motion.div>
  )
}
