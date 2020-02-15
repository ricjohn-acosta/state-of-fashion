const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

const url = 'https://api.pushshift.io/reddit/submission/search/?subreddit=streetwear'
router.get('/images', (req, res) => {
  for (var i = 0; i < 10; i++) {
    let day = 0
    request.get(`${url}&after=${1}d`).then(data => res.json(data))
    // .end((err, result) => {
    //   if (err) {
    //     res.status(500).send(err.message)
    //   } else {
    //     res.json(result.body.data[0].created_utc)
    //   }
    // })
  }
})

module.exports = router
