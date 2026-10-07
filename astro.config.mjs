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
			description: 'Personal Knowledge Base & Lab Notes untuk Aspiring Network & Security Engineer',
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
						href: 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..700&family=JetBrains+Mono:wght@400..700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap',
					},
				},
				{
					tag: 'link',
					attrs: { rel: 'manifest', href: '/manifest.webmanifest' },
				},
				{
					tag: 'meta',
					attrs: { name: 'theme-color', content: '#4f46e5' },
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
					label: '📖 Kamus Istilah',
					items: [{ autogenerate: { directory: 'kamus' } }],
				},
				{
					label: '🌐 Networking Core',
					items: [{ autogenerate: { directory: 'networking' } }],
				},
				{
					label: '🛡️ Network Security',
					items: [{ autogenerate: { directory: 'security' } }],
				},
				{
					label: '🐧 Linux & Homelab',
					items: [{ autogenerate: { directory: 'linux' } }],
				},
				{
					label: '🔬 Lab Notes',
					items: [{ autogenerate: { directory: 'labs' } }],
				},
				{
					label: '🎯 Sertifikasi',
					items: [{ autogenerate: { directory: 'certifications' } }],
				},
				{
					label: '🔗 Web Resources',
					items: [{ autogenerate: { directory: 'resources' } }],
				},
			],
		}),
		mermaid(),
	],
});
