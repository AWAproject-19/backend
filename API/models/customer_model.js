const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;

const customer = {
  getById: function(id, callback) {
    return db.query('select Balance from customer where customerID=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from customer', callback);
  },
  add: function(customer, callback) {
    bcrypt.hash(customer.Password, saltRounds, function(err, hash) {
    return db.query(
      'INSERT INTO Customer (Username, Password, Money) values(?,?,?)',
      [customer.Username, hash, customer.Money],
      callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from customer where customerID = ?', [id], callback);
  },
  update: function(id, customer, callback) {
    return db.query(
      'update customer set customerNum=?,Balance=? where customerID=?',
      [customer.customerNum, customer.Balance, id],
      callback
    );
  }
};
module.exports = customer;