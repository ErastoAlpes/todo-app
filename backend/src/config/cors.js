/**
 ******************** MIDDLE*************************
 vai garantir que requisicoes pra deteminadaos webservices da minha aplicacao
 possa vir de origens diferentes
 * Param: requisicao, resposta e next(proxima 'operacao?')
 */

module.exports = function(req, res, next) {
    /**
     * adicionando os cabecalhos na resposta que será enviada para o browser
     * para 'dizer' que é possivel acessar esse servicos
     */ 
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
    
}