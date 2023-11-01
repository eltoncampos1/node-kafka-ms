export default class ImMemoryRepository {
  #items = []
  create (item) {
    this.#items.push(item)
    return item
  }

  delete (id) {
    const index = this.#items.findIndex(item => item.id === id)

    return this.#items.splice(index, 1)
  }

  findById (id) {
    return this.#items.find(item => item.id === id)
  }

  findByEmail (email) {
    return this.#items.find(item => item.email === email)
  }

  findAll () {
    return this.#items
  }
}
