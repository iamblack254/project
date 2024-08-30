const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB connection string
const uri = "mongodb+srv://iamblack254:<uSP68mZnQ9qMhjC3>@micheal.gfibq.mongodb.net/?retryWrites=true&w=majority&tls=true&appName=micheal";

const client = new MongoClient(uri, { tls: true });

async function run() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        console.log("Connected successfully to MongoDB!");

        // Access the database you want to use (replace 'mydatabase' with your database name)
        const database = client.db('mydatabase');
        
        // Access a collection (replace 'mycollection' with your collection name)
        const collection = database.collection('mycollection');

        // Example operation: Find a document
        const document = await collection.findOne({});
        console.log("Found document:", document);

    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    } finally {
        // Close the connection
        await client.close();
    }
}

run().catch(console.dir);


