import Typography from "typography";
import typographyTheme from "typography-theme-twin-peaks";

import theme from "./main";

typographyTheme.baseFontSize = theme.fonts.baseSize;
typographyTheme.scaleRatio = theme.fonts.scale;

typographyTheme.overrideThemeStyles = ({ rhythm }) => ({
  "h1, h2, h3, h4, h5, h6": {
    color: theme.colors.foreground,
    marginTop: rhythm(0.5),
  },

  "body": {
    color: theme.colors.foreground,
  },

  "a": {
    color: theme.colors.link,
    textShadow: `none`,
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${theme.colors.link} 1px, ${theme.colors.link} 2px, rgba(0, 0, 0, 0) 2px)`,
  }
});

const typography = new Typography(typographyTheme);

export default typography;
