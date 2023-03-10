let  express = require('express')
let  router = express.Router()

router.get('/', async  function(req, res, next) {
  let data = {
    message: 'Some useful government service',
    layout:  'layout.njk',
    title: 'A Web Page'
  }

  res.render('index.njk', data)
})

module.exports = router
