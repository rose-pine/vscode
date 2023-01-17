import { colorish, defineConfig } from 'pinecone-cli'
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
		main: colorish(currentRole.main.hex, 0.5),
		moon: colorish(currentRole.moon.hex, 0.5),
		dawn: colorish(currentRole.dawn.hex, 0.5),
	}

	colors[`${role}15`] = {
		main: colorish(currentRole.main.hex, 0.15),
		moon: colorish(currentRole.moon.hex, 0.15),
		dawn: colorish(currentRole.dawn.hex, 0.15),
	}
})

export default defineConfig({
	options: {
		source: './themes/_pinecone-color-theme.json',
		output: './themes',
		prefix: '$',
	},
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
		unusedOpacity: colorish('#000', 0.5),

		primary: colors.rose,
		primaryHover: colorish(colors.rose, 0.9),
		onPrimary: colors.base,

		secondary: colors.iris,
		secondaryHover: colorish(colors.iris, 0.9),
		onSecondary: colors.base,

		neutral: colors.surface,
		neutralHover: colors.overlay,
		onNeutral: colors.text,

		shadow: {
			main: colorish('#010101', 0.1),
			moon: colorish('#191724', 0.3),
			dawn: colorish('#f2e9de', 0.3),
		},

		diffHighlightInserted: colors.foam15,
		diffHighlightRemoved: colors.love15,

		icon: colors.subtle,
		iconActive: colors.text,

		information: colors.foam,
		warning: colors.gold,
		error: colors.love,

		...colors,
	},
})
