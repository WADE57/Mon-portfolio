# 🧑‍💻 Portfolio - WADE Abdou

Portfolio personnel developpe avec **React + Vite**, deploye sur **GitHub Pages**.  
Il presente mon parcours en mathématiques appliquées et data science, mes projets (scientifiques & data), ainsi que mes compétences techniques.

---

## 🎯 Objectif

Ce portfolio a pour objectif de présenter mon profil dans le cadre d’une recherche d’alternance en :

- Data Science  
- Machine Learning  
- Data Engineering  

---

## Demo

- Site en ligne: `https://wade57.github.io/Mon-portfolio/`
- Repository: `https://github.com/WADE57/Mon-portfolio`


## Fonctionnalités 

- 🌗 Theme clair/sombre avec persistance via localStorage
- 📍 Navigation fixe avec scroll fluide entre sections
- 🌍 Bascule de langue FR/EN
- 📱 Interface responsive (mobile, tablette, desktop)
- 📧 Formulaire de contact (envoi via `mailto`)
- 📊 Presentation complete:
- `Hero` (accueil)
- `About` (a propos)
- `Education` (formation)
- `Skills` (competences techniques)
- `SoftSkills` (competences comportementales)
- `Projects` (projets & experiences)
- `Languages` (langues)
- `Contact`
- `Footer`

## Prérequis

- Node.js 18+ recommandé
- npm (ou pnpm/yarn)

## Installation et demarrage local

```bash
git clone https://github.com/WADE57/Mon-portfolio.git
cd Mon-portfolio
npm install
npm run dev
```

Le serveur Vite démarre et le site est accessible en local (généralement sur http://localhost:5173).

## Scripts npm

`npm run dev` : lance le serveur de developpement Vite
`npm run build` : genere le build de production (dist/)
`npm run preview` : previsualise le build de production
`npm run lint` : verifie la qualite du code avec ESLint
`npm run deploy` : build + publication GitHub Pages via gh-pages

## Déploiement (GitHub Pages)

1. Verifier la valeur `base` dans `vite.config.js:`
	``bash
	base: '/mon-portfolio/', // remplacer par le nom de votre repo
	``
2. Cette valeur doit correspond au nom du repository GitHub (ex: `mon-portfolio`).

3. Lancer le script de déploiement :
	``bash
	npm run deploy
	``
4. Activer GitHub Pages sur la branche `gh-pages` (si necessaire) via les paramètres du repository.

- Le déploiement utilise `gh-pages` et la configuration Vite (voir [vite.config.js](vite.config.js)).
- La branche `gh-pages` est publiée sur GitHub Pages.

## Organisation du projet

```
mon-portfolio/
├─ index.html
├─ package.json
├─ vite.config.js
├─ eslint.config.js
├─ public/
└─ src/
	├─ main.jsx
	├─ App.jsx
	├─ App.css
	├─ index.css
	├─ assets/
	│  └─ me.jpg            # Photo de profil
	├─ components/
	|  ├─ Footer.jsx
	|  ├─ Footer.css
	│  ├─ Navigation.jsx
	│  ├─ Navigation.css
	│  ├─ LanguageToggle.jsx
	│  ├─ LanguageToggle.css
	│  ├─ ThemeToggle.jsx   # Bouton thème clair/sombre
	│  └─ ThemeToggle.css
	└─ sections/
		├─ Hero.jsx          # Accueil (photo + titres)
		├─ Hero.css
		├─ About.jsx         # À propos
		├─ About.css
		├─ Projects.jsx      # Projets & expériences
		├─ Projects.css
		├─ Education.jsx     # Formations
		├─ Education.css
		├─ Skills.jsx        # Compétences (description + techno)
		├─ Skills.css
		├─ SoftSkills.jsx    # Compétences comportementales
		├─ SoftSkills.css
		├─ Languages.jsx     # Langues
		├─ Languages.css
		├─ Contact.jsx       # Contact
		└─ Contact.css
```
## Personnalisation rapide
- Photo profil: `src/assets/me.jpg`
- Textes sections: `fichiers src/sections/*.jsx`
- Liens réseaux/contact: `src/sections/Contact.jsx`
- Couleurs et styles globaux: `src/index.css` et `src/App.css`
- Navigation et ordre des sections: `src/App.jsx` + `src/components/Navigation.jsx`

## Accessibilite et bonnes pratiques (recommande)
- Ajouter des attributs `alt` descriptifs sur les images
- Verifier le contraste en theme clair/sombre
- Limiter les emojis decoratifs non annonces
- Tester le responsive sur plusieurs largeurs d'ecran

## Contact
- Email: [abdouwade1996@gmail.com](mailto:abdouwade1996@gmail.com)
- LinkedIn: [Abdou Wade](https://www.linkedin.com/in/abdou-wade-81694a28b)
- GitHub: [WADE](https://github.com/WADE57)
