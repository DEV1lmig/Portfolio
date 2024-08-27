import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Belkys Manga TC LP', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Module2-gdAcRTOgb3shmsAa9d4i7e9gekPnMb.png' },
  { id: 2, title: 'Mundo Peludo', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Module2-gdAcRTOgb3shmsAa9d4i7e9gekPnMb.png' },
]

export const ProjectCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="bg-gray-800 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
