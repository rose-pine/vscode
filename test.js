const test = require("ava").default;
const baseTheme = require("./themes/rose-pine-color-theme.json");

let prefix = "_";

function checkForValue(json, value) {
  for (let key in json) {
    if (typeof json[key] === "object") {
      return checkForValue(json[key], value);
    } else if (json[key].includes("[object Object]")) {
      return `Color has invalid value\n{ "${key}": "${json[key]}" }`;
    } else if (json[key].includes(value)) {
      return `Color was not formatted\n{ "${key}": "${json[key]}" }`;
    } else if (json[key].includes("#ff0000")) {
      return `Color has default value\nThis usually occurs when a color is not formatted\n{ "${key}": "${json[key]}" }`;
    }
  }
  return false;
}

test("generated themes are complete", (t) => {
  let x = checkForValue(baseTheme, prefix);
  if (x) {
    t.fail(x);
  }
  t.pass();
});
