const restful = require('node-restful')
const mongoose = restful.mongoose


/**
 * Como se fosse a DDL da tabela do banco de dados - nomes do campo em ingles
 */
const todoSchema = new mongoose.Schema({
    //param1(campo1)
    description: {//descricao da tarefa
        type: String, 
        required: true
    },
    //param2(campo2)
    done:{//status da tarefa
        type: Boolean, 
        required: true, 
        default: false
    },
    //param3(campo3)
    createdAt: {//data de criacao da tarefa
        type: Date, 
        default: Date.now
    }
})
//saída do módulo
module.exports = restful.model('Todo', todoSchema)