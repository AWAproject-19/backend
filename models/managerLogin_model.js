const db = require('../database');

const login={
  CheckLogin: function(Username, callback) {
      return db.query('SELECT ManagerID, Password FROM Manager WHERE Username = ?',[Username], callback); 
    }
};
          
module.exports = login;