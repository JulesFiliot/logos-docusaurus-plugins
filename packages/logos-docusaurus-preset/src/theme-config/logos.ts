import baseThemeConfig from './base'

export const logosThemeConfig: typeof baseThemeConfig = {
  ...baseThemeConfig,
  navbar: {
    ...baseThemeConfig.navbar,
    logo: {
      alt: 'Logos',
      src: 'theme/image/logo.svg',
      height: 26,
    },
    items: [
      {
        type: 'localeDropdown',
        position: 'right',
      },
    ],
  },
  metadata: [
    { name: 'keywords', content: 'Logos' },
    {
      name: 'description',
      content:
        'Logos is a grassroots movement to provide trust-minimized, corruption resistant governing services and social institutions to underserved citizens.',
    },
    { name: 'image', content: 'theme/image/preview-image.png' },
  ],
  footer: {
    ...baseThemeConfig.footer,
    copyright: `Logos, ${new Date().getFullYear()}`,
    logo: {
      alt: 'Logos',
      src: 'theme/image/logo.svg',
      href: '/',
      width: 22,
    },
    links: [
      {
        title: 'Community',
        items: [],
      },
    ],
  },
}

export default logosThemeConfig
