const express = require('express')//pegando a referencia do express

module.exports = function(server){
    //API routers
    const router = express.Router()
    server.use('/api', router)

    //TODO Router
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}
