/* Configuration Tailwind de la LP. Tokens repris de la DA cogity.com
   (septembre 2026) : encre #171717, fond #fbfbfa, filets #dedfda,
   vert #006b4f (survol #00543e, doux #e8f1ed), menthe #64d4ad sur fond sombre,
   vert forêt #103b2c pour la section de clôture, ambre #a2510c pour les alertes.
   Typographie Geist (titres en 500, interlettrage serré) et Geist Mono (surtitres).
   La feuille assets/css/app.css est partagée par toutes les LP du dépôt
   (un dossier par LP : transport/index.html, etc.).
   Compiler depuis la racine après toute modification de classes dans une LP :
   npx tailwindcss@3.4 -c tailwind.config.js -i src/tailwind.css -o assets/css/app.css --minify */
module.exports = {
  content: ['./*/index.html'],
  theme: { extend: {
    colors: {
      encre:  { DEFAULT:'#171717', 2:'#424242' },
      gris:   '#686b68',
      filet:  '#dedfda',
      fond:   '#fbfbfa',
      vert:   { DEFAULT:'#006b4f', fonce:'#00543e', doux:'#e8f1ed', sauge:'#edf2eb', bord:'#d5dfd0' },
      menthe: '#64d4ad',
      ambre:  '#a2510c',
      nuit:   '#0f1311',
      foret:  '#103b2c'
    },
    fontFamily: {
      sans: ['Geist', 'Arial', 'sans-serif'],
      mono: ['Geist Mono', 'ui-monospace', 'monospace']
    },
    borderRadius: { DEFAULT: '5px' },
    maxWidth: { site: '1440px', lisible: '68ch' }
  }}
};
