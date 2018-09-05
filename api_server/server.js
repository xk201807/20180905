const express = require('express')

const bodyParser = require('body-parser')


const app = express()
const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))

const router = require('./router.js')
app.use(router)

app.listen(5003,()=>{
    console.log('api is server on http://127.0.0.1:5003')
})
