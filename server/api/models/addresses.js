const db = require ('../dbConfig')

const db = require ('../dbConfig')

class Neighbourhood {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.age = data.age
        this.household_number = data.household_number
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const neighbourhoodData = await db.query(`SELECT * FROM neighbourhood;`)
                const neighbourhood = neighbourhoodData.rows.map(d => new Neighbourhood(d))
                resolve(neighbourhood);
            } catch (err) {
                reject("Error retrieving neighbourhood")
            }
        })
    }
}

module.exports = Neighbourhood;