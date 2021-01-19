const alpha = (color, value) => {
  let hex = Math.round(value * 255).toString(16)
  let opacity = hex.length == 1 ? `0${hex}` : hex // eg. convert 5% from 0xd to 0x0d

  return color + opacity
}

let accents = {
  love: {
    base: '#eb6f92',
    moon: '#eb6f92',
    dawn: '#c02450',
  },
  gold: {
    base: '#f6c177',
    moon: '#f6c177',
    dawn: '#ea9d34',
  },
  rose: {
    base: '#ebbcba',
    moon: '#ea9a97',
    dawn: '#d7827e',
  },
  pine: {
    base: '#31748f',
    moon: '#3e8fb0',
    dawn: '#286983',
  },
  foam: {
    base: '#9ccfd8',
    moon: '#9ccfd8',
    dawn: '#56949f',
  },
  iris: {
    base: '#c4a7e7',
    moon: '#c4a7e7',
    dawn: '#907aa9',
  },
}

let mutedAccents = {}

// create muted shades of each accent colour
Object.keys(accents).forEach((accent) => {
  let { base, moon, dawn } = accents[accent]

  mutedAccents[`${accent}Muted`] = {
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

      primary: accents.rose,
      onPrimary: {
        base: '#191724',
        moon: '#26233a',
        dawn: '#faf4ed',
      },

      text: {
        base: '#e0def4',
        moon: '#e0def4',
        dawn: '#575279',
      },
      textSubtle: '#6e6a86',
      textIgnored: {
        base: '#555169',
        moon: '#555169',
        dawn: '#9893a5',
      },

      bgBase: {
        base: '#191724',
        moon: '#232136',
        dawn: '#faf4ed',
      },
      bgSurface: {
        base: '#1f1d2e',
        moon: '#2e2a46',
        dawn: '#fffaf3',
      },

      uiBorder: {
        base: '#26233a',
        moon: '#393552',
        dawn: '#fffdfa',
      },
      uiShadow: alpha('#010101', 0.1),

      highlight: {
        base: alpha('#6e6a86', 0.2),
        moon: alpha('#6e6a86', 0.2),
        dawn: alpha('#6e6a86', 0.08),
      },
      highlightActive: {
        base: alpha('#6e6a86', 0.3),
        moon: alpha('#6e6a86', 0.17),
        dawn: alpha('#6e6a86', 0.13),
      },
      highlightInactive: {
        base: alpha('#6e6a86', 0.1),
        moon: alpha('#6e6a86', 0.1),
        dawn: alpha('#6e6a86', 0.05),
      },
      highlightOverlay: {
        base: alpha('#6e6a86', 0.4),
        moon: alpha('#6e6a86', 0.4),
        dawn: alpha('#6e6a86', 0.15),
      },

      ...accents,
      ...mutedAccents,
    },
  },
}
