import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      initial: "K",
      name: "Karim",
      location: "Lyon",
      date: "Février 2026",
      text: "J'ai parlé de l'appli à mon cousin électricien. Il a testé pendant 2 semaines, ça lui a plu, il a continué. J'ai reçu mon virement 3 jours après.",
      gain: 300
    },
    {
      initial: "S",
      name: "Sarah",
      location: "Bordeaux",
      date: "Janvier 2026",
      text: "Au début j'étais pas sûre que ça marcherait. J'ai quand même donné le contact d'un peintre que je connaissais. Finalement il s'est inscrit et j'ai bien eu mes 300€.",
      gain: 300
    },
    {
      initial: "M",
      name: "Maxime",
      location: "Marseille",
      date: "Février 2026",
      text: "Mon voisin est plombier. Il cherchait de nouveaux clients, je lui ai passé le contact. L'essai l'a convaincu. Simple et efficace.",
      gain: 300
    }
  ]

  const containerVariants = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark">
            Ils ont participé.
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-bold text-text-dark">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">
                    {testimonial.location} · {testimonial.date}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-text-muted mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Gain Badge */}
              <div className="flex items-center gap-2 text-success font-semibold">
                <CheckCircle size={20} />
                <span>+{testimonial.gain}€</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
