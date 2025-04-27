'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FaChartLine, FaGraduationCap, FaRobot, FaLaptopCode, FaHandshake, FaGlobe, FaRegCalendarAlt, FaMobileAlt, FaLightbulb, FaRocket, FaUserTie } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  { title: "Optimisation de l'Expérience Client (CX)", description: "Diagnostic, cartographie parcours client, traitement réclamations, fidélisation premium.", icon: <FaChartLine size={40} /> },
  { title: "Formations Service Client, Vente & CRM", description: "Formation accueil haut de gamme, gestion clients difficiles, CRM simple et intuitif.", icon: <FaGraduationCap size={40} /> },
  { title: "Création CRM & Applications Web Sur-Mesure", description: "Développement CRM sur mesure, portails clients, outils digitaux professionnels.", icon: <FaLaptopCode size={40} /> },
  { title: "Automatisation de Processus & IA (NovaCore Tools)", description: "IA pour automatisation commerciale, réponses automatisées, gestion données avancée.", icon: <FaRobot size={40} /> },
  { title: "Coaching Stratégique & KPIs", description: "Accompagnement mensuel, analyse KPIs, réajustement rapide des stratégies commerciales.", icon: <FaHandshake size={40} /> },
  { title: "Communication Digitale & Pack Com 360°", description: "Création visuels optimisés, gestion réseaux sociaux, branding, QR code sur mesure.", icon: <FaGlobe size={40} /> },
  { title: "Création de Calendrier Editorial Premium", description: "12 à 20 visuels/mois optimisés IA pour réseaux sociaux, planification stratégique.", icon: <FaRegCalendarAlt size={40} /> },
  { title: "Contenus IA & Publication Automatisée", description: "Contenus générés par IA, automatisation de la publication multi-plateformes.", icon: <FaRocket size={40} /> },
  { title: "Audit de Présence en Ligne", description: "Audit SEO, audit réseaux sociaux, analyse de visibilité digitale professionnelle.", icon: <FaLightbulb size={40} /> },
  { title: "Déploiement CRM Avancé + Dashboard KPIs", description: "CRM complet avec tableau de bord KPI personnalisé et automatisations métiers.", icon: <FaUserTie size={40} /> },
  { title: "Accompagnement Premium 3 Mois", description: "Suivi intensif : Optimisation CX, CRM, digitalisation avancée, coaching rapproché.", icon: <FaMobileAlt size={40} /> },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen pt-20">
      
      {/* Header */}
      <section className="text-center section-padding">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-heading mb-6"
        >
          Nos Services
        </motion.h1>
        <p className="max-w-xl mx-auto text-gray-400 text-lg">
          Construisons ensemble votre futur digital et client avec excellence. 🚀
        </p>
      </section>

      {/* Services Cards - Scrollable Flex */}
      <section ref={containerRef} className="overflow-x-auto flex gap-8 section-padding pb-12 px-6 snap-x snap-mandatory">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="min-w-[300px] bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex-shrink-0 snap-center text-center"
          >
            <div className="text-primary mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </section>

      {/* CTA Final */}
      <motion.div
        className="text-center section-padding bg-primary text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">Un projet ambitieux ? Discutons-en !</h2>
        <p className="mb-8">Nous vous aidons à transformer vos processus et votre expérience client avec excellence.</p>
        <Link
          href="/contact"
          className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
        >
          Nous Contacter
        </Link>
      </motion.div>

    </main>
  );
}
