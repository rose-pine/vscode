const alpha = (color, value) => {
  if (typeof color === 'object') {
    let newValue = {}
    for (let key in color) {
      newValue[key] = alpha(color[key], value)
    }
    return newValue
  } else {
    let hex = Math.round(value * 255).toString(16)
    let opacity = hex.length === 1 ? `0${hex}` : hex // eg. convert 5% from 0xd to 0x0d
    if (opacity.length !== 2) opacity = ''
    return color + opacity
  }
}

let accents = {
  love: {
    base: '#eb6f92',
    moon: '#eb6f92',
    dawn: '#b4637a',
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
  mutedAccents[`${accent}Muted`] = alpha(accents[accent], 0.5)
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
      textSubtle: {
        base: '#6e6a86',
        moon: '#817c9c',
        dawn: '#6e6a86',
      },
      textIgnored: {
        base: '#555169',
        moon: '#59546d',
        dawn: '#9893a5',
      },

      bgBase: {
        base: '#191724',
        moon: '#232136',
        dawn: '#faf4ed',
      },
      bgSurface: {
        base: '#1f1d2e',
        moon: '#2a273f',
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
        moon: alpha('#817c9c', 0.15),
        dawn: alpha('#6e6a86', 0.08),
      },
      highlightInactive: {
        base: alpha('#6e6a86', 0.1),
        moon: alpha('#817c9c', 0.08),
        dawn: alpha('#6e6a86', 0.05),
      },
      highlightOverlay: {
        base: alpha('#6e6a86', 0.4),
        moon: alpha('#817c9c', 0.3),
        dawn: alpha('#6e6a86', 0.15),
      },
      diffHighlightInserted: alpha(accents.foam, 0.08),
      diffHighlightRemoved: alpha(accents.love, 0.08),

      ...accents,
      ...mutedAccents,
    },
  },
}
