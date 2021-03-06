const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

const url = 'https://api.pushshift.io/reddit/submission/search/?subreddit=streetwear'
const responses = [
  request.get(`${url}&after=${1}d`)
  
]


router.get('/images', (req, res) => {
  // Promise.all(responses).then(data => console.log(data))
  return request.get(url)
    .then(response => res.json(response.body.data))
})


module.exports = router
