const db = require('../database');

const orders = {
  getById: function(id, callback) {
    return db.query('SELECT * FROM Orders WHERE RestaurantID=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('SELECT * FROM Orders', callback);
  },
  add: function(orders, callback) {
    return db.query(
      'INSERT INTO Orders (Product, Address, Price, Status) values(?,?,?)',
      [orders.ProductName, orders.Price, orders.RestaurantID],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM Orders WHERE OrdersID = ?', [id], callback);
  },
  update: function(id, orders, callback) {
    return db.query(
      'UPDATE Orders SET Status = ? WHERE OrdersID=?',
      [orders.Status, id],
      callback
    );
  }
};
module.exports = orders;