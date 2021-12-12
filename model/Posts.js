const MongoClient = require('mongodb').MongoClient;



module.exports = class Posts {
    static async find() {        
        const conn = await MongoClient.connect('mongodb://db/netflixdb');
        const db = conn.db();
        return await db.collection('posts').find().toArray();

    }
}