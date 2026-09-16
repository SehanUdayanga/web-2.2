const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const db = client.db("student");

        const collection = db.collection("student");

        const firstStudent = await collection.findOne();

        console.log(firstStudent);

    } finally {
        await client.close();
    }
}

run().catch(console.error);
