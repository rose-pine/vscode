import { alpha, defineConfig } from "pinecone-cli";
import {
  palette,
  colorsByRole,
  transparentHighlightsByRole,
} from "@rose-pine/palette";

const mutedColors = {};

Object.keys(colorsByRole).forEach((color) => {
  mutedColors[`${color}Muted`] = alpha(colorsByRole[color], 0.5);
});

export default defineConfig({
  source: "./themes/_pinecone-color-theme.json",
  output: "./themes",
  prefix: "_",
  options: {
    experimental: {
      removeEmptyThemeValues: true,
    },
  },
  theme: {
    variants: {
      dark: {
        name: "Rosé Pine",
        type: "dark",
      },
      moon: {
        name: "Rosé Pine Moon",
        type: "dark",
      },
      dawn: {
        name: "Rosé Pine Dawn",
        type: "light",
      },
    },
    colors: {
      transparent: "#0000",
      unusedOpacity: alpha("#000", 0.5),

      primary: palette.rose,
      primaryHover: alpha(palette.rose, 0.9),
      onPrimary: palette.base,

      secondary: palette.iris,
      secondaryHover: alpha(palette.iris, 0.9),
      onSecondary: palette.base,

      neutral: palette.surface,
      neutralHover: palette.overlay,
      onNeutral: palette.text,

      shadow: {
        dark: alpha("#010101", 0.1),
        moon: alpha("#191724", 0.3),
        dawn: alpha("#f2e9de", 0.3),
      },

      diffHighlightInserted: alpha(palette.foam, 0.08),
      diffHighlightRemoved: alpha(palette.love, 0.08),

      ...colorsByRole,
      ...transparentHighlightsByRole,
      ...mutedColors,
    },
  },
});
