# 📝 CHANGELOG - NovaCore

## [En cours] - Modules IA & Formations Pro
🚧 Prochaines fonctionnalités prévues :

### Modules IA
- Studio IA avec historique, favoris, génération texte / script / prompt
- Réseaux Sociaux IA : génération + planification des publications
- IA Communication Digitale : contenus adaptés par secteur d’activité

### Formations Pro
- Télévente, SAV, CX, Stratégie de vente (via `/formations/...`)
- Plateforme de suivi : progression, validation IA, scoring
- Intégration scoring IA dans dashboard utilisateur

---

## [CRM Final] - 2025-04-22
✅ Version stable enregistrée

### Ajouts
- Plateforme vitrine complète (Hero, Modules, Tarifs, FAQ, Témoignages)
- Module Pop-up RDV + WhatsApp + Chatbot IA (Davy)
- Authentification Clerk (admin / client) sans middleware
- Panel admin avec sidebar, dashboard, préférences
- 3 CRM sectoriels (Hôtel, Restaurant, Spa)
- Dashboard + graphique IA par secteur
- Ajout client dynamique (Supabase)
- Export Excel clients (XLSX)
- Fiches clients individuelles avec route dynamique `/client/[id]`
- Sécurisation des accès par rôle

### Améliorations
- Design responsive avec Tailwind
- Effets : animation fade-in, hover tarifs, interactions propres
- Sidebar admin centralisée

---

## [v1.0.0-alpha] - 2025-04-17
🚧 Première base du projet NovaCore

- Initialisation du projet Next.js 15 avec App Router
- Setup Clerk, Supabase, Cloudinary
- Intégration template Pocket (Tailwind)
- Création pages vitrine : Accueil, Connexion, NovaCore
