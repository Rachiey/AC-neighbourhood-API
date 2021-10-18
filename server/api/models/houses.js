const db = require ('../dbConfig')

class Houses {
    constructor(data){
        this.id = data.id
        this.address = data.address
        this.owner_id = data.owner_id
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const housesData = await db.query(`SELECT * FROM houses;`)
                const houses = housesData.rows.map(d => new Houses(d))
                resolve(houses);
            } catch (err) {
                reject("Error retrieving houses")
            }
        })
    }
}

module.exports = Houses;