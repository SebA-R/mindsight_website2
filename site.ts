// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'MindSight',
  description: 'MindSight is a federally incorporated nonprofit agency providing novel evidence-based cognitive stimulation therapy to seniors with dementia or prone to cognitive decline to stave off neurodegeneration.',
  logo: 'i-noto:cat-face',
  author: 'Sebastian Arellano-Rubach',
  url: 'https://happy-paws-with-nuxt-tailwindcss.netlify.app',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'About Us', link: '/about', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Donate',
      link: '/donate',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Articles',
      link: '/articles',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    { text: 'News & Events', link: '/blog', type: 'secondary', icon: 'i-mdi-home' },
    {
      text: 'Volunteer',
      link: '/volunteer',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
  ],
}
