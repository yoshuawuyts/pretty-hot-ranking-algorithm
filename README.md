# pretty-hot-ranking-algorithm [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Algorithm that measures how relevant a given data set is, kinda like Reddit

Doesn't do any jitter stuff and can probably be gamed if you try hard enough,
but it should be useful enough if you want to wire up community-driven news
site that always has fresh, relevant content for people to discover.

## Usage
```js
var rank = require('pretty-hot-ranking-algorithm')

var start = new Date(20, 2, 2006)
var upvotes = 15
var downvotes = 4
var date = new Date()

var itemRank = rank(upvotes, downvotes, date, start)
```

## API
### `itemRank = rank(upvotes, downvotes, date, start)`
Generate an item rank based off upvotes, downvotes and the current date. The
last argument is the time of the first post, generally this should be close to
when the server first goes live.

## See Also
- [How the reddit ranking algorithm works](https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/pretty-hot-ranking-algorithm.svg?style=flat-square
[3]: https://npmjs.org/package/pretty-hot-ranking-algorithm
[4]: https://img.shields.io/travis/yoshuawuyts/pretty-hot-ranking-algorithm/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/pretty-hot-ranking-algorithm
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/pretty-hot-ranking-algorithm/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/pretty-hot-ranking-algorithm
[8]: http://img.shields.io/npm/dm/pretty-hot-ranking-algorithm.svg?style=flat-square
[9]: https://npmjs.org/package/pretty-hot-ranking-algorithm
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
