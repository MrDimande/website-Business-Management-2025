import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const menuLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Grupo BMC', href: '#grupo' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const socialLinks = [
    { icon: Facebook, name: 'Facebook' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Linkedin, name: 'LinkedIn' },
    { icon: Twitter, name: 'Twitter' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSocialClick = (name) => {
    toast({
      title: '🚧 Em breve!',
      description: `A nossa página de ${name} estará disponível em breve!`,
      duration: 3000,
    })
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Wave Animation */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{
              d: 'M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
            }}
            animate={{
              d: [
                'M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
                'M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
                'M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            fill="rgba(59, 130, 246, 0.1)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              BMC Pro Services
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Consultoria multidisciplinar com impacto positivo e sustentável.
              Transformamos desafios em oportunidades de crescimento.
            </p>
            <p className="text-sm text-gray-500 italic">
              Excelência, inovação e compromisso com o seu sucesso.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contactos</h3>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400">
                <span className="text-blue-400">Email:</span>{' '}
                info@bmcproservices.com
              </p>
              <p className="text-gray-400">
                <span className="text-blue-400">Tel:</span> +351 XXX XXX XXX
              </p>
              <p className="text-gray-400">
                <span className="text-blue-400">Local:</span> Lisboa, Portugal
              </p>
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSocialClick(social.name)}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-gray-500">
            © {currentYear} BMC Pro Services – Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
