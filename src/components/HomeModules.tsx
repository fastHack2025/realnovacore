'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaUsers, FaChartPie, FaClipboardList } from 'react-icons/fa';

const modules = [
  {
    title: "Module CRM",
    description: "Gérez vos prospects, ventes et services clients avec une fluidité inégalée grâce à notre CRM intelligent NovaCore.",
    icon: <FaUsers className="text-4xl text-indigo-400" />,
  },
  {
    title: "Module ERP",
    description: "Centralisez votre gestion d'entreprise : stocks, achats, ressources humaines et plus encore avec NovaCore ERP.",
    icon: <FaClipboardList className="text-4xl text-indigo-400" />,
  },
  {
    title: "Module IA",
    description: "Automatisez la communication, la prospection et les réseaux sociaux grâce à notre Intelligence Artificielle propriétaire.",
    icon: <FaRobot className="text-4xl text-indigo-400" />,
  },
  {
    title: "Analytics Avancés",
    description: "Accédez à des rapports IA pour booster votre chiffre d’affaires et vos performances en quelques clics.",
    icon: <FaChartPie className="text-4xl text-indigo-400" />,
  },
];

export default function HomeModules() {
  return (
    <motion.section
      id="modules"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Modules NovaCore</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {modules.map((module, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
          >
            {module.icon}
            <h3 className="text-xl font-bold mt-4">{module.title}</h3>
            <p className="text-gray-400 mt-2">{module.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
