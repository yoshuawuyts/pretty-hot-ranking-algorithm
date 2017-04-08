var assert = require('assert')

var HALF_LIFE = 45000 // 12.5 hours

module.exports = rank

function rank (upvotes, downvotes, date, start) {
  assert.equal(typeof upvotes, 'number', 'rank: upvotes should be type number')
  assert.equal(typeof downvotes, 'number', 'rank: downvotes should be type number')
  assert.ok(date instanceof Date, 'rank: date should be an instance of Date')
  assert.ok(start instanceof Date, 'rank: start should be an instance of Date')

  var seconds = (date.getTime() - start.getTime()) / 1000
  var score = upvotes - downvotes
  var order = Math.log(Math.max(score, 1), 10)
  var sign = score > 0 ? 1 : score === 0 ? 0 : -1
  return Math.round(sign * order + seconds / HALF_LIFE, 7)
}
