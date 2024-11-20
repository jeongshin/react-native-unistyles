import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'
import expressiveCode, { ExpressiveCodeTheme } from 'astro-expressive-code'
import fs from 'node:fs'

const themeJson = fs.readFileSync(new URL(`./theme.json`, import.meta.url), 'utf8')
const customTheme = ExpressiveCodeTheme.fromJSONString(themeJson)

const oldPaths = {
    'start': [
        'basic-usage',
        'benchmarks',
        'introduction',
        'migration-from-1',
        'migration-from-stylesheet',
        'setup',
    ],
    'reference': [
        'breakpoints',
        'compound-variants',
        'content-size-category',
        'create-stylesheet',
        'debugging',
        'dimensions',
        'dynamic-functions',
        'edge-to-edge',
        'errors',
        'faq',
        'media-queries',
        'plugins',
        'server-side-rendering',
        'testing',
        'theming',
        'unistyles-registry',
        'unistyles-runtime',
        'use-initial-theme',
        'use-styles',
        'variants',
        'web-support'
    ],
    'other': [
        'for-library-authors',
        'for-sponsors',
    ],
    'examples': [
        'all'
    ]
}

export default defineConfig({
	integrations: [
        expressiveCode({
            themes: [customTheme],
            languages: ['typescript', 'tsx']
        }),
		starlight({
			title: 'react-native-unistyles',
            description: 'React Native StyleSheet 3.0',
            customCss: ['./src/styles/docs.css'],
            logo: {
                src: './public/favicon.svg'
            },
            social: {
                github: 'https://github.com/jpudysz/react-native-unistyles',
                'x.com': 'https://x.com/jpudysz',
                discord: 'https://discord.gg/akGHf27P4C'
            },
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Introduction', slug: 'v3/start/introduction' },
					],
				}
			],
		}),
        sitemap(),
	],
    redirects: Object.fromEntries(Object.entries(oldPaths).flatMap(([parentpath, subPaths]) => {
        return subPaths.map(subPath => {
            const path = `/${parentpath}/${subPath}`

            return [path, `/v2${path}`]
        })
    }))
});
