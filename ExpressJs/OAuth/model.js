let db = require('./db.js')

const getClient = (clientId, clientSecret) => {
  let confidentialClients = db.confidentialClients.filter((client) -> {
    return client.clientId === client.clientId && client.clientSecret
  })
  return confidentialClients[0]
}

module.exports = {
  getClient:getClient
}
