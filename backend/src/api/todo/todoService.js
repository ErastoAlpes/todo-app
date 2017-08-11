const Todo = require('./todo')

//API rest padrao
Todo.methods(['get', 'post', 'put', 'delete'])
//retorna sempre o valor novo atualizado na hora que é feito o PUT
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo