const postcss = require('postcss')

const plugin = require('../src')

const UAProperties = require('../src/properties')
const UAValues = require('../src/values')

// eslint-disable-next-line no-unused-vars
async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

const getRandomValue = () => {
  // return random ukrainian values key: value pair
  const valueIndex = Math.floor(Math.random() * Object.entries(UAValues).length) + 1
  return { vKey: Object.keys(UAValues)[valueIndex], vValue: Object.values(UAValues)[valueIndex] } 
}

describe('postcss-ukrainian-stylesheets', () => {
  it('converts ukrainian properties to english', () => {
    for (const [key, value] of Object.entries(UAProperties)) {
      run(`span{${value}: none;}`, `span{${key}: none;}`)
    }
  })

  it('converts ukrainian values to english', () => {
    for (const [key, value] of Object.entries(UAValues)) {
      run(`span{background-color: ${value};}`, `span{background-color: ${key};}`)
    }
  })

  it('converts ukrainian property: value !важливо to english property: value !important', () => {
    for (const [pKey, pValue] of Object.entries(UAProperties)) {
      const { vKey, vValue } = getRandomValue()
      run(`span{${pValue}: ${vValue} !важливо;}`, `span{${pKey}: ${vKey} !important;}`)
    }
  })
})
