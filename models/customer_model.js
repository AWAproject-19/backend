const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;

const customer = {
  getById: function(id, callback) {
    return db.query('SELECT * FROM Customer WHERE customerID=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('SELECT * FROM Customer', callback);
  },
  add: function(customer, callback) {
    bcrypt.hash(customer.Password, saltRounds, function(err, hash) {
    return db.query(
      'INSERT INTO Customer (Username, Password, Money) values(?,?,5000)',
      [customer.Username, hash],
      callback);
    });
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM Customer WHERE CustomerID = ?', [id], callback);
  },
  update: function(id, customer, callback) {
    bcrypt.hash(customer.Password, saltRounds, function(err, hash){
    return db.query(
      'UPDATE Customer SET Password=? WHERE CustomerID=?',
      [hash, id],
      callback);
    });
  }
};
module.exports = customer;