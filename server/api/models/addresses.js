const db = require ('../dbConfig')

class Addresses {
    constructor(data){
        this.id = data.id
        this.postcode = data.postcode
        this.street = data.street
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const addressesData = await db.query(`SELECT * FROM addresses;`)
                const addresses = addressesData.rows.map(d => new Addresses(d))
                resolve(addresses);
            } catch (err) {
                reject("Error retrieving addresses")
            }
        })
    }
}

module.exports = Addresses;