# Guide de Déploiement

## 📦 Configuration pour le déploiement

Ce projet est prêt pour le déploiement sur **Vercel** ou **Netlify** sans configuration supplémentaire.

## 🚀 Déploiement sur Vercel

1. **Via l'interface Vercel :**
   - Connectez votre repository GitHub
   - Vercel détectera automatiquement le framework Vite
   - Le fichier `vercel.json` configure déjà les rewrites pour React Router

2. **Via la CLI :**
   ```bash
   npm install -g vercel
   vercel
   ```

## 🌐 Déploiement sur Netlify

1. **Via l'interface Netlify :**
   - Connectez votre repository GitHub
   - Netlify utilisera automatiquement `netlify.toml`
   - Les redirects pour React Router sont déjà configurés

2. **Via la CLI :**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

## ⚙️ Variables d'environnement

**Aucune variable d'environnement n'est nécessaire** pour ce projet.

Tous les liens et configurations sont définis directement dans le code :
- Instagram: `@louispereira.exee`
- Site Aos Renov: `https://www.aosrenovbtp.fr/`

## 📝 Configuration React Router

Les fichiers de configuration (`vercel.json` et `netlify.toml`) incluent déjà les rewrites nécessaires pour que React Router fonctionne correctement en production.

Toutes les routes (`/mentions-legales`, `/confidentialite`, `/conditions`) redirigent vers `index.html` pour que React Router puisse gérer le routing côté client.

## ✅ Checklist avant déploiement

- [x] Configuration Vercel (`vercel.json`)
- [x] Configuration Netlify (`netlify.toml`)
- [x] React Router configuré
- [x] Build command configuré (`npm run build`)
- [x] Output directory configuré (`dist`)

## 🔧 Commandes utiles

```bash
# Build local pour tester
npm run build

# Preview du build
npm run preview

# Développement local
npm run dev
```
