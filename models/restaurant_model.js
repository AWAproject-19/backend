const db = require('../database');

const restaurant = {
  getById: function(id, callback) {
    return db.query('SELECT * FROM restaurant WHERE ManagerID=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('SELECT * FROM restaurant', callback);
  },
  add: function(restaurant, callback) {
    return db.query(
      'INSERT INTO restaurant (Name, Address, OperatingHours, Type, PriceLevel, ManagerID) values(?,?,?,?,?,?)',
      [restaurant.Name, restaurant.Address, restaurant.OperatingHours, restaurant.Type, restaurant.PriceLevel, restaurant.ManagerID],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM restaurant WHERE restaurantID = ?', [id], callback);
  },
  update: function(id, restaurant, callback) {
    return db.query(
      'UPDATE restaurant SET Name = ?, Address = ?, OperatingHours = ?, Type = ?, PriceLevel = ? WHERE RestaurantID=?',
      [restaurant.Name, restaurant.Address, restaurant.OperatingHours, restaurant.Type, restaurant.PriceLevel, id],
      callback
    );
  }
};
module.exports = restaurant;