const db = require('../database');

const foodMenu = {
  getById: function(id, callback) {
    return db.query('SELECT * FROM foodMenu WHERE RestaurantID=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('SELECT * FROM foodMenu', callback);
  },
  add: function(foodMenu, callback) {
    return db.query(
      'INSERT INTO FoodMenu (ProductName, Price, RestaurantID) values(?,?,?)',
      [foodMenu.ProductName, foodMenu.Price, foodMenu.RestaurantID],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM foodMenu WHERE foodMenuID = ?', [id], callback);
  },
  update: function(id, foodMenu, callback) {
    return db.query(
      'UPDATE FoodMenu SET ProductName = ?, Price = ? WHERE FoodMenuID=?',
      [foodMenu.ProductName, foodMenu.Price, id],
      callback
    );
  }
};
module.exports = foodMenu;