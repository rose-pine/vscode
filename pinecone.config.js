const alpha = (color, value) => {
  let hex = Math.round(value * 255).toString(16)
  let opacity = hex.length == 1 ? `0${hex}` : hex // eg. convert 5% from 0xd to 0x0d

  return color + opacity
}

let accents = {
  rose: {
    base: '#ebbcba',
    moon: '#ea9a97',
    dawn: '#e09694',
  },
  pine: {
    base: '#31748f',
    moon: '#3e8fb0',
    dawn: '#286983',
  },
  foam: {
    base: '#9ccfd8',
    moon: '#9ccfd8',
    dawn: '#619fa9',
  },
  iris: {
    base: '#c4a7e7',
    moon: '#c4a7e7',
    dawn: '#9a86b1',
  },
  love: {
    base: '#eb6f92',
    moon: '#eb6f92',
    dawn: '#bd6d83',
  },
  leaf: {
    base: '#f6c177',
    moon: '#f6c177',
    dawn: '#769b94',
  },
  gold: {
    base: '#f6c177',
    moon: '#f6c177',
    dawn: '#edac53',
  },
}

let mutedAccents = {}

// create muted shades of each accent colour
Object.keys(accents).forEach((accent) => {
  let { base, moon, dawn } = accents[accent]

  mutedAccents[`${accent}-muted`] = {
    base: alpha(base, 0.5),
    moon: alpha(moon, 0.5),
    dawn: alpha(dawn, 0.5),
  }
})

module.exports = {
  options: {
    writeMeta: false,
  },
  theme: {
    variants: {
      base: {
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
      'debug-fg': '#fff',
      'debug-fg-prominent': '#fff',
      'debug-bg': {
        base: '#3e8fb0',
        moon: '#3e8fb0',
        dawn: '#769b94',
      },
      'debug-bg-prominent': {
        base: alpha('#e0def4', 0.25),
        moon: alpha('#e0def4', 0.2),
        dawn: alpha('#575279', 0.65),
      },
      overlay: {
        base: alpha('#e0def4', 0.25),
        moon: alpha('#e0def4', 0.2),
        dawn: alpha('#575279', 0.2),
      },
      border: {
        base: '#26233a',
        moon: '#393552',
        dawn: '#fffdfa',
      },
      surface: {
        base: '#1f1d2e',
        moon: '#26233a',
        dawn: '#fffaf3',
      },
      base: {
        base: '#191724',
        moon: '#1f1d2e',
        dawn: '#faf4ed',
      },
      shadow: {
        base: alpha('#010101', 0.3),
        moon: alpha('#010101', 0.3),
        dawn: '#f2e9de',
      },
      fg: {
        base: '#e0def4',
        moon: '#e0def4',
        dawn: '#575279',
      },
      'fg-subtle': {
        base: alpha('#e0def4', 0.4),
        moon: '#8c8aa7',
        dawn: alpha('#575279', 0.8),
      },
      'fg-inactive': {
        base: '#706e86',
        moon: alpha('#8c8aa7', 0.38),
        dawn: alpha('#575279', 0.5),
      },
      'fg-inactive-symbol': {
        base: alpha('#706e86', 0.5),
        moon: alpha('#8c8aa7', 0.5),
        dawn: alpha('#575279', 0.4),
      },
      'fg-highlight': {
        base: alpha('#706e86', 0.4),
        moon: alpha('#8c8aa7', 0.5),
        dawn: alpha('#575279', 0.5),
      },
      'bg-highlight-inactive': {
        base: alpha('#706e86', 0.1),
        moon: alpha('#8c8aa7', 0.1),
        dawn: alpha('#575279', 0.05),
      },
      'bg-highlight': {
        base: alpha('#706e86', 0.2),
        moon: alpha('#8c8aa7', 0.12),
        dawn: alpha('#575279', 0.08),
      },
      'bg-highlight-match': {
        base: alpha('#c4a7e7', 0.25),
        moon: alpha('#c4a7e7', 0.25),
        dawn: alpha('#9a86b1', 0.25),
      },
      'bg-highlight-active': {
        base: alpha('#706e86', 0.3),
        moon: alpha('#8c8aa7', 0.17),
        dawn: alpha('#575279', 0.13),
      },
      ...accents,
      ...mutedAccents,
    },
  },
}
