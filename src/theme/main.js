const color = require(`color`);

const black = `rgb(55, 55, 55)`;
const white = `rgb(254, 255, 255)`;
const gray = `rgb(128, 128, 128)`;
const diamond = `rgb(196, 233, 255)`;
const cyanCornflowerBlue = `rgb(34, 133, 191)`;
const mayaBlue = `rgb(92, 194, 255)`;
const brilliantAzure = `rgb(45, 177, 255)`;
const red = `rgb(159, 59, 34)`;
const green = `rgb(119, 221, 119)`;

module.exports = {
  animations: {
    defaultDuration: `1s`,
    fast: `0.5s`,
  },

  fonts: {
    headerFontFamily: `Rosario`,
    bodyFontFamily: `Crimson Text`,

    baseSize: `28px`,
    scale: 1.5,
  },

  colors: {
    white,
    black,
    gray,

    normal: gray,
    error: red,
    success: green,

    foreground: black,
    background: diamond,

    link: cyanCornflowerBlue,

    shadow: color(black).fade(0.75).rgb().string(),

    diamond,
    cyanCornflowerBlue,
    mayaBlue,
    brilliantAzure,
  },

  content: {
    maxWidthPx: 1000,
    imageMaxWidthPx: 800,
  },
};
