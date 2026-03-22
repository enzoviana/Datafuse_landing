'use client'

import { motion } from 'framer-motion'

export default function Technologies() {
  const techStacks = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      icon: '⚛️',
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
      icon: '⚙️',
    },
    {
      category: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store'],
      icon: '📱',
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Vercel'],
      icon: '☁️',
    },
    {
      category: 'AI & Data',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Analytics', 'Big Data', 'ML Ops'],
      icon: '🤖',
    },
    {
      category: 'Security',
      technologies: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'GDPR', 'Encryption', 'Penetration Testing'],
      icon: '🔒',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies de <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Pointe</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stack technologique moderne pour des solutions performantes et évolutives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 transition-all hover:bg-white/10"
            >
              <div className="text-4xl mb-4">{stack.icon}</div>
              <h3 className="text-xl font-bold mb-4">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Clients et partenaires de confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['AWS', 'Google Cloud', 'Microsoft Azure', 'Vercel', 'GitHub', 'Stripe'].map((partner, i) => (
              <div key={i} className="text-2xl font-bold text-white/80">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
