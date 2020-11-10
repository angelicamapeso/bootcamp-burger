const orm = require('../config/orm');

class Burger {
  constructor({burger_name, devoured = false}) {
    if (burger_name.length <= 75) {
      this.burger_name = burger_name;
    } else {
      throw new Error('Burger name is too long. (Max character length: 75)');
    }
    this.devoured = devoured;
  }

  updateDevoured() {
    this.devoured = !this.devoured;
    return this;
  }

  async insertBurger() {
    return await orm.insertOne('burgers', this);
  }

  async updateBurger(id) {
    return await orm.updateOne('burgers', this, {id});
  }

  static async selectAll() {
    return await orm.selectAll('burgers');
  }

  static async findBurger(id) {
    const rows = await orm.findById('burgers', id);

    let burger = null;
    if (rows) {
      burger = new Burger(rows[0]);
      burger.id = id;
    }

    return burger;
  }
}

module.exports = Burger;