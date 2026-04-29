import { colorish, defineConfig } from 'pinecone-cli'
import { roles } from '@rose-pine/palette'

const blend = (foreground, background, alpha) => {
	const channels = (hex) =>
		hex
			.replace('#', '')
			.match(/.{2}/g)
			.map((channel) => Number.parseInt(channel, 16))

	const foregroundChannels = channels(foreground)
	const backgroundChannels = channels(background)

	return `#${foregroundChannels
		.map((channel, index) =>
			Math.round(channel * alpha + backgroundChannels[index] * (1 - alpha))
				.toString(16)
				.padStart(2, '0')
		)
		.join('')}`
}

const palette = {}
Object.keys(roles).map((role) => {
	const currentRole = roles[role]

	// Add Rosé Pine palette.
	palette[role] = {
		main: currentRole.main.alpha?.hex ?? currentRole.main.hex,
		moon: currentRole.moon.alpha?.hex ?? currentRole.moon.hex,
		dawn: currentRole.dawn.alpha?.hex ?? currentRole.dawn.hex,
	}

	// Add translucent variations.
	palette[`${role}/80`] = {
		main: colorish(currentRole.main.hex, 0.8),
		moon: colorish(currentRole.moon.hex, 0.8),
		dawn: colorish(currentRole.dawn.hex, 0.8),
	}
	palette[`${role}/50`] = {
		main: colorish(currentRole.main.hex, 0.5),
		moon: colorish(currentRole.moon.hex, 0.5),
		dawn: colorish(currentRole.dawn.hex, 0.5),
	}
	palette[`${role}/30`] = {
		main: colorish(currentRole.main.hex, 0.3),
		moon: colorish(currentRole.moon.hex, 0.3),
		dawn: colorish(currentRole.dawn.hex, 0.3),
	}
	palette[`${role}/20`] = {
		main: colorish(currentRole.main.hex, 0.2),
		moon: colorish(currentRole.moon.hex, 0.2),
		dawn: colorish(currentRole.dawn.hex, 0.2),
	}
	palette[`${role}/15`] = {
		main: colorish(currentRole.main.hex, 0.15),
		moon: colorish(currentRole.moon.hex, 0.15),
		dawn: colorish(currentRole.dawn.hex, 0.15),
	}
})

const inputBackground = {
	main: blend(roles.overlay.main.hex, roles.surface.main.hex, 0.5),
	moon: blend(roles.overlay.moon.hex, roles.surface.moon.hex, 0.5),
	dawn: blend(roles.overlay.dawn.hex, roles.surface.dawn.hex, 0.5),
}

export default defineConfig({
	options: {
		source: './themes/_pinecone-color-theme.json',
		output: './themes',
		prefix: '$',
		includeNonItalicVariants: true,
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
		shadow: colorish(palette.surface, 0.3),
		transparent: '#0000',

		onPrimary: palette.base,
		primary: palette.rose,
		primaryHover: colorish(palette.rose, 0.9),

		onSecondary: palette.base,
		secondary: palette.iris,
		secondaryHover: colorish(palette.iris, 0.9),

		inputBackground,

		...palette,
	},
})
