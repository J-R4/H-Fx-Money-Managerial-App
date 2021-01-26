//@ts-check
const express = require('express')
const app = express()

const port = 3000
const router = require('./routes')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(express.json()) // untuk baca body json (req.body)
app.use(router)

app.listen(port, () => {
    console.log(`running on port ${port}`)
})