//MONGODB ----------------------------------------------
//MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents
//It's designed for scalability, performance, and ease of development

//KEY CONCEPTS---------------------------
//Database: Container for collections (like a folder)
//Collection: Group of documents (like a table in SQL)
//Document: Individual record stored as BSON (like a row in SQL)
//Field: Key-value pair in a document (like a JSON)

//BSON - Binary JSON -----------------
//Similar to JSON but typed. mongoDB documents are typed.

//DOCUMENT STRUCTURE---------------------------
//Documents are stored in BSON format (Binary JSON)
//Example document:
//{
//  _id: ObjectId("507f1f77bcf86cd799439011"),
//  name: "John Doe",
//  email: "john@gmail.com",
//  age: 30,
//  hobbies: ["reading", "coding"],
//  address: {
//    street: "123 Main St",
//    city: "New York"
//  }
//}

//MONGODB VS SQL---------------------------
//MongoDB (NoSQL)          |  SQL Database
//Database                 |  Database
//Collection               |  Table
//Document                 |  Row
//Field                    |  Column
//No fixed schema          |  Fixed schema
//Horizontal scaling       |  Vertical scaling

//REPL - Read Eval Print Loop
//Interactive shell for MongoDB where you can run commands and see results immediately


//MONGODB SERVER COMMANDS---------------------------
//Start MongoDB Server:
//mongod                           // Start with default settings
//mongod --port 27017              // Start on specific port
//mongod --dbpath /data/db         // Specify database path
//mongod --config /etc/mongod.conf // Start with config file
//OR---------------------------------
//net start MongoDB


//Stop MongoDB Server:
//mongod --shutdown                // Graceful shutdown
//Ctrl + C                         // Force stop
//OR-----------------------------------
//net stop MongoDB

//MONGODB SHELL COMMANDS---------------------------
//Connect to MongoDB:
//mongo                            // Connect to localhost:27017
//mongo --port 27018               // Connect to specific port
//mongo "mongodb://localhost:27017/mydb" // Connect to specific database
//OR------------------------------------
//mongosh

//Exit Shell:
//exit                             // or Ctrl + C

//SHELL NAVIGATION---------------------------
//show dbs                         // List all databases
//use myDatabase                   // Switch to/create database
//db                               // Show current database
//show collections                 // List collections in current db
//db.stats()                       // Database statistics
//db.version()                     // MongoDB version

//DATABASE OPERATIONS---------------------------
//db.createCollection("users")     // Create collection
//db.users.drop()                  // Delete collection
//db.dropDatabase()                // Delete current database

//ADMINISTRATIVE COMMANDS---------------------------
//db.serverStatus()                // Server status and stats
//db.runCommand({ping: 1})         // Test connection
//db.adminCommand("listCollections") // List all collections
//db.currentOp()                   // Show current operations
//db.killOp(opId)                  // Kill specific operation

//MONGODB SERVICE COMMANDS (Windows)---------------------------
//net start MongoDB               // Start MongoDB service
//net stop MongoDB                // Stop MongoDB service
//sc query MongoDB                // Check service status

//MONGODB SERVICE COMMANDS (Linux/Mac)---------------------------
//sudo systemctl start mongod     // Start MongoDB service
//sudo systemctl stop mongod      // Stop MongoDB service
//sudo systemctl status mongod    // Check service status
//sudo systemctl enable mongod    // Enable auto-start

//CONFIGURATION---------------------------
//Default port: 27017
//Default data directory: /data/db (Linux/Mac), C:\data\db (Windows)
//Config file location: /etc/mongod.conf (Linux), C:\Program Files\MongoDB\Server\bin\mongod.cfg (Windows)

//USEFUL SHELL HELPERS---------------------------
//help                             // Show help
//db.help()                        // Database methods help
//db.collection.help()             // Collection methods help
//cls                              // Clear screen
//load("script.js")                // Execute JavaScript file

