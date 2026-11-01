// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://fizhwiki.vercel.app',
	integrations: [
		starlight({
			title: 'FizhWiki',
			description: 'Catatan belajar jaringan, keamanan, dan Linux, lengkap dengan write-up lab.',
			logo: { src: './src/assets/logo.svg' },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Fizhkan/FizhWiki' },
			],
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				},
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap',
					},
				},
				{
					tag: 'link',
					attrs: { rel: 'manifest', href: '/manifest.webmanifest' },
				},
				{
					tag: 'meta',
					attrs: { name: 'theme-color', content: '#17150f' },
				},
				{
					tag: 'script',
					content: `
						if ('serviceWorker' in navigator) {
							window.addEventListener('load', () => {
								navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW reg fail:', err));
							});
						}
					`,
				},
			],
			sidebar: [
				{
					label: 'Kamus Istilah',
					items: [{ autogenerate: { directory: 'kamus' } }],
				},
				{
					label: 'Networking',
					items: [{ autogenerate: { directory: 'networking' } }],
				},
				{
					label: 'Network Security',
					items: [{ autogenerate: { directory: 'security' } }],
				},
				{
					label: 'Linux & Homelab',
					items: [{ autogenerate: { directory: 'linux' } }],
				},
				{
					label: 'Lab Notes',
					items: [{ autogenerate: { directory: 'labs' } }],
				},
				{
					label: 'Sertifikasi',
					items: [{ autogenerate: { directory: 'certifications' } }],
				},
				{
					label: 'Referensi',
					items: [{ autogenerate: { directory: 'resources' } }],
				},
			],
		}),
		mermaid(),
	],
});
