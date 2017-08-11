const server = require('./config/server')
require('./config/database')
/**
 * passando o 'server' como parametro
 * e o 'server' recebe o retorno de uma funcao
 */
require('./config/routes') (server)