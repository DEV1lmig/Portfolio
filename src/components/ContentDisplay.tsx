import { motion } from 'framer-motion'
import { InfoSection } from './InfoSection'
import { ProjectCards } from './ProjectCards'
import { ContactSection } from './ContactSection'
import { FAQSection } from './FAQSection'

export const ContentDisplay = ({ selectedOption }: { selectedOption: string }) => {
    let content

    if (selectedOption === 'PROYECTOS') {
      content = <ProjectCards />
    } else if (selectedOption === 'CONTACTO') {
      content = <ContactSection />
    } else if (selectedOption === 'INFO') {
      content = <InfoSection />
    } else if (selectedOption === 'FAQ') {
      content = <FAQSection />
    } else {
      content = <p></p>
    }

    return (
      <motion.div
        key={selectedOption}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="pt-20 text-4xl font-bold mb-8">{selectedOption}</h2>
        {content}
      </motion.div>
    )
}
