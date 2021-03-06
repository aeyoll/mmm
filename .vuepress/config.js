module.exports = {
  base: '/mmm/',
  title: 'Mambo Miam Miam',
  description: 'Petite collection personnelle de recettes',
  serviceWorker: true,
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Plats', link: '/plats/' },
      { text: 'Desserts', link: '/desserts/' },
    ]
  },
}