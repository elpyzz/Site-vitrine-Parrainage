import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'

const TrustBar = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: 127, suffix: '', label: "artisans utilisent déjà l'app", color: "text-primary" },
    { value: 38100, suffix: '€', label: "versés à nos apporteurs", color: "text-success" },
    { value: 72, suffix: 'h', label: "délai de versement", color: "text-accent" },
    { value: 2, suffix: ' sem.', label: "essai 100% gratuit", color: "text-primary" },
  ]

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-background-alt">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                {isInView ? (
                  <>
                    <CountUp
                      end={stat.value}
                      duration={2}
                      separator=" "
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                    {stat.suffix}
                  </>
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-text-muted text-sm sm:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBar
