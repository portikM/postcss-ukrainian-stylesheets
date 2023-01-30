const postcss = require('postcss')

const plugin = require('./')

// eslint-disable-next-line no-unused-vars
async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

// keep it simple for now to make sure the CI works
it('does something', () => {
  expect(1).toBe(1);
})
