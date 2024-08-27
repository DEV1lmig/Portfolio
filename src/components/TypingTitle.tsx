import { useState, useEffect } from 'react'

const words = ['Welcome', 'Bienvenido',]

export const TypingTitle = () => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, Math.max(reverse ? 75 : (subIndex === words[index].length ? 1000 : 150), Math.floor(Math.random() * 350)));


    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  return (
    <h2 className="min-h-10 text-4xl font-bold">
      {`${words[index].substring(0, subIndex)}${subIndex === words[index].length ? '|' : ''}`}
    </h2>
  )
}
