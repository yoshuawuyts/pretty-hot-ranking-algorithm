var tape = require('tape')

var rank = require('./')

tape('should rank stuff', function (t) {
  var start = new Date(1, 12, 2000)
  var a, b

  a = rank(1, 3, new Date(12, 12, 2000), start)
  b = rank(5, 1, new Date(12, 12, 2000), start)
  t.ok(b > a, 'larger')

  a = rank(2, 0, new Date(1, 12, 2000), start)
  b = rank(1, 0, new Date(1, 12, 2000), start)
  t.ok(a > b, 'larger')

  a = rank(1, 0, new Date(1, 12, 2000), start)
  b = rank(1, 1, new Date(1, 12, 2000), start)
  t.ok(a === b, 'single downvote is not disastrous')

  t.end()
})
