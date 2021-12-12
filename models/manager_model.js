const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;

const manager = {
  getById: function(id, callback) {
    return db.query('SELECT * FROM manager WHERE managerID=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('SELECT * FROM manager', callback);
  },
  add: function(manager, callback) {
    bcrypt.hash(manager.Password, saltRounds, function(err, hash) {
    return db.query(
      'INSERT INTO manager (Username, Password) values(?,?)',
      [manager.Username, hash],
      callback);
    });
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM manager WHERE managerID = ?', [id], callback);
  },
  update: function(id, manager, callback) {
    bcrypt.hash(manager.Password, saltRounds, function(err, hash){
    return db.query(
      'UPDATE manager SET Password=? WHERE managerID=?',
      [hash, id],
      callback);
    });
  }
};
module.exports = manager;