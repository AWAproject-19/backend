const db = require('../database');

const orders = {
  getById: function(id, callback) {
    return db.query('SELECT * FROM Orders WHERE CustomerID=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('SELECT * FROM Orders', callback);
  },
  add: function(orders, callback) {
    return db.query(
      'INSERT INTO Orders (Product, Address, Price, Status, RestaurantID, CustomerID) values(?,?,?,"Received",?,?)',
      [orders.Product, orders.Address, orders.Price, orders.RestaurantID, orders.CustomerID],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM Orders WHERE OrdersID = ?', [id], callback);
  },
  update: function(id, orders, callback) {
    return db.query(
      'UPDATE Orders SET ProductName = ?, Price = ? WHERE OrdersID=?',
      [orders.ProductName, orders.Price, id],
      callback
    );
  }
};
module.exports = orders;