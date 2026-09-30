# LP Cogity

Dépôt des landing pages de campagne Cogity, déployé sur Vercel.
Une LP = un dossier à la racine, servi à l'URL `domaine/<dossier>`.

| URL           | Fichier                |
|---------------|------------------------|
| `/transport`  | `transport/index.html` |

La racine `/` redirige temporairement vers `/transport` (voir `vercel.json`).

## Structure

```
assets/            ressources partagées par toutes les LP (polices, CSS, logos, photos)
src/tailwind.css   source Tailwind
tailwind.config.js tokens de la DA Cogity, scanne tous les */index.html
transport/         LP transporteurs
vercel.json        redirections
```

Dans les LP, les ressources sont appelées en chemin absolu (`/assets/...`)
pour fonctionner quel que soit le dossier.

## Ajouter une LP

1. Dupliquer le dossier : `cp -r transport <nouvelle-lp>`.
2. Adapter `<nouvelle-lp>/index.html` : bloc `DATA`, `<title>`, meta description,
   `og:url` (`https://<domaine>/<nouvelle-lp>`), image de partage.
3. Placer les nouvelles ressources dans `assets/` (ex. `assets/og-cogity-<nouvelle-lp>.png`).
4. Recompiler le CSS depuis la racine :
   `npx tailwindcss@3.4 -c tailwind.config.js -i src/tailwind.css -o assets/css/app.css --minify`
5. Ajouter la ligne au tableau ci-dessus.

## Tester en local

`python3 -m http.server` à la racine, puis ouvrir `http://localhost:8000/transport/`.
