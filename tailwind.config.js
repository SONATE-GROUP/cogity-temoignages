/* Configuration Tailwind de la LP, reprise telle quelle de l'ancienne config
   inline (CDN). Tokens repris du site cogity.com : navy-950 #060D28,
   navy-800 #162D70, primary-600 #2540EA, primary-50 #EFF3FF, échelle slate,
   accent transport #EA580C, typographie Geist Sans (variable, titres en 800).
   Compiler après toute modification de classes dans index.html :
   npx tailwindcss@3.4 -c tailwind.config.js -i src/tailwind.css -o assets/css/app.css --minify */
module.exports = {
  content: ['./index.html'],
  theme: { extend: {
    colors: {
      navy:      { 950:'#060D28', 900:'#0B1740', 800:'#162D70' },
      primary:   { 700:'#1E34C4', 600:'#2540EA', 500:'#6085FA', 50:'#EFF3FF' },
      slate:     { 900:'#0F172A', 700:'#334155', 600:'#475569', 500:'#64748B', 400:'#94A3B8', 300:'#CBD5E1', 200:'#E2E8F0', 100:'#F1F5F9', 50:'#F8FAFC' },
      transport: '#EA580C',
      valide:    '#059669'
    },
    fontFamily: { sans: ['Geist', 'system-ui', '-apple-system', 'sans-serif'] },
    maxWidth: { lisible: '68ch' }
  }}
};
