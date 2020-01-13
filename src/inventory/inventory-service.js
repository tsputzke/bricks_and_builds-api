const inventoryService = {
  getInventory(knex) {
    return knex.select('*').from('inventory')
  },
  addItem(db, newItem) {
    return db 
      .insert(newItem)
      .into('inventory')
  },
  deleteItem(knex, id) {
    return knex('inventory')
      .where('inventory_id', id)
      .delete()
  },
  itemsByUser(knex, id) {
    return knex.from('inventory').select('*').where('user_id', id)
  },
}

module.exports = inventoryService