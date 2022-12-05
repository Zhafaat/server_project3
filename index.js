const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middleware/errorHandler')


app.use(cors())

const port = 3000
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(routes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

