const { loadRandomColor, SETTINGS } = require("./lib/promiseFunctions");

// Your code...

SETTINGS.RANDOM_COLOR_FAIL_CHANCE = 0.25;

const loadAndPrintColor = () => {
  return loadRandomColor().then((color) => {
    console.log(color);
  });
};

loadAndPrintColor()
  .then(loadAndPrintColor)
  .then(loadAndPrintColor)
  .then(loadAndPrintColor)
  .then(loadAndPrintColor);
