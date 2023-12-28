let db = require("./db.js");

const getClient = (clientId, clientSecret) => {
  let confidentialClients = db.confidentialClients.filter((client) => {
    return client.clientId === clientId && client.clientSecret === clientSecret;
  });
  return confidentialClients[0];
};

const saveToken = (token, client, user) => {
  token.client = {
    id: client.clientId,
  };
  token.user = {
    username: user.username,
  };
  db.tokens.push(token);
  return token;
};
module.exports = {
  getClient: getClient,
  saveToken: saveToken,
};
