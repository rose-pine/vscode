import { alpha, defineConfig } from "pinecone-cli";
import palette from "@rose-pine/palette";

const { love, gold, rose, pine, foam, iris } = palette;

const accents = {
  love,
  loveMuted: alpha(love, 0.5),
  gold,
  goldMuted: alpha(gold, 0.5),
  rose: rose,
  roseMuted: alpha(rose, 0.5),
  pine,
  pineMuted: alpha(pine, 0.5),
  foam,
  foamMuted: alpha(foam, 0.5),
  iris,
  irisMuted: alpha(iris, 0.5),
};

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
      core: {
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

      primary: accents.rose,
      primaryHover: alpha(accents.rose, 0.9),
      onPrimary: {
        core: "#191724",
        moon: "#26233a",
        dawn: "#faf4ed",
      },

      secondary: accents.iris,
      secondaryHover: alpha(accents.iris, 0.9),
      onSecondary: {
        core: "#191724",
        moon: "#26233a",
        dawn: "#faf4ed",
      },

      text: {
        core: "#e0def4",
        moon: "#e0def4",
        dawn: "#575279",
      },
      textOnLight: "#191724",
      textOnDark: "#e0def4",
      textSubtle: {
        core: "#6e6a86",
        moon: "#817c9c",
        dawn: "#6e6a86",
      },
      textIgnored: {
        core: "#555169",
        moon: "#59546d",
        dawn: "#9893a5",
      },

      bgBase: {
        core: "#191724",
        moon: "#232136",
        dawn: "#faf4ed",
      },
      bgSurface: {
        core: "#1f1d2e",
        moon: "#2a273f",
        dawn: "#fffaf3",
      },
      bgOverlay: {
        core: "#26233a",
        moon: "#393552",
        dawn: "#f2e9de",
      },

      uiShadow: {
        core: alpha("#010101", 0.1),
        moon: alpha("#191724", 0.3),
        dawn: alpha("#f2e9de", 0.3),
      },

      highlight: {
        core: alpha("#6e6a86", 0.2),
        moon: alpha("#817c9c", 0.15),
        dawn: alpha("#6e6a86", 0.08),
      },
      highlightInactive: {
        core: alpha("#6e6a86", 0.1),
        moon: alpha("#817c9c", 0.08),
        dawn: alpha("#6e6a86", 0.05),
      },
      highlightOverlay: {
        core: alpha("#6e6a86", 0.4),
        moon: alpha("#817c9c", 0.3),
        dawn: alpha("#6e6a86", 0.15),
      },
      diffHighlightInserted: alpha(accents.foam, 0.08),
      diffHighlightRemoved: alpha(accents.love, 0.08),

      ...accents,
    },
  },
});
