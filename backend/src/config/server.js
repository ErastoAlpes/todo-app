const port = 30033

const bodyParser = require('body-parser')//fazer o parser do corpo da requisicao(json, form, etc...)
const express = require('express')
const server = express()
const allowCors = require('./cors')

 /**************** Aqui estao os Middles ********************************/
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
/********************************************************************** */
server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server