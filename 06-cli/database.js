const{
    readFile
} = require('fs')

const {
    promisify
} = require('util')

// Transforming readFile in a Promise.
const readFileAsync = promisify(readFile)

class Database{

    constructor(){
        this.FILE_NAME = 'heroes.json'
    }

    async readFile(){
        const file = await readFileAsync(this.FILE_NAME, 'utf8')
        return JSON.parse(file.toString())
    }

    writeFile(){

    }

    async list(id){
        const result = await this.readFile()
        // Returns the item with the same id if the parameter isn't null.
        // Returns the full list if the parameter is null.
        const filteredData = result.filter(item => (id ? (item.id === id) : true))    
        return filteredData
    }
}

module.exports = new Database()