import { motion } from 'framer-motion'
import { useState } from 'react'

const Simulation = () => {
  const [artisans, setArtisans] = useState(1)

  const calculateGain = (num) => num * 300

  const examples = [
    { count: 1, gain: 300 },
    { count: 3, gain: 900 },
    { count: 5, gain: 1500 },
    { count: 10, gain: 3000 }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Calculez vos gains
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Plus vous parrainez, plus vous gagnez. C'est simple.
          </p>
        </motion.div>

        {/* Interactive Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <label className="block text-center text-lg font-semibold text-text-dark mb-6">
              Nombre d'artisans parrainés : <span className="text-primary text-2xl">{artisans}</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={artisans}
              onChange={(e) => setArtisans(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary mb-6"
            />
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-success mb-2">
                {calculateGain(artisans)}€
              </div>
              <p className="text-text-muted">Gain total</p>
            </div>
          </div>
        </motion.div>

        {/* Examples Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {example.count} artisan{example.count > 1 ? 's' : ''}
              </div>
              <div className="text-4xl font-bold text-success">
                {example.gain}€
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Simulation
