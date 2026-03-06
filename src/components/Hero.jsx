import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-background-alt min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 mb-6"
            >
              <span className="text-sm font-semibold text-primary">
                Programme Apporteur d'Affaires
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
              Présentez-nous un artisan.
              <br />
              <span className="text-primary">Gagnez{' '}
                <span className="text-accent text-5xl sm:text-6xl lg:text-7xl">300€</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0">
              Vous connaissez un artisan du bâtiment ? Mettez-nous en contact.
              <br />
              S'il s'inscrit après son{' '}
              <span className="font-semibold text-primary">essai gratuit de 2 semaines</span>,
              vous recevez <span className="font-bold text-accent text-xl">300€</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary-light transition-colors shadow-xl"
              >
                Participer maintenant
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
              >
                <PlayCircle size={20} />
                Comment ça marche ?
              </motion.button>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-8xl lg:text-9xl font-bold text-primary/20 mb-4"
                >
                  300€
                </motion.div>
                <p className="text-text-muted text-lg font-medium">
                  Par artisan inscrit
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
