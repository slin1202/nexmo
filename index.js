var Express = require('express')

let app = Express()

app.get('/incoming-sms', (req, res) => {
  console.log(req.query)
  res.sendStatus(200)
})

app.listen(process.env.PORT || 3000)