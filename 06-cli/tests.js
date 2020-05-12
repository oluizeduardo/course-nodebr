const {
    deepEqual,
    ok
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CREATE = {
    name: 'Flash',
    power: 'Speed',
    id: 1
}

describe('Suit with manipulation of Heroes.', () => {
    it('It must create a hero using file.', async () => {
        const expected = DEFAULT_ITEM_CREATE
        const result = await database.list(expected.id)

        ok(result, expected)
    })
})