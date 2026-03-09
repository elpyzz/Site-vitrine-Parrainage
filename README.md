# Landing Page Programme Parrainage Artisan

Landing page professionnelle pour le programme d'apporteur d'affaires Aos Renov.

## 🚀 Technologies

- **React** + **Vite**
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **React CountUp** pour les animations de compteurs
- **Inter** (Google Fonts) pour la typographie

## 🎨 Design

- Couleurs principales : Bordeaux/rouge foncé (#7F1D1D, #991B1B)
- Accent : Orange/doré (#F59E0B) pour les montants
- Design moderne, épuré, responsive (mobile-first)

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📝 Configuration

Les liens sont déjà configurés :
- **Instagram** : `https://www.instagram.com/louispereira.exee/`
- **Application** : `https://www.aosrenovbtp.fr/`

**Aucune variable d'environnement n'est nécessaire** pour le déploiement.

### Ajouter les captures d'écran du logiciel

Pour afficher les 5 captures d'écran dans la section "Ce que l'artisan découvrira", placez les images dans le dossier `public/images/` avec les noms suivants :

1. `generateur-devis.jpg` - Générateur de Devis
2. `estimation-photo.jpg` - Estimation Automatique des Chantiers
3. `dossiers.jpg` - Gestion des Dossiers
4. `dashboard.jpg` - Tableau de Bord
5. `planning.jpg` - Planning des Chantiers

**Format recommandé :**
- Format : JPG ou PNG
- Taille : 1920x1080px minimum (ratio 16:10)
- Poids : < 500KB par image

Les images seront affichées dans un carousel interactif avec navigation par flèches et miniatures.

## 📱 Sections

1. **Navbar** - Navigation sticky avec lien "L'application" et animation au scroll
2. **Hero** - Section principale avec CTA et montant 300€ mis en avant
3. **TrustBar** - Statistiques dynamiques avec compteurs animés
4. **HowItWorks** - 3 étapes du processus de parrainage
5. **DiscoverApp** - Présentation de l'application avec 6 fonctionnalités clés
6. **WhyArtisanLoves** - 3 raisons pour lesquelles l'artisan va adorer
7. **Benefits** - 6 avantages pour l'apporteur d'affaires
8. **Simulation** - Calculateur de gains interactif avec slider
9. **Testimonials** - 3 témoignages avec dates mises à jour (2026)
10. **HowToTalk** - Section d'aide avec message pré-écrit à copier
11. **FAQ** - Accordion avec 6 questions fréquentes
12. **CTA** - Appel à l'action final avec lien Instagram
13. **Footer** - Informations légales, liens vers l'app et navigation

## 🎯 Déploiement

La page est prête pour le déploiement sur **Vercel** ou **Netlify**. Les fichiers de configuration sont déjà en place :

- `vercel.json` - Configuration Vercel avec rewrites pour React Router
- `netlify.toml` - Configuration Netlify avec redirects pour React Router

### Vercel

1. **Via l'interface :** Connectez votre repository GitHub, Vercel détectera automatiquement la configuration
2. **Via CLI :**
   ```bash
   npm install -g vercel
   vercel
   ```

### Netlify

1. **Via l'interface :** Connectez votre repository GitHub, Netlify utilisera automatiquement `netlify.toml`
2. **Via CLI :**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Variables d'environnement

**Aucune variable d'environnement n'est nécessaire.** Tous les liens sont configurés directement dans le code.

Pour plus de détails, consultez le fichier `DEPLOYMENT.md`.
