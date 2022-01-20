import { alpha, defineConfig } from 'pinecone-cli'
import { roles } from '@rose-pine/palette'

const colors = {}
Object.keys(roles).map((role) => {
	const currentRole = roles[role]

	colors[role] = {
		main: currentRole.main.alpha
			? currentRole.main.alpha.hex
			: currentRole.main.hex,
		moon: currentRole.moon.alpha
			? currentRole.moon.alpha.hex
			: currentRole.moon.hex,
		dawn: currentRole.dawn.alpha
			? currentRole.dawn.alpha.hex
			: currentRole.dawn.hex,
	}

	colors[`${role}Muted`] = {
		main: alpha(currentRole.main.hex, 0.5),
		moon: alpha(currentRole.moon.hex, 0.5),
		dawn: alpha(currentRole.dawn.hex, 0.5),
	}
})

export default defineConfig({
	source: './themes/_pinecone-color-theme.json',
	output: './themes',
	prefix: '_',
	options: {
		experimental: {
			removeEmptyThemeValues: true,
		},
	},
	theme: {
		variants: {
			main: {
				name: 'Rosé Pine',
				type: 'dark',
			},
			moon: {
				name: 'Rosé Pine Moon',
				type: 'dark',
			},
			dawn: {
				name: 'Rosé Pine Dawn',
				type: 'light',
			},
		},
		colors: {
			transparent: '#0000',
			unusedOpacity: alpha('#000', 0.5),

			primary: colors.rose,
			primaryHover: alpha(colors.rose, 0.9),
			onPrimary: colors.base,

			secondary: colors.iris,
			secondaryHover: alpha(colors.iris, 0.9),
			onSecondary: colors.base,

			neutral: colors.surface,
			neutralHover: colors.overlay,
			onNeutral: colors.text,

			shadow: {
				main: alpha('#010101', 0.1),
				moon: alpha('#191724', 0.3),
				dawn: alpha('#f2e9de', 0.3),
			},

			diffHighlightInserted: alpha(colors.foam, 0.08),
			diffHighlightRemoved: alpha(colors.love, 0.08),

			icon: colors.subtle,
			iconActive: colors.text,

			information: colors.foam,
			warning: colors.gold,
			error: colors.love,

			...colors,
		},
	},
})
