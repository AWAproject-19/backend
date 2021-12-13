const db = require('../database');

const login={
  CheckLogin: function(Username, callback) {
      return db.query('SELECT CustomerID, Password FROM Customer WHERE Username = ?',[Username], callback); 
    }
};
          
module.exports = login;