const { numberOfInvalidParentheses } = require('./invalid-parentheses')

describe('numberOfInvalidParentheses', () => {
  it('returns 0 for an empty string', () => {
    expect(numberOfInvalidParentheses('')).toEqual(0)
  })
  it('returns 1 for for expression "()())()"', () => {
    expect(numberOfInvalidParentheses('()())()')).toEqual(1)
  })
  it('returns 2 for for expression ")("', () => {
    expect(numberOfInvalidParentheses(')(')).toEqual(2)
  })
})