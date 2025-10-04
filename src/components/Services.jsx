import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  ShoppingCart,
  Settings,
  Map,
  Leaf,
  Search,
  Megaphone,
  BookOpen,
  Users,
  FileText,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: Briefcase,
      title: 'Consultoria Empresarial e Estratégica',
      description:
        'Definição de visão, planeamento estratégico e otimização de modelos de negócio para crescimento sustentável.',
      color: 'from-blue-500 to-blue-600',
      details: {
        description:
          'Apoiamos a sua organização a navegar em mercados complexos, a definir metas ambiciosas e a construir um roteiro claro para o sucesso. O nosso serviço de consultoria estratégica é desenhado para transformar a sua visão em realidade, através de uma análise profunda e planos de ação eficazes.',
        points: [
          'Análise de Mercado e Competitiva',
          'Desenvolvimento de Plano de Negócios',
          'Planeamento Estratégico e Financeiro',
          'Reestruturação Organizacional',
          'Gestão de Mudança e Inovação',
        ],
      },
    },
    {
      icon: Users,
      title: 'Capital Humano e Desenvolvimento Organizacional',
      description:
        'Estruturação de equipas, gestão de talentos e cultura organizacional para ambientes de alta performance.',
      color: 'from-yellow-500 to-yellow-600',
      details: {
        description:
          'O sucesso de uma empresa reside nas suas pessoas. Ajudamos a criar uma cultura forte, a atrair e reter talentos, e a desenvolver líderes que inspiram. Potenciamos o seu capital humano para criar equipas motivadas e alinhadas com os objetivos estratégicos.',
        points: [
          'Diagnóstico e Cultura Organizacional',
          'Recrutamento e Seleção Especializado',
          'Avaliação de Desempenho e Competências',
          'Planos de Carreira e Sucessão',
          'Programas de Liderança',
        ],
      },
    },
    {
      icon: Lightbulb,
      title: 'Inovação Digital e Smart Solutions',
      description:
        'Implementação de tecnologias, transformação digital e soluções inteligentes para otimizar operações e serviços.',
      color: 'from-indigo-500 to-purple-500',
      details: {
        description:
          'Guiamos a sua empresa na jornada da transformação digital, desde a automatização de processos à implementação de soluções de inteligência artificial. O nosso objetivo é aumentar a eficiência, melhorar a experiência do cliente e prepará-lo para o futuro digital.',
        points: [
          'Diagnóstico de Maturidade Digital',
          'Automatização de Processos (RPA)',
          'Implementação de Sistemas (CRM, ERP)',
          'Estratégias de Data Analytics & BI',
          'Soluções de Smart Cities e IoT',
        ],
      },
    },
    {
      icon: ShoppingCart,
      title: 'Procurement e Gestão de Aquisições',
      description:
        'Otimização de processos de compras, negociação com fornecedores e gestão da cadeia de suprimentos.',
      color: 'from-pink-500 to-red-500',
      details: {
        description:
          'A gestão eficiente de aquisições é crucial para a saúde financeira da sua empresa. Otimizamos todo o ciclo de procurement, desde a qualificação de fornecedores à negociação de contratos, garantindo o melhor custo-benefício e minimizando riscos.',
        points: [
          'Auditoria e Otimização de Compras',
          'Gestão Estratégica de Fornecedores',
          'Implementação de Plataformas de e-Procurement',
          'Negociação e Gestão de Contratos',
          'Análise de Spend e Savings',
        ],
      },
    },
    {
      icon: Megaphone,
      title: 'Comunicação & Branding',
      description:
        'Construção de marcas fortes, estratégias de comunicação integrada e gestão de reputação no mercado.',
      color: 'from-orange-500 to-amber-500',
      details: {
        description:
          'Uma marca forte é um ativo inestimável. Ajudamos a construir e a posicionar a sua marca no mercado, desenvolvendo uma narrativa poderosa e estratégias de comunicação que criam conexões duradouras com o seu público-alvo.',
        points: [
          'Estratégia e Posicionamento de Marca',
          'Criação de Identidade Visual Corporativa',
          'Marketing de Conteúdo e Storytelling',
          'Gestão de Redes Sociais e Comunidades',
          'Relações Públicas e Assessoria de Imprensa',
        ],
      },
    },
    {
      icon: Leaf,
      title: 'Consultoria Ambiental e Sustentabilidade',
      description:
        'Implementação de práticas ESG, licenciamento ambiental e estratégias para um futuro mais sustentável.',
      color: 'from-green-500 to-green-600',
      details: {
        description:
          'A sustentabilidade já não é uma opção, é uma necessidade. Apoiamos a sua empresa a integrar práticas ambientais, sociais e de governança (ESG) na sua estratégia de negócio, garantindo conformidade, reduzindo riscos e criando valor a longo prazo.',
        points: [
          'Relatórios de Sustentabilidade (ESG)',
          'Estudos de Impacto Ambiental (EIA)',
          'Licenciamento Ambiental',
          'Estratégias de Economia Circular',
          'Planos de Gestão de Resíduos',
        ],
      },
    },
    {
      icon: Map,
      title: 'Planeamento e Ordenamento Territorial',
      description:
        'Estudos de viabilidade, planeamento urbano e regional, e desenvolvimento de projetos territoriais estratégicos.',
      color: 'from-teal-500 to-cyan-500',
      details: {
        description:
          'Atuamos na interface entre o setor público e privado para desenvolver territórios mais inteligentes, sustentáveis e resilientes. Desde estudos urbanísticos a planos de desenvolvimento regional, a nossa equipa multidisciplinar oferece soluções integradas.',
        points: [
          'Planos Diretores Municipais (PDM)',
          'Estudos de Viabilidade Urbanística',
          'Projetos de Loteamento e Infraestruturas',
          'Desenvolvimento de Projetos Turísticos',
          'Requalificação Urbana e Ambiental',
        ],
      },
    },
    {
      icon: BookOpen,
      title: 'Formação e Desenvolvimento Profissional',
      description:
        'Programas de capacitação, workshops e formações à medida para desenvolver competências chave.',
      color: 'from-sky-500 to-blue-500',
      details: {
        description:
          'Investir no desenvolvimento das suas equipas é investir no futuro da sua empresa. Criamos programas de formação personalizados, focados nas competências técnicas e comportamentais necessárias para enfrentar os desafios do mercado atual.',
        points: [
          'Levantamento de Necessidades de Formação',
          'Desenho de Programas de Formação à Medida',
          'Workshops de Liderança e Gestão de Equipas',
          'Formação em Soft Skills e Hard Skills',
          'Coaching Executivo e de Equipas',
        ],
      },
    },
    {
      icon: Search,
      title: 'Survey, Estudos e Pesquisas Técnicas',
      description:
        'Recolha e análise de dados, estudos de mercado e pesquisas técnicas para decisões informadas e estratégicas.',
      color: 'from-violet-500 to-fuchsia-500',
      details: {
        description:
          'Tomar decisões baseadas em dados é fundamental. A nossa equipa de especialistas realiza estudos aprofundados, desde pesquisas de mercado a análises setoriais, fornecendo insights valiosos para orientar a sua estratégia e minimizar incertezas.',
        points: [
          'Estudos de Mercado e Análise de Concorrência',
          'Inquéritos de Satisfação de Clientes',
          'Pesquisas de Opinião e Estudos Sociais',
          'Análise de Viabilidade Económica e Financeira',
          'Recolha e Tratamento de Dados (Qualitativos e Quantitativos)',
        ],
      },
    },
    {
      icon: Settings,
      title: 'Gestão Administrativa e Apoio Operacional',
      description:
        'Suporte na otimização de processos administrativos, financeiros e operacionais para maior eficiência.',
      color: 'from-slate-500 to-gray-500',
      details: {
        description:
          'Uma gestão administrativa eficiente é a espinha dorsal de qualquer negócio. Oferecemos suporte para otimizar as suas operações diárias, desde a gestão financeira à logística, permitindo que se foque no que realmente importa: o crescimento do seu negócio.',
        points: [
          'Otimização de Processos Administrativos',
          'Gestão de Tesouraria e Controlo Financeiro',
          'Apoio na Gestão de Recursos Humanos',
          'Implementação de Ferramentas de Gestão',
          'Apoio Operacional e Logístico',
        ],
      },
    },
    {
      icon: FileText,
      title: 'Licenciamento e Regularização',
      description:
        'Apoio completo na obtenção de licenças, alvarás e regularização de atividades empresariais e projetos.',
      color: 'from-rose-500 to-red-600',
      details: {
        description:
          'Navegar no complexo universo regulatório pode ser um desafio. A nossa equipa trata de todo o processo de licenciamento, garantindo que a sua empresa ou projeto cumpra todos os requisitos legais e normativos, de forma rápida e eficiente.',
        points: [
          'Licenciamento Industrial e Comercial',
          'Licenciamento de Obras e Urbanismo',
          'Regularização de Ativos e Propriedades',
          'Apoio em Processos de Certificação (ISO, etc.)',
          'Consultoria Regulatória e Legal',
        ],
      },
    },
    {
      icon: TrendingUp,
      title: 'Otimização de Performance',
      description:
        'Análise de dados, KPIs e planos de ação para aprimorar a performance e os resultados da organização.',
      color: 'from-emerald-500 to-lime-600',
      details: {
        description:
          'Ajudamos a sua organização a atingir o máximo potencial, através da análise contínua de performance e da implementação de melhorias. Definimos os indicadores-chave de desempenho (KPIs) certos e criamos dashboards para uma gestão mais visual e eficaz.',
        points: [
          'Definição de KPIs e Métricas de Sucesso',
          'Criação de Dashboards de Gestão',
          'Análise de Performance Operacional e Financeira',
          'Programas de Melhoria Contínua (Kaizen, Lean)',
          'Benchmarking e Análise de Best Practices',
        ],
      },
    },
  ]

  const handleQuoteRequest = () => {
    setSelectedService(null)
    const element = document.querySelector('#contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section
        id="servicos"
        className="py-20 bg-slate-950 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Áreas de Actuação
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Actuamos com soluções integradas e personalizadas nas principais
              áreas da gestão empresarial, apoiando organizações com serviços
              estratégicos que elevam a eficiência, fortalecem processos e geram
              resultados sustentáveis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group h-full cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-lg`}
                  />

                  <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800 group-hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-4 text-white flex-grow">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-center leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <div className="mt-6 text-blue-400 flex items-center justify-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Saber mais <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedService}
        onOpenChange={() => setSelectedService(null)}
      >
        {selectedService && (
          <DialogContent className="max-w-2xl bg-slate-900/80 backdrop-blur-lg border-slate-700 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">
                {selectedService.title}
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-base">
                {selectedService.details.description}
              </DialogDescription>
            </DialogHeader>
            <div className="my-6">
              <h4 className="font-semibold text-lg mb-4 text-blue-400">
                O que inclui:
              </h4>
              <ul className="space-y-3">
                {selectedService.details.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end space-x-4">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="text-gray-300 border-slate-600 hover:bg-slate-800 hover:text-white"
                >
                  Fechar
                </Button>
              </DialogClose>
              <Button
                onClick={handleQuoteRequest}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:opacity-90"
              >
                Pedir Cotação
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

export default Services
