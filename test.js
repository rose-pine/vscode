const test = require('ava').default
const baseTheme = require('./themes/rose-pine-color-theme.json')
const moonTheme = require('./themes/rose-pine-moon-color-theme.json')
const dawnTheme = require('./themes/rose-pine-dawn-color-theme.json')

let prefix = '_'

function checkForValue(json, value) {
  for (let key in json) {
    if (typeof json[key] === 'object') {
      return checkForValue(json[key], value)
    } else if (json[key].includes(value)) {
      return `Theme file contains \`${value}\` in value for ${key}`
    } else if (json[key].includes('#ff0000')) {
      return `Theme file contains default hex code \`#ff0000\` in value for ${key}`
    }
  }
  return false
}

test('generated themes are complete', (t) => {
  let x = checkForValue(baseTheme, prefix)
  if (x) {
    t.fail(x)
  }
  t.pass()
})
