// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FizhWiki',
			description: 'Personal Knowledge Base & Lab Notes untuk Aspiring Network & Security Engineer',
			customCss: ['./src/styles/custom.css'],
			head: [
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
