import { motion } from 'framer-motion'
import Cover from '@/assets/Cover.png'
import Thumbnail from '@/assets/Thumbnail.jpg'

const projects = [
  { id: 1, title: 'Belkys Manga TC LP', image: `${Thumbnail}`, url: 'https://www.figma.com/proto/bTi2nZ1hbUBlr3ewPDtBpH/peluqueria?node-id=0-1&t=xm5LFdHB6M2HMqxW-1' },
  { id: 2, title: 'Mundo Peludo', image: `${Cover}`, url: 'https://www.figma.com/proto/W5cYFGZfwHrxaOXyw070N2/Mundo-Peludo?node-id=0-1&t=cVx8cLZwPyn95TxW-1' },
]

export const ProjectCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project) => (
        <motion.a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
