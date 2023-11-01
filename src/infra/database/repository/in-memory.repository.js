export default class ImMemoryRepository {
  #items = []
  create (item) {
    this.#items.push(item)
    return item
  }

  findById (id) {
    return this.#items.find(item => item.id === id)
  }

  findByEmail (email) {
    return this.#items.find(item => item.email === email)
  }
}
