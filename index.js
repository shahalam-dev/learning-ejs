const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

let plArr = []

app.get('/', (req, res) => {
  res.render('index', {plArr})
})

app.post('/', (req, res) => {
  const programmingL = req.body.pl;
  plArr.push(programmingL)
  res.redirect('/')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})