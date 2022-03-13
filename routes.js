const routes = require('next-routes-extended')

module.exports = routes()
.add('show', '/scrt/show/:name/:prn/:tokensCount/:account/:trnnum', '/scrt/show')
.add('gasEstimate', '/scrt/gasEstimate/:name/:prn/:tokensCount/:account/:trnnum', '/scrt/gasEstimate');

