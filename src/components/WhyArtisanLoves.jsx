import { motion } from 'framer-motion'
import { Gift, Clock, Headphones } from 'lucide-react'

const WhyArtisanLoves = () => {
  const reasons = [
    {
      icon: Gift,
      title: "Essai gratuit 2 semaines",
      description: "Il teste sans engagement, sans carte bancaire."
    },
    {
      icon: Clock,
      title: "Gain de temps immédiat",
      description: "Fini les heures perdues sur la paperasse."
    },
    {
      icon: Headphones,
      title: "Support réactif",
      description: "Une équipe disponible pour l'accompagner."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
            Pourquoi l'artisan va adorer
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {reason.title}
                </h3>
                <p className="text-text-muted">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyArtisanLoves
