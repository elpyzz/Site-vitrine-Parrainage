import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const HowToTalk = () => {
  const [copied, setCopied] = useState(false)

  const message = `Salut [Prénom], je voulais te parler d'un logiciel pour les artisans du bâtiment. Ça permet de gérer tes devis, factures et planning facilement. Tu peux tester gratuitement pendant 2 semaines. Je t'envoie le lien si tu veux jeter un œil ?`

  const handleCopy = () => {
    navigator.clipboard.writeText(message)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Comment en parler ?
          </h2>
          <p className="text-lg text-text-muted">
            Pas besoin d'être commercial. Voici comment présenter simplement le logiciel.
          </p>
        </motion.div>

        {/* Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background-alt border-2 border-primary/20 rounded-2xl p-8 lg:p-10 relative"
        >
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-primary/20">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          {/* Message Text */}
          <p className="text-lg text-text-dark leading-relaxed italic mb-6 pl-8">
            "{message}"
          </p>

          {/* Copy Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors"
          >
            {copied ? (
              <>
                <Check size={20} />
                Message copié !
              </>
            ) : (
              <>
                <Copy size={20} />
                Copier le message
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToTalk
