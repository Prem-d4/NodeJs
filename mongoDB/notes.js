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

//JSON vs BSON---------------------
//JSON (JavaScript Object Notation)
//- Text-based data format
//- Human readable
//- Lightweight for data exchange
//- Limited data types: string, number, boolean, null, object, array
//- No date or binary data support
//- Slower parsing (text to object conversion)
//- Used for APIs, web communication

//Example JSON:
//{
//  "name": "John",
//  "age": 30,
//  "active": true,
//  "hobbies": ["reading", "coding"]
//}

//BSON (Binary JSON)
//- Binary-encoded serialization format
//- Not human readable (binary format)
//- More storage efficient for large datasets
//- Extended data types: ObjectId, Date, Binary, Decimal128, etc.
//- Native support for dates and binary data
//- Faster parsing (binary to object conversion)
//- Used internally by MongoDB

//Example BSON (conceptual representation):
//{
//  _id: ObjectId("507f1f77bcf86cd799439011"),
//  name: "John",
//  age: NumberInt(30),
//  createdAt: ISODate("2023-10-01T12:00:00Z"),
//  active: true,
//  profilePic: BinData(0, "base64encodeddata...")
//}

//KEY DIFFERENCES---------------------------
//Data Types:
//JSON: string, number, boolean, null, object, array
//BSON: All JSON types + ObjectId, Date, Binary, Decimal128, Int32, Int64, etc.

//Size:
//JSON: Smaller for simple data (text format)
//BSON: Larger due to type information but more efficient for complex data

//Performance:
//JSON: Slower parsing (string parsing)
//BSON: Faster parsing (binary format)

//Usage:
//JSON: Web APIs, configuration files, data exchange
//BSON: MongoDB storage, internal database operations

//BSON SPECIFIC DATA TYPES---------------------------
//ObjectId: 12-byte unique identifier
//Date: UTC datetime
//Binary: Binary data (images, files)
//Decimal128: High precision decimal numbers
//NumberInt: 32-bit integer
//NumberLong: 64-bit integer
//Timestamp: Internal MongoDB timestamp
//Code: JavaScript code
//MinKey/MaxKey: Special comparison values

//CONVERSION---------------------------
//MongoDB automatically converts:
//JSON → BSON (when inserting documents)
//BSON → JSON (when querying documents)
//This happens transparently to the developer


//CRUD OPERATIONS & MONGODB ---------------------- 
//Application --------
//Node.js apps use MongoDB drivers (mongoose, native driver) to perform CRUD operations
//Express.js APIs handle HTTP requests and translate them to MongoDB operations
//Web applications interact with MongoDB through application layer

//Analytics / BI Tools --------
//MongoDB Compass - GUI for data visualization and analysis
//MongoDB Charts - Create dashboards and visualizations
//Third-party tools: Tableau, Power BI, Grafana
//Aggregation pipelines for complex data analysis

//Admin --------
//Database administrators use MongoDB shell, Compass, or Ops Manager
//User management, indexing, performance monitoring
//Backup, restore, and maintenance operations


//CREATE ----------------
//insertOne() - Insert single document 
    //Example: 
        //db.users.insertOne({
        //  name: "John Doe",
        //  email: "john@gmail.com",
        //  age: 30
        //})
//insertMany() - Insert multiple documents (by array)
    //Example :
        //db.users.insertMany([
        //  {name: "Alice", email: "alice@gmail.com", age: 25},
        //  {name: "Bob", email: "bob@gmail.com", age: 35}
        //])

//READ --------------
//find() - Find multiple documents
    //Example:
        //db.users.find()                          // Find all
        //db.users.find({age: 30})                 // Find with condition
//findOne() - Find single document
    //Example:
        //db.users.findOne({email: "john@gmail.com"})

//UPDATE -------------
//updateOne() - Update single document
    //Example:
        //db.users.updateOne(
        //  {email: "john@gmail.com"},              // Filter
        //  {$set: {age: 31}}                       // Update
        //)
//updateMany() - Update multiple documents
    //Example:
        //db.users.updateMany(
        //  {age: 20},                              // Filter ({} - update all)
        //  {$set: {status: "young"}}               // Update
        //)

//DELETE -------------
//deleteOne() - Delete single document
    //Example:
        //db.users.deleteOne({email: "john@gmail.com"})
//deleteMany() - Delete multiple document
    //Example:
        //db.users.deleteMany({age: 18})     // Delete all has 18 ({} - delete all )

//COMPARISON OPERATORS (Query Operators)-----------------------------------
//$eq - equal to
//db.users.find({age: {$eq: 25}})
//$ne - not equal
//db.users.find({age: {$ne: 30}})
//$gt - greater than
//db.users.find({age: {$gt: 18}})
//$gte - greater than or equal
//db.users.find({age: {$gte: 18}})
//$lt - less than
//db.users.find({age: {$lt: 65}})
//$lte - less than or equal
//db.users.find({age: {$lte: 30}})
//$in - matches any value in array
//db.users.find({age: {$in: [25, 30, 35]}})
//$nin - not in array
//db.users.find({age: {$nin: [25, 30]}})

//LOGICAL OPERATORS--------------------------------------------------------
//$and - all conditions must be true
//db.users.find({$and: [{age: {$gt: 18}}, {age: {$lt: 65}}]})
//$or - at least one condition must be true
//db.users.find({$or: [{age: 25}, {name: "John"}]})
//$not - inverts the effect of query expression
//db.users.find({age: {$not: {$gt: 30}}})
//$nor - none of the conditions should be true
//db.users.find({$nor: [{age: 25}, {name: "John"}]})

//ELEMENT OPERATORS----------------------------------------------------------
//$exists - field exists or not
//db.users.find({email: {$exists: true}})      //(true for exists - false for not exists)
//$type - field is of specific type
//db.users.find({age: {$type: "number"}})

//ARRAY OPERATORS--------------------------------------------------------------

//1. $all - Array must contain ALL specified elements
//Find users who have BOTH "Java" AND "Spring" skills:
//db.user.find({skills: {$all: ["Java", "Spring"]}})
//Result: Alice Smith, Bob Johnson (both have Java AND Spring)
//Find users who have BOTH "JavaScript" AND "MongoDB" skills:
//db.user.find({skills: {$all: ["JavaScript", "MongoDB"]}})
//Result: John Doe (has both JavaScript AND MongoDB)

//2. $size - Array has exact number of elements
//Find users with exactly 3 skills:
//db.user.find({skills: {$size: 3}})
//Result: John Doe (JavaScript, Python, MongoDB = 3 skills)
//        Alice Smith (Java, Spring, Docker = 3 skills)
//        Carol Davis (Photoshop, Illustrator, Figma = 3 skills)
//Find users with exactly 4 skills:
//db.user.find({skills: {$size: 4}})
//Result: Bob Johnson (Java, Spring, Docker, Kubernetes = 4 skills)
//Find users with exactly 2 projects:
//db.user.find({projects: {$size: 2}})
//Result: John Doe, Alice Smith, Bob Johnson (all have 2 projects)

//3. $elemMatch - For arrays of objects (complex conditions)
//Find users with projects that are "ongoing" AND score > 90:
//db.user.find({projects: {$elemMatch: {status: "ongoing", score: {$gt: 90}}}})
//Result: John Doe (Project B: ongoing + score 92)
//        Carol Davis (UI Redesign: ongoing + score 91)
//Find users with completed projects scoring exactly 88:
//db.user.find({projects: {$elemMatch: {status: "completed", score: 88}}})
//Result: Alice Smith (Campaign X: completed + score 88)

//DIFFERENCE BETWEEN REGULAR QUERY vs $elemMatch---------------------------
//Regular query (can match different array elements):
//db.user.find({"projects.status": "ongoing", "projects.score": {$gt: 90}})
//This could match a user where:
//- One project is "ongoing" (score could be low)
//- Different project has score > 90 (status could be completed)

//$elemMatch (must match SAME array element):
//db.user.find({projects: {$elemMatch: {status: "ongoing", score: {$gt: 90}}}})
//This only matches users where the SAME project is both ongoing AND score > 90

//MORE EXAMPLES WITH YOUR DATA---------------------------
//Simple array values (skills):
//db.user.find({skills: "JavaScript"}) // Contains JavaScript
//db.user.find({skills: {$in: ["Python", "Java"]}}) // Contains Python OR Java

//Array of objects (projects):
//db.user.find({"projects.status": "ongoing"}) // Any project is ongoing
//db.user.find({"projects.name": "Project A"}) // Any project named "Project A"

//STRING/REGEX OPERATORS-----------------------------------------------------------
//$regex - pattern matching
//db.users.find({name: {$regex: "^J"}}) // starts with J
//$text - text search (requires text index)
//db.users.find({$text: {$search: "john"}})

//STRING/REGEX OPERATORS---------------------------
//$regex - pattern matching
//db.users.find({name: {$regex: "^J"}}) // starts with J
//$text - text search (requires text index)
//db.users.find({$text: {$search: "john"}})

//REGEX PATTERNS EXPLAINED---------------------------

//BASIC PATTERNS:
//^ - Start of string
//db.user.find({name: {$regex: "^J"}}) // Names starting with "J"
//Result: John Doe

