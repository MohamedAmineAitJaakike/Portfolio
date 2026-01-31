# Déploiement sur Netlify — Guide pour ce projet Next.js

Ce projet utilise Next.js `app/` router et des routes dynamiques. Pour que Netlify héberge correctement l'application, suivez l'une des deux approches ci-dessous.

---

## Option recommandée : Déploiement Git + Netlify Next.js Plugin (pas de drag-and-drop)
Ceci est la méthode recommandée et fiable.

1. Installer le plugin localement (optionnel, Netlify l'installera lors du build) :

```bash
npm install -D @netlify/plugin-nextjs
```

2. Assurez-vous que `netlify.toml` est présent (fichier ajouté automatiquement).

3. Poussez votre repo sur GitHub :

```bash
git add .
git commit -m "prepare netlify deployment"
git push origin main
```

4. Sur Netlify : `New site` → `Import from Git` → choisissez Git provider → sélectionnez le repo.

5. Laissez Netlify détecter la configuration (Build command: `npm run build`). Le plugin `@netlify/plugin-nextjs` s'exécutera pendant la build et Netlify publiera les pages correctement.

6. Déployez. Netlify exécutera le build et gérera la génération des pages statiques/dynamiques selon le plugin.

---

## Option drag-and-drop (limité) — Générer un site statique
Si vous tenez absolument au drag-and-drop, vous pouvez générer un site statique avec `next export`, mais ATTENTION :

- Le `app/` router **n'est pas supporté** par `next export`.
- Les pages dynamiques, les API routes, et le rendu côté serveur ne fonctionneront pas.
- Vous risquez d'avoir des routes manquantes (404) pour les pages dynamiques.

Pour créer un export statique (si vous acceptez les limitations) :

```bash
npm run build
npm run export
```

Cela créera un dossier `out/` que vous pouvez glisser-déposer dans Netlify. Vérifiez localement le contenu du dossier `out/` pour confirmer que les pages essentielles sont présentes.

---

## Résumé & recommandation
- Pour ce projet (Next.js `app/` router), **préférez Vercel** (support natif) ou **Netlify via Git + `@netlify/plugin-nextjs`**.
- Le drag-and-drop est possible seulement après `next export`, mais entraîne probablement des 404 et la perte de fonctionnalités dynamiques.

Si vous voulez, je peux :
- Ajouter/committer automatiquement `netlify.toml` (déjà fait) et préparer un PR.
- Préparer un script `export` et tester localement l'`out/` résultant et vous dire quelles pages seront manquantes.
- Préparer un déploiement pas-à-pas sur Vercel.

Dites-moi quelle option vous préférez et je continue.
