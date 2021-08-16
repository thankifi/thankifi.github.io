module.exports = {
    base: '/',
    title: 'Thankifi',
    description: 'Thankifi is a free (as in speech) API that makes it easy for you to express gratitude. Be grateful!',
    themeConfig: {
        // logo: '/images/logo_transparent.png',
        darkMode: false,
        navbar: [
            {
                text: 'API Reference',
                link: 'https://api.thanki.fi',
            },
        ],
        repo: 'thankifi'
    },
    plugins: [
        '@vuepress/back-to-top'
    ]
}