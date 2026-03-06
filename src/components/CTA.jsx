import { motion } from 'framer-motion'
import { Instagram, Send } from 'lucide-react'

const CTA = () => {
  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Vous avez un artisan en tête ?
          </h2>
          <p className="text-xl sm:text-2xl mb-12 text-white/90">
            Envoyez-moi son contact, je m'occupe du reste.
          </p>

          {/* Instagram Button */}
          <motion.a
            href="https://www.instagram.com/louispereira.exee/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all group"
          >
            <Instagram size={28} className="text-primary" />
            <span>@louispereira.exee</span>
            <Send size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="mt-6 text-white/70 text-sm">
            Réponse sous 24h
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