//$ - End of string  
//db.user.find({email: {$regex: "@gmail.com$"}}) // Emails ending with @gmail.com
//Result: All users (john@gmail.com, alice@gmail.com, etc.)

//. - Any single character
//db.user.find({name: {$regex: "B.b"}}) // "Bob", "Bab", "Bib", etc.
//Result: Bob Johnson
//MORE DOT EXAMPLES:
//Find 3-letter names starting with J:
//db.user.find({name: {$regex: "^J.."}}) // J + any + any
//Matches: "Joe", "Jim", "Jan", etc.
//Find emails with 4-character username:
//db.user.find({email: {$regex: "^....@"}}) // any + any + any + any + @
//Matches: "john@gmail.com", "test@yahoo.com"
//Find names with pattern A_ice (A + any character + ice):
//db.user.find({name: {$regex: "A.ice"}})
//Matches: "Alice" (A + l + ice)
//IMPORTANT NOTES:
//Dot matches ANY character including:
//- Letters: a, b, c, A, B, C
//- Numbers: 1, 2, 3
//- Symbols: @, #, $, %, space
//- Special chars: !, ?, -

//CASE SENSITIVITY:
//Case sensitive (default):
//db.user.find({name: {$regex: "^j"}}) // No results (lowercase j)

//Case insensitive:
//db.user.find({name: {$regex: "^j", $options: "i"}}) // Finds "John"
//OR
//db.user.find({name: {$regex: /^j/i}}) // JavaScript regex syntax

//COMMON PATTERNS:
//Contains substring:
//db.user.find({name: {$regex: "John"}}) // Contains "John"
//db.user.find({department: {$regex: "ing"}}) // Contains "ing" (Engineering, Marketing)

//Starts with:
//db.user.find({name: {$regex: "^A"}}) // Alice Smith
//db.user.find({department: {$regex: "^E"}}) // Engineering department

//Ends with:
//db.user.find({name: {$regex: "son$"}}) // Bob Johnson
//db.user.find({email: {$regex: "gmail.com$"}}) // Gmail users

//Multiple characters:
//db.user.find({name: {$regex: "^[ABC]"}}) // Starts with A, B, or C
//db.user.find({name: {$regex: "^[A-C]"}}) // Same as above (range)

//ADVANCED PATTERNS:
//Word boundaries:
//db.user.find({name: {$regex: "\\bJohn\\b"}}) // Exact word "John"

//Optional characters:
//db.user.find({name: {$regex: "Johnn?"}}) // "John" or "Johnn"

//One or more:
//db.user.find({name: {$regex: "o+"}}) // One or more "o"

//Zero or more:
//db.user.find({name: {$regex: "o*"}}) // Zero or more "o"

//Escape special characters:
//db.user.find({email: {$regex: "\\@gmail\\.com"}}) // Literal @ and .

//PRACTICAL EXAMPLES WITH YOUR DATA:
//Find names starting with vowels:
//db.user.find({name: {$regex: "^[AEIOU]", $options: "i"}}) // Alice

//Find users with "o" in their name:
//db.user.find({name: {$regex: "o", $options: "i"}}) // John Doe, Bob Johnson

//Find departments ending with "ing":
//db.user.find({department: {$regex: "ing$"}}) // Engineering, Marketing

//Find skills containing "Java":
//db.user.find({skills: {$regex: "Java"}}) // Java, JavaScript

//Find emails from specific domains:
//db.user.find({email: {$regex: "@(gmail|yahoo)\\.com$"}}) // Gmail or Yahoo

//Find names with exactly 3 words:
//db.user.find({name: {$regex: "^\\w+ \\w+ \\w+$"}}) // First Middle Last

//REGEX OPTIONS:
//i - Case insensitive
//m - Multiline
//x - Extended (ignore whitespace)
//s - Dot matches newline

//Examples with options:
//db.user.find({name: {$regex: "john", $options: "i"}}) // Case insensitive
//db.user.find({name: {$regex: /john/i}}) // JavaScript syntax

//PERFORMANCE NOTES:
//- Regex queries are slower than exact matches
//- Patterns starting with ^ are faster (can use index)
//- Patterns with .* are slowest
//- Create indexes on frequently searched fields

//COMMON USE CASES:
//Search functionality:
//db.user.find({name: {$regex: searchTerm, $options: "i"}})

//Email validation:
//db.user.find({email: {$regex: "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$"}})

//Phone number patterns:
//db.user.find({phone: {$regex: "^\\d{3}-\\d{3}-\\d{4}$"}}) // 123-456-7890

//Partial matching for autocomplete:
//db.user.find({name: {$regex: "^" + userInput, $options: "i"}})
