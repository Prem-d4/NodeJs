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

//UPDATE OPERATORS (Only for UPDATE operations)---------------------------
//SYNTAX:
//$set - set field value
//db.users.updateOne({_id: 1}, {$set: {age: 31}})
//$unset - remove field
//db.users.updateOne({_id: 1}, {$unset: {age: ""}})
//$inc - increment/decrement number
//db.users.updateOne({_id: 1}, {$inc: {age: 1}})
//$mul - multiply field value
//db.users.updateOne({_id: 1}, {$mul: {price: 1.1}})
//$rename - rename field
//db.users.updateOne({_id: 1}, {$rename: {"name": "fullName"}})
//$min - update if new value is less than current
//db.users.updateOne({_id: 1}, {$min: {age: 25}})
//$max - update if new value is greater than current
//db.users.updateOne({_id: 1}, {$max: {age: 30}})
//$currentDate - set to current date
//db.users.updateOne({_id: 1}, {$currentDate: {lastModified: true}})

//ARRAY UPDATE OPERATORS---------------------------
//$push - add element to array
//db.users.updateOne({_id: 1}, {$push: {hobbies: "swimming"}})
//$pull - remove elements matching condition
//db.users.updateOne({_id: 1}, {$pull: {hobbies: "reading"}})
//$pop - remove first (-1) or last (1) element
//db.users.updateOne({_id: 1}, {$pop: {hobbies: 1}})
//$addToSet - add element if not exists
//db.users.updateOne({_id: 1}, {$addToSet: {hobbies: "gaming"}})
//$pullAll - remove all matching elements
//db.users.updateOne({_id: 1}, {$pullAll: {hobbies: ["reading", "gaming"]}})

//READ-ONLY METHODS (Only for READ operations)---------------------------
//Projection - select specific fields
//db.users.find({}, {name: 1, email: 1}) // include only name, email
//db.users.find({}, {age: 0}) // exclude age field

//Sorting
//db.users.find().sort({age: 1}) // ascending
//db.users.find().sort({age: -1}) // descending

//Limiting and Skipping
//db.users.find().limit(5) // first 5 documents
//db.users.find().skip(10) // skip first 10
//db.users.find().sort({age: 1}).limit(5).skip(10) // chaining

//Counting
//db.users.countDocuments({age: {$gt: 25}}) // count matching documents
//db.users.estimatedDocumentCount() // estimated total count

//USAGE SUMMARY---------------------------
//Comparison + Logical + Element + Array + String operators: READ, UPDATE, DELETE
//Update operators: Only UPDATE operations
//Projection, Sorting, Limiting, Counting: Only READ operations

//replaceOne() - REPLACE ENTIRE DOCUMENT---------------------------
//replaceOne() completely replaces a document with a new document
//Unlike updateOne() which modifies specific fields, replaceOne() replaces the whole document
//DIFFERENCE: updateOne() vs replaceOne()---------------------------

//updateOne() - Modifies specific fields:
//db.user.updateOne(
//  {email: "john@gmail.com"},
//  {$set: {age: 30, department: "Management"}}
//)
//Result: Only age and department change, other fields remain

//replaceOne() - Replaces entire document:
//db.user.replaceOne(
//  {email: "john@gmail.com"},
//  {name: "John Smith", email: "john@gmail.com", age: 30}
//)
//Result: ONLY the fields in replacement exist, others are REMOVED

//IMPORTANT NOTES---------------------------
//1. _id field is NEVER replaced (stays the same)
//2. Fields not in replacement document are REMOVED
//3. Replacement document cannot contain update operators ($set, $inc, etc.)
//4. Only replaces the FIRST matching document

//PRACTICAL EXAMPLES---------------------------

//Example 1: Replace user profile completely
//db.user.replaceOne(
//  {name: "Alice Smith"},
//  {
//    name: "Alice Johnson",
//    email: "alice.johnson@company.com",
//    age: 33,
//    department: "Sales",
//    skills: ["CRM", "Sales", "Marketing"],
//    isActive: true,
//    lastLogin: new Date()
//  }
//)

//Example 2: Replace with minimal data (removes other fields)
//db.user.replaceOne(
//  {_id: ObjectId("...")},
//  {
//    name: "Bob Wilson",
//    status: "inactive"
//  }
//)
//Result: Only name and status remain, all other fields removed

//RETURN VALUE---------------------------
//replaceOne() returns:
//{
//  acknowledged: true,
//  matchedCount: 1,        // Number of documents matched
//  modifiedCount: 1,       // Number of documents replaced
//  upsertedId: null        // If upsert was used
//}

//WITH UPSERT OPTION---------------------------
//If no document matches, create new one:
//db.user.replaceOne(
//  {email: "newuser@gmail.com"},
//  {
//    name: "New User",
//    email: "newuser@gmail.com",
//    age: 25,
//    department: "IT"
//  },
//  {upsert: true}           // Create if not found
//)

//WHEN TO USE replaceOne()---------------------------
//Use replaceOne() when:
//- You want to completely rewrite a document
//- You have a new version of the entire document
//- You want to remove fields not in the new version
//- You're implementing a "save" operation that replaces everything

//Use updateOne() when:
//- You want to modify specific fields only
//- You want to keep existing fields unchanged
//- You're making incremental updates

//COMMON MISTAKES---------------------------
// Wrong - Using update operators:
//db.user.replaceOne({_id: 1}, {$set: {name: "John"}}) // Error!

// Correct - Plain document:
//db.user.replaceOne({_id: 1}, {name: "John", email: "john@gmail.com"})

// Wrong - Forgetting fields you want to keep:
//db.user.replaceOne({_id: 1}, {name: "John"}) // Removes all other fields!

// Correct - Include all fields you want to keep:
//db.user.replaceOne({_id: 1}, {
//  name: "John",
//  email: "john@gmail.com",
//  age: 30,
//  department: "Engineering"
//})

//WHAT IS A CURSOR?---------------------------
//Cursor = A pointer to the result set of a query
//It's NOT the actual data, but a way to iterate through results
//Like a bookmark that moves through query results one by one

//When you run db.tasks.find():
//- MongoDB doesn't return all documents immediately
//- It returns a cursor object that points to the results
//- You can then iterate through the cursor to get documents

//CURSOR CONCEPT---------------------------
//Think of cursor like reading a book:
//- Cursor = Your finger pointing to current line
//- You can move finger to next line (next document)
//- You can go back to beginning
//- You can convert all pages to array (toArray())

//1. db.tasks.find().toArray()---------------------------
//Converts cursor to JavaScript array
//Gets ALL documents at once and puts them in an array

//Example:
//db.tasks.find().toArray()
//Returns: [
//  {_id: 1, name: "Task 1", status: "pending"},
//  {_id: 2, name: "Task 2", status: "completed"},
//  {_id: 3, name: "Task 3", status: "ongoing"}
//]

//Use when: You need all results as an array for processing

//2. db.tasks.find().forEach()---------------------------
//Iterates through cursor one document at a time
//Executes a function for each document

//CORRECT SYNTAX:
//db.tasks.find().forEach(function(task) {
//  printjson(task);
//})

//OR with arrow function:
//db.tasks.find().forEach((task) => {
//  printjson(task);
//})

//This prints each document:
//{_id: 1, name: "Task 1", status: "pending"}
//{_id: 2, name: "Task 2", status: "completed"}
//{_id: 3, name: "Task 3", status: "ongoing"}

//examples ---
// db.tasks.find().forEach((task)=>{printjson(task)})
// db.tasks.find().forEach((task)=>{print("Task"+" "+ task.name)})
//  db.tasks.find().forEach((task)=>{if(task.name="Kubernetes")printjson(task)})

//PROJECTION ----------------------------------
//Projection = Selecting which fields to include/exclude in query results
//Like choosing specific columns in SQL SELECT statement
//Reduces data transfer and improves performance

//SYNTAX:
//db.collection.find(query, projection)
//db.collection.find({filter}, {field1: 1, field2: 0})

//PROJECTION VALUES:
//1 = Include field (show this field)
//0 = Exclude field (hide this field)

//BASIC PROJECTION EXAMPLES---------------------------

//Sample document:
//{
//  _id: ObjectId("..."),
//  name: "John Doe",
//  email: "john@gmail.com", 
//  age: 28,
//  salary: 75000,
//  department: "Engineering",
//  skills: ["JavaScript", "Python"],
//  address: {street: "123 Main St", city: "New York"}
//}

//1. INCLUDE SPECIFIC FIELDS (1 = include)
//db.user.find({}, {name: 1, email: 1})
//Result:
//{
//  _id: ObjectId("..."),  // _id always included by default
//  name: "John Doe",
//  email: "john@gmail.com"
//}

//2. EXCLUDE SPECIFIC FIELDS (0 = exclude)
//db.user.find({}, {salary: 0, address: 0})
//Result:
//{
//  _id: ObjectId("..."),
//  name: "John Doe", 
//  email: "john@gmail.com",
//  age: 28,
//  department: "Engineering",
//  skills: ["JavaScript", "Python"]
//}
//Note: All fields shown EXCEPT salary and address

//3. EXCLUDE _id FIELD
//db.user.find({}, {name: 1, email: 1, _id: 0})
//Result:
//{
//  name: "John Doe",
//  email: "john@gmail.com"
//}
//Note: _id is excluded

//PROJECTION RULES---------------------------
//1. You can either INCLUDE fields (1) OR EXCLUDE fields (0), not both
//2. Exception: _id can always be excluded with 0
//3. If you include any field with 1, only those fields are returned
//4. If you exclude fields with 0, all other fields are returned

//VALID PROJECTIONS:
// Include only: {name: 1, email: 1}
// Exclude only: {salary: 0, address: 0}
// Include + exclude _id: {name: 1, email: 1, _id: 0}

//INVALID PROJECTIONS:
// Mix include/exclude: {name: 1, salary: 0} // Error!

//PRACTICAL EXAMPLES---------------------------

//Example 1: User profile (only public info)
//db.user.find({}, {name: 1, email: 1, department: 1, _id: 0})
//Result: Only name, email, department (no _id, salary, etc.)

//Example 2: Hide sensitive data
//db.user.find({}, {salary: 0, address: 0})
//Result: All fields except salary and address

//Example 3: API response (minimal data)
//db.user.find({department: "Engineering"}, {name: 1, skills: 1})
//Result: Only name and skills for Engineering users

//Example 4: Dashboard summary
//db.user.find({}, {name: 1, department: 1, age: 1, _id: 0})
//Result: Clean data without ObjectId

//NESTED FIELD PROJECTION---------------------------

//Include nested fields:
//db.user.find({}, {"address.city": 1, "address.zipcode": 1})
//Result:
//{
//  _id: ObjectId("..."),
//  address: {
//    city: "New York",
//    zipcode: "10001"
//  }
//}

//Exclude nested fields:
//db.user.find({}, {"address.street": 0})
//Result: All fields, but address.street is removed

//ARRAY PROJECTION---------------------------

//Include array field:
//db.user.find({}, {name: 1, skills: 1})
//Result:
//{
//  _id: ObjectId("..."),
//  name: "John Doe",
//  skills: ["JavaScript", "Python"]
//}

//Array element projection (advanced):
//db.user.find({}, {name: 1, "skills.$": 1}) // First matching element
//db.user.find({}, {name: 1, skills: {$slice: 2}}) // First 2 elements

//PROJECTION WITH QUERIES---------------------------

//Find + Project together:
//db.user.find(
//  {department: "Engineering"},     // Query filter
//  {name: 1, skills: 1, _id: 0}    // Projection
//)
//Result: Name and skills of Engineering users only

//Complex query with projection:
//db.user.find(
//  {age: {$gt: 25}, department: "Engineering"},
//  {name: 1, age: 1, salary: 1}
//)

//PERFORMANCE BENEFITS---------------------------

//Without projection (transfers all data):
//db.user.find({department: "Engineering"})
//Network transfer: ~500 bytes per document

//With projection (transfers only needed fields):
//db.user.find({department: "Engineering"}, {name: 1, email: 1})
//Network transfer: ~100 bytes per document

//PROJECTION IN AGGREGATION---------------------------
//In aggregation pipeline, use $project stage:
//db.user.aggregate([
//  {$match: {department: "Engineering"}},
//  {$project: {name: 1, email: 1, _id: 0}}
//])

//COMMON USE CASES---------------------------

//1. API responses (hide sensitive data):
//db.user.find({}, {password: 0, ssn: 0})

//2. Mobile apps (reduce data usage):
//db.products.find({}, {name: 1, price: 1, image: 1})

//3. Reports (specific columns):
//db.sales.find({}, {date: 1, amount: 1, customer: 1, _id: 0})

//4. Search results (relevant fields only):
//db.articles.find(
//  {$text: {$search: "mongodb"}},
//  {title: 1, summary: 1, author: 1}
//)

//PROJECTION WITH OTHER METHODS---------------------------

//With findOne():
//db.user.findOne({email: "john@gmail.com"}, {name: 1, department: 1})

//With sort():
//db.user.find({}, {name: 1, age: 1}).sort({age: -1})

//With limit():
//db.user.find({}, {name: 1, email: 1}).limit(5)

//BEST PRACTICES---------------------------
//1. Always use projection in production to reduce network traffic
//2. Exclude large fields (images, documents) when not needed
//3. Include only fields your application actually uses
//4. Use projection in APIs to control response structure
//5. Consider indexing projected fields for better performance

//SUMMARY---------------------------
//Projection controls which fields are returned in query results:
//- 1 = Include field
//- 0 = Exclude field  
//- Improves performance by reducing data transfer
//- Cannot mix include/exclude (except _id)
//- Works with all find operations

//EMBEDDED DOCUMENTS --------------------
//Embedded Document = A document stored inside another document
//Also called "nested documents" or "subdocuments"
//MongoDB's way of representing one-to-one and one-to-many relationships

//WHAT ARE EMBEDDED DOCUMENTS?---------------------------
//Instead of separate tables (like SQL), MongoDB stores related data together
//Example: User document with embedded address document

//BASIC EXAMPLE:
//{
//  _id: ObjectId("..."),
//  name: "John Doe",
//  email: "john@gmail.com",
//  address: {                    // ← This is an embedded document
//    street: "123 Main St",
//    city: "New York", 
//    zipcode: "10001",
//    country: "USA"
//  }
//}

//TYPES OF EMBEDDED DOCUMENTS---------------------------
//1. SINGLE EMBEDDED DOCUMENT (Object)
//{
//  _id: 1,
//  name: "John Doe",
//  profile: {                    // Single embedded document
//    bio: "Software Developer",
//    website: "johndoe.com",
//    social: {
//      twitter: "@johndoe",
//      linkedin: "john-doe"
//    }
//  }
//}

//2. ARRAY OF EMBEDDED DOCUMENTS
//{
//  _id: 1,
//  name: "John Doe",
//  projects: [                   // Array of embedded documents
//    {
//      name: "Project A",
//      status: "completed",
//      startDate: "2023-01-15",
//      technologies: ["React", "Node.js"]
//    },
//    {
//      name: "Project B", 
//      status: "ongoing",
//      startDate: "2023-06-01",
//      technologies: ["Python", "MongoDB"]
//    }
//  ]
//}

//REAL-WORLD EXAMPLES---------------------------
//E-commerce Order:
//{
//  _id: ObjectId("..."),
//  orderNumber: "ORD-2023-001",
//  customer: {                   // Embedded customer info
//    name: "John Doe",
//    email: "john@gmail.com",
//    phone: "123-456-7890"
//  },
//  shippingAddress: {            // Embedded address
//    street: "123 Main St",
//    city: "New York",
//    zipcode: "10001"
//  },
//  items: [                      // Array of embedded items
//    {
//      productId: "PROD-001",
//      name: "Laptop",
//      price: 999.99,
//      quantity: 1
//    },
//    {
//      productId: "PROD-002", 
//      name: "Mouse",
//      price: 29.99,
//      quantity: 2
//    }
//  ],
//  total: 1059.97,
//  orderDate: ISODate("2023-10-01")
//}

//Blog Post with Comments:
//{
//  _id: ObjectId("..."),
//  title: "Introduction to MongoDB",
//  content: "MongoDB is a NoSQL database...",
//  author: {                     // Embedded author info
//    name: "Jane Smith",
//    email: "jane@blogger.com",
//    avatar: "avatar.jpg"
//  },
//  comments: [                   // Array of embedded comments
//    {
//      commentId: 1,
//      author: "Bob Wilson",
//      text: "Great article!",
//      date: ISODate("2023-10-02"),
//      likes: 5
//    },
//    {
//      commentId: 2,
//      author: "Alice Brown", 
//      text: "Very helpful, thanks!",
//      date: ISODate("2023-10-03"),
//      likes: 3
//    }
//  ],
//  tags: ["mongodb", "database", "nosql"],
//  publishDate: ISODate("2023-10-01")
//}

//QUERYING EMBEDDED DOCUMENTS---------------------------
//1. Query embedded document fields (dot notation):
//db.users.find({"address.city": "New York"})
//db.users.find({"profile.bio": "Software Developer"})

//2. Query array of embedded documents:
//db.users.find({"projects.status": "ongoing"})
//db.users.find({"projects.name": "Project A"})

//3. Query with multiple embedded fields:
//db.users.find({
//  "address.city": "New York",
//  "address.zipcode": "10001"
//})

//4. Query array elements with $elemMatch:
//db.users.find({
//  projects: {
//    $elemMatch: {
//      status: "ongoing",
//      technologies: "React"
//    }
//  }
//})

//UPDATING EMBEDDED DOCUMENTS---------------------------
//1. Update embedded document field:
//db.users.updateOne(
//  {_id: 1},
//  {$set: {"address.city": "Los Angeles"}}
//)

//2. Update entire embedded document:
//db.users.updateOne(
//  {_id: 1},
//  {$set: {
//    address: {
//      street: "456 Oak Ave",
//      city: "San Francisco", 
//      zipcode: "94102",
//      country: "USA"
//    }
//  }}
//)

//3. Add to array of embedded documents:
//db.users.updateOne(
//  {_id: 1},
//  {$push: {
//    projects: {
//      name: "Project C",
//      status: "planning",
//      startDate: "2023-12-01",
//      technologies: ["Vue.js", "Express"]
//    }
//  }}
//)

//4. Update specific array element:
//db.users.updateOne(
//  {_id: 1, "projects.name": "Project A"},
//  {$set: {"projects.$.status": "completed"}}
//)

//5. Update nested embedded document:
//db.users.updateOne(
//  {_id: 1},
//  {$set: {"profile.social.twitter": "@john_doe_dev"}}
//)

//PROJECTION WITH EMBEDDED DOCUMENTS---------------------------
//1. Include entire embedded document:
//db.users.find({}, {name: 1, address: 1})

//2. Include specific embedded fields:
//db.users.find({}, {name: 1, "address.city": 1, "address.zipcode": 1})

//3. Exclude embedded fields:
//db.users.find({}, {"address.street": 0})

//4. Array projection:
//db.users.find({}, {name: 1, projects: {$slice: 2}}) // First 2 projects

//ADVANTAGES OF EMBEDDED DOCUMENTS---------------------------
//1. Data locality - Related data stored together
//2. Atomic operations - Update entire document atomically
//3. Better performance - Single query gets all related data
//4. Natural data modeling - Matches object-oriented thinking
//5. No joins needed - All data in one document

//DISADVANTAGES---------------------------
//1. Document size limit (16MB in MongoDB)
//2. Data duplication if same embedded doc used elsewhere
//3. Complex queries on deeply nested data
//4. Harder to index embedded array elements
//5. Can lead to large documents

//WHEN TO USE EMBEDDED DOCUMENTS---------------------------
// Use embedded documents when:
//- Data is accessed together frequently
//- One-to-one relationships (user → profile)
//- One-to-few relationships (user → addresses)
//- Child data doesn't exist independently
//- You need atomic updates

// Don't use embedded documents when:
//- Embedded arrays grow unbounded
//- Data is accessed independently often
//- Many-to-many relationships
//- Document size approaches 16MB limit
//- Need complex queries on embedded data

//EMBEDDED vs REFERENCED DOCUMENTS---------------------------
//Embedded (data together):
//{
//  _id: 1,
//  name: "John",
//  orders: [
//    {orderId: 1, total: 100},
//    {orderId: 2, total: 200}
//  ]
//}

//Referenced (separate collections):
//Users: {_id: 1, name: "John"}
//Orders: {_id: 1, userId: 1, total: 100}
//Orders: {_id: 2, userId: 1, total: 200}

//BEST PRACTICES---------------------------
//1. Embed when data is accessed together
//2. Reference when data grows large or is shared
//3. Limit embedded array size (< 100 elements)
//4. Use dot notation for querying nested fields
//5. Consider document size limits
//6. Index embedded fields that are queried frequently
//7. Use $elemMatch for complex array queries

//INDEXING EMBEDDED DOCUMENTS---------------------------
//Create indexes on embedded fields:
//db.users.createIndex({"address.city": 1})
//db.users.createIndex({"projects.status": 1})
//db.users.createIndex({"profile.social.twitter": 1})


//SCHEMAS -----------------
//Schema = Structure/blueprint that defines the shape and rules for documents in a collection
//Unlike SQL, MongoDB is schema-flexible but you can enforce schemas for data consistency

//WHAT IS A SCHEMA?---------------------------
//A schema defines:
//- Field names and data types
//- Required vs optional fields  
//- Validation rules
//- Default values
//- Relationships between documents

//SCHEMA-LESS vs SCHEMA-FULL---------------------------
//MongoDB is naturally schema-less:
//- Documents in same collection can have different structures
//- Fields can be added/removed without altering collection
//- Data types can vary between documents

//DATATYPES FOR SCHEMA ------------------------------
//String      - Text data
//Number      - Integer(int32), NumberLong(int64), NumberDecimal
//Date        - Date and time - ISO Date("2025-08-12"), Timestamp(114212532)
//Boolean     - true/false
//ObjectId    - MongoDB ObjectId - ObjectId('mnajsdvfbio21k341234123oreknwfdasms')
//Array       - List of values - [...,...,..]
//Mixed       - Any data type
//Buffer      - Binary data
//Map         - Key-value pairs
//Decimal128  - High precision decimal

//SCHEMA VALIDATION ---------------------------
//Built-in validators:
//required   - Field must have a value
//min/max    - For numbers and dates
//minlength/maxlength - For strings
//match      - Regular expression pattern
//enum       - Value must be in specified array
//unique     - Value must be unique in collection

//Custom validators:
//const userSchema = new mongoose.Schema({
//  username: {
//    type: String,
//    validate: {
//      validator: function(v) {
//        return /^[a-zA-Z0-9_]+$/.test(v);  // Only alphanumeric and underscore
//      },
//      message: 'Username can only contain letters, numbers, and underscores'
//    }
//  },
//  age: {
//    type: Number,
//    validate: {
//      validator: function(v) {
//        return v >= 13;              // Must be at least 13
//      },
//      message: 'Must be at least 13 years old'
//    }
//  }
//});

//RELATIONS --------------------------------------
//MongoDB relationships define how documents in different collections are connected
//Unlike SQL joins, MongoDB uses two main approaches: Embedding and Referencing


//TYPES OF RELATIONSHIPS---------------------------
//1. One-to-One (1:1)     - One document relates to exactly one other document
    //APPROACH 1: EMBEDDED (RECOMMENDED)
    //User with Profile embedded:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439011"),
    //  username: "john_doe",
    //  email: "john@gmail.com",
    //  password: "hashedPassword123",
    //  profile: {                    // One-to-One embedded
    //    firstName: "John",
    //    lastName: "Doe",
    //    bio: "Full-stack developer",
    //    avatar: "profile-pic.jpg",
    //    dateOfBirth: ISODate("1990-05-15"),
    //    phone: "+1-555-0123",
    //    address: {
    //      street: "123 Main St",
    //      city: "New York",
    //      zipcode: "10001"
    //    },
    //    socialMedia: {
    //      twitter: "@johndoe",
    //      linkedin: "john-doe-dev"
    //    }
    //  },
    //  createdAt: ISODate("2023-01-15"),
    //  isActive: true
    //}

    //APPROACH 2: REFERENCED (WHEN PROFILE IS LARGE)
    //Users Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439011"),
    //  username: "john_doe", 
    //  email: "john@gmail.com",
    //  password: "hashedPassword123",
    //  profileId: ObjectId("507f1f77bcf86cd799439012"), // Reference to profile
    //  createdAt: ISODate("2023-01-15"),
    //  isActive: true
    //}

    //Profiles Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439012"),
    //  userId: ObjectId("507f1f77bcf86cd799439011"), // Back reference to user
    //  firstName: "John",
    //  lastName: "Doe", 
    //  bio: "Full-stack developer with 5+ years experience...",
    //  avatar: "profile-pic.jpg",
    //  dateOfBirth: ISODate("1990-05-15"),
    //  phone: "+1-555-0123",
    //  address: {
    //    street: "123 Main St",
    //    city: "New York", 
    //    zipcode: "10001"
    //  },
    //  socialMedia: {
    //    twitter: "@johndoe",
    //    linkedin: "john-doe-dev",
    //    github: "johndoe"
    //  },
    //  preferences: {
    //    theme: "dark",
    //    notifications: true,
    //    language: "en"
    //  },
    //  lastUpdated: ISODate("2023-10-01")
    //}

//2. One-to-Many (1:N)    - One document relates to multiple other documents  
    //APPROACH 1: EMBEDDED (ONE-TO-FEW, <100 ITEMS)
    //Blog Post with Comments:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439011"),
    //  title: "Introduction to MongoDB",
    //  content: "MongoDB is a powerful NoSQL database...",
    //  author: "Jane Smith",
    //  publishDate: ISODate("2023-10-01"),
    //  tags: ["mongodb", "database", "nosql"],
    //  comments: [                   // One-to-Many embedded
    //    {
    //      _id: ObjectId("507f1f77bcf86cd799439012"),
    //      author: "Bob Wilson",
    //      email: "bob@gmail.com",
    //      text: "Great article! Very informative.",
    //      date: ISODate("2023-10-02"),
    //      likes: 5,
    //      replies: [
    //        {
    //          author: "Alice Brown",
    //          text: "I agree!",
    //          date: ISODate("2023-10-02")
    //        }
    //      ]
    //    },
    //    {
    //      _id: ObjectId("507f1f77bcf86cd799439013"),
    //      author: "Charlie Davis",
    //      email: "charlie@gmail.com", 
    //      text: "Thanks for sharing this knowledge.",
    //      date: ISODate("2023-10-03"),
    //      likes: 3
    //    }
    //  ],
    //  viewCount: 150,
    //  status: "published"
    //}

    //APPROACH 2: REFERENCED (ONE-TO-MANY, >100 ITEMS)
    //User with Orders:
    //Users Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439017"),
    //  name: "John Doe",
    //  email: "john@gmail.com",
    //  phone: "+1-555-0123",
    //  createdAt: ISODate("2023-01-15"),
    //  isActive: true
    //}

    //Orders Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439018"),
    //  userId: ObjectId("507f1f77bcf86cd799439017"), // Reference to user
    //  orderNumber: "ORD-2023-001",
    //  items: [
    //    {productId: "PROD-001", name: "Laptop", price: 999.99, quantity: 1},
    //    {productId: "PROD-002", name: "Mouse", price: 29.99, quantity: 2}
    //  ],
    //  total: 1059.97,
    //  status: "delivered",
    //  orderDate: ISODate("2023-10-01"),
    //  shippingAddress: {
    //    street: "123 Main St",
    //    city: "New York",
    //    zipcode: "10001"
    //  }
    //}
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439019"),
    //  userId: ObjectId("507f1f77bcf86cd799439017"), // Same user, different order
    //  orderNumber: "ORD-2023-002",
    //  items: [
    //    {productId: "PROD-003", name: "Keyboard", price: 79.99, quantity: 1}
    //  ],
    //  total: 79.99,
    //  status: "processing",
    //  orderDate: ISODate("2023-10-15")
    //}

    //Category with Products:
    //Categories Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439020"),
    //  name: "Electronics",
    //  description: "Electronic devices and gadgets",
    //  slug: "electronics",
    //  isActive: true
    //}

    //Products Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439021"),
    //  categoryId: ObjectId("507f1f77bcf86cd799439020"), // Reference to category
    //  name: "iPhone 15",
    //  description: "Latest iPhone model",
    //  price: 999.99,
    //  stock: 50,
    //  images: ["iphone1.jpg", "iphone2.jpg"],
    //  specifications: {
    //    storage: "128GB",
    //    color: "Space Gray",
    //    warranty: "1 year"
    //  }
    //}
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439022"),
    //  categoryId: ObjectId("507f1f77bcf86cd799439020"), // Same category
    //  name: "MacBook Pro",
    //  description: "Professional laptop",
    //  price: 1999.99,
    //  stock: 25,
    //  images: ["macbook1.jpg", "macbook2.jpg"]
    //}

//3. Many-to-Many (M:N)   - Multiple documents relate to multiple other documents
    //APPROACH 1: ARRAY OF REFERENCES (BOTH SIDES)
    //Students ↔ Courses:
    //Students Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439023"),
    //  name: "Alice Johnson",
    //  email: "alice@university.edu",
    //  studentId: "STU-2023-001",
    //  major: "Computer Science",
    //  courseIds: [                  // Array of course references
    //    ObjectId("507f1f77bcf86cd799439025"),
    //    ObjectId("507f1f77bcf86cd799439026"),
    //    ObjectId("507f1f77bcf86cd799439027")
    //  ],
    //  enrollmentDate: ISODate("2023-09-01")
    //}
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439024"),
    //  name: "Bob Smith",
    //  email: "bob@university.edu",
    //  studentId: "STU-2023-002",
    //  major: "Mathematics",
    //  courseIds: [                  // Different courses
    //    ObjectId("507f1f77bcf86cd799439025"),
    //    ObjectId("507f1f77bcf86cd799439028")
    //  ],
    //  enrollmentDate: ISODate("2023-09-01")
    //}

    //Courses Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439025"),
    //  title: "Database Systems",
    //  code: "CS-301",
    //  credits: 3,
    //  instructor: "Dr. Wilson",
    //  studentIds: [                 // Array of student references
    //    ObjectId("507f1f77bcf86cd799439023"),
    //    ObjectId("507f1f77bcf86cd799439024")
    //  ],
    //  maxCapacity: 30,
    //  semester: "Fall 2023"
    //}
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439026"),
    //  title: "Web Development",
    //  code: "CS-350",
    //  credits: 4,
    //  instructor: "Prof. Davis",
    //  studentIds: [
    //    ObjectId("507f1f77bcf86cd799439023")
    //  ],
    //  maxCapacity: 25,
    //  semester: "Fall 2023"
    //}

    //APPROACH 2: JUNCTION COLLECTION (RECOMMENDED)
    //Users ↔ Roles with additional metadata:
    //Users Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439029"),
    //  name: "John Doe",
    //  email: "john@company.com",
    //  department: "Engineering",
    //  createdAt: ISODate("2023-01-15")
    //}
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439030"),
    //  name: "Jane Smith",
    //  email: "jane@company.com",
    //  department: "Marketing",
    //  createdAt: ISODate("2023-02-01")
    //}

    //Roles Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439031"),
    //  name: "Admin",
    //  description: "Full system access",
    //  permissions: ["read", "write", "delete", "manage_users"]
    //}
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439032"),
    //  name: "Editor",
    //  description: "Content management access",
    //  permissions: ["read", "write", "publish"]
    //}
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439033"),
    //  name: "Viewer",
    //  description: "Read-only access",
    //  permissions: ["read"]
    //}

    //UserRoles Junction Collection:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439034"),
    //  userId: ObjectId("507f1f77bcf86cd799439029"),
    //  roleId: ObjectId("507f1f77bcf86cd799439031"),
    //  assignedBy: ObjectId("507f1f77bcf86cd799439030"),
    //  assignedDate: ISODate("2023-01-15"),
    //  expiryDate: ISODate("2024-01-15"),
    //  isActive: true,
    //  notes: "Initial admin assignment"
    //}
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439035"),
    //  userId: ObjectId("507f1f77bcf86cd799439029"),
    //  roleId: ObjectId("507f1f77bcf86cd799439032"),
    //  assignedBy: ObjectId("507f1f77bcf86cd799439030"),
    //  assignedDate: ISODate("2023-03-01"),
    //  expiryDate: null,
    //  isActive: true,
    //  notes: "Additional editor role for content management"
    //}
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439036"),
    //  userId: ObjectId("507f1f77bcf86cd799439030"),
    //  roleId: ObjectId("507f1f77bcf86cd799439032"),
    //  assignedBy: ObjectId("507f1f77bcf86cd799439029"),
    //  assignedDate: ISODate("2023-02-01"),
    //  expiryDate: null,
    //  isActive: true,
    //  notes: "Editor role for marketing content"
    //}

    //APPROACH 3: EMBEDDED ARRAYS (SIMPLE CASES)
    //Articles ↔ Tags:
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439037"),
    //  title: "Introduction to MongoDB",
    //  content: "MongoDB is a powerful NoSQL database...",
    //  author: "Tech Writer",
    //  tags: [                       // Simple array of tag names
    //    "mongodb",
    //    "database", 
    //    "nosql",
    //    "tutorial",
    //    "beginner"
    //  ],
    //  publishDate: ISODate("2023-10-01"),
    //  viewCount: 1250
    //}

    //Products ↔ Categories (Multiple categories per product):
    //{
    //  _id: ObjectId("507f1f77bcf86cd799439038"),
    //  name: "Gaming Laptop",
    //  description: "High-performance laptop for gaming",
    //  price: 1499.99,
    //  categories: [                 // Array of category references
    //    ObjectId("507f1f77bcf86cd799439039"), // Electronics
    //    ObjectId("507f1f77bcf86cd799439040"), // Gaming
    //    ObjectId("507f1f77bcf86cd799439041")  // Computers
    //  ],
    //  specifications: {
    //    processor: "Intel i7",
    //    ram: "16GB",
    //    storage: "1TB SSD"
    //  }
    //}

//IMPORTANT NOTE ------------------------------
//1. Document size limit: 16MB per document maximum
//2. Avoid super deep nesting (100+ levels) - impacts performance and readability
//3. Avoid extremely long arrays (1000+ elements) - use references instead
//4. Embedded arrays should typically be < 100 elements for optimal performance
//5. Consider query patterns when choosing embedded vs referenced approach
    //DOCUMENT SIZE EXAMPLES---------------------------
    //BAD - Will hit 16MB limit:
    //{
    //  _id: ObjectId("..."),
    //  title: "Blog Post",
    //  comments: [
    //    // 50,000+ comments embedded = document too large
    //  ]
    //}

    //GOOD - Use references for large datasets:
    //Posts: {_id, title, content}
    //Comments: {_id, postId, text, author}

    //BAD - Too deep nesting:
    //{
    //  level1: {
    //    level2: {
    //      level3: {
    //        // ... 100+ levels deep
    //        level100: {
    //          data: "hard to query and maintain"
    //        }
    //      }
    //    }
    //  }
    //}

    //GOOD - Flatten structure:
    //{
    //  _id: ObjectId("..."),
    //  category: "electronics",
    //  subcategory: "phones",
    //  brand: "apple",
    //  model: "iphone15"
    //}

    //PERFORMANCE GUIDELINES---------------------------
    //Embedded arrays optimal sizes:
    //- Tags: < 20 items
    //- Comments: < 50 items  
    //- Order items: < 100 items
    //- User addresses: < 10 items

    //When to switch to references:
    //- Array grows beyond 100 elements
    //- Document approaches 1MB in size
    //- Need to query array elements independently
    //- Array elements are frequently updated

//$LOOKUP - AGGREGATION JOIN OPERATION---------------------------
//$lookup performs a left outer join between collections
//Similar to SQL JOIN - combines documents from different collections
//Part of MongoDB aggregation pipeline

    //BASIC SYNTAX---------------------------
    //db.collection.aggregate([
    //  {
    //    $lookup: {
    //      from: "foreignCollection",        // Collection to join with
    //      localField: "fieldInCurrentDoc", // Field from current collection
    //      foreignField: "fieldInForeignDoc", // Field from foreign collection
    //      as: "outputArrayField"           // Name for joined data array
    //    }
    //  }
    //])

    //SIMPLE LOOKUP EXAMPLE---------------------------
    //Users Collection:
    //{_id: ObjectId("user1"), name: "John", email: "john@gmail.com"}
    //{_id: ObjectId("user2"), name: "Jane", email: "jane@gmail.com"}

    //Orders Collection:
    //{_id: ObjectId("order1"), userId: ObjectId("user1"), total: 100, product: "Laptop"}
    //{_id: ObjectId("order2"), userId: ObjectId("user1"), total: 50, product: "Mouse"}
    //{_id: ObjectId("order3"), userId: ObjectId("user2"), total: 200, product: "Phone"}

    //Query - Get users with their orders:
    //db.users.aggregate([
    //  {
    //    $lookup: {
    //      from: "orders",           // Join with orders collection
    //      localField: "_id",        // User's _id field
    //      foreignField: "userId",   // Order's userId field
    //      as: "userOrders"          // Output array name
    //    }
    //  }
    //])

    //Result:
    //[
    //  {
    //    _id: ObjectId("user1"),
    //    name: "John",
    //    email: "john@gmail.com",
    //    userOrders: [              // Joined orders array
    //      {_id: ObjectId("order1"), userId: ObjectId("user1"), total: 100, product: "Laptop"},
    //      {_id: ObjectId("order2"), userId: ObjectId("user1"), total: 50, product: "Mouse"}
    //    ]
    //  },
    //  {
    //    _id: ObjectId("user2"),
    //    name: "Jane", 
    //    email: "jane@gmail.com",
    //    userOrders: [
    //      {_id: ObjectId("order3"), userId: ObjectId("user2"), total: 200, product: "Phone"}
    //    ]
    //  }
    //]

    //LOOKUP PERFORMANCE TIPS---------------------------
    //1. Index foreign fields for better performance
    //2. Use $match before $lookup to reduce documents
    //3. Use pipeline in $lookup for complex filtering
    //4. Limit fields with $project after lookup
    //5. Consider embedding vs lookup based on query patterns

    //WHEN TO USE LOOKUP---------------------------
    //Use $lookup when:
    //- Need complex joins with filtering
    //- Want to aggregate data across collections
    //- Need to transform joined data
    //- Working with large datasets efficiently
    //- Need SQL-like join functionality

    //Avoid $lookup when:
    //- Simple one-to-one relationships (use embedding)
    //- Performance is critical (consider denormalization)
    //- Joining very large collections without proper indexes

//SCHEMA VALIDATION -------------------------------------------------
//MongoDB supports document validation using JSON Schema
//Validates documents on insert and update operations
//Helps ensure data consistency and integrity

//BASIC VALIDATION SYNTAX---------------------------
//db.createCollection('collectionName', {
//  validator: {
//    $jsonSchema: {
//      bsonType: 'object',
//      required: ['field1', 'field2'],
//      properties: {
//        field1: {
//          bsonType: 'string',
//          description: 'must be a string and is required'
//        }
//      }
//    }
//  }
//})

//BSON TYPES---------------------------
//string      - Text data
//int         - 32-bit integer
//long        - 64-bit integer
//double      - 64-bit floating point
//decimal     - 128-bit decimal
//bool        - Boolean true/false
//date        - Date object
//objectId    - MongoDB ObjectId
//array       - Array of values
//object      - Embedded document
//null        - Null value
//regex       - Regular expression
//binData     - Binary data

//VALIDATION OPERATORS---------------------------
//required        - Array of required field names
//properties      - Define validation for specific fields
//additionalProperties - Allow/disallow extra fields (true/false)
//minLength/maxLength - String length constraints
//minimum/maximum - Numeric value constraints- hint(>=, <=)
//exclusiveMinimum/exclusiveMaximum - Exclusive bounds - hint(>, <)
//pattern         - Regular expression for strings
//enum            - Array of allowed values
//items           - Validation for array elements
//minItems/maxItems - Array length constraints
//uniqueItems     - Require unique array elements

//VALIDATION ACTIONS---------------------------
//validationAction: 'error' (default) - Reject invalid documents
//validationAction: 'warn' - Allow but log warnings
//validationLevel: 'strict' (default) - Validate all inserts/updates
//validationLevel: 'moderate' - Only validate documents that match schema

//Example with validation options:
//db.createCollection('logs', {
//  validator: {
//    $jsonSchema: {
//      bsonType: 'object',
//      required: ['message', 'level'],
//      properties: {
//        message: { bsonType: 'string' },
//        level: { enum: ['info', 'warn', 'error'] }
//      }
//    }
//  },
//  validationAction: 'warn',      // Log warnings instead of errors
//  validationLevel: 'moderate'    // Only validate matching documents
//})

//ADDING VALIDATION TO EXISTING COLLECTION---------------------------
//db.runCommand({
//  collMod: 'existingCollection',
//  validator: {
//    $jsonSchema: {
//      bsonType: 'object',
//      required: ['name'],
//      properties: {
//        name: { bsonType: 'string' }
//      }
//    }
//  }
//})

//VALIDATION ERROR EXAMPLES---------------------------
//Valid document:
//db.posts2.insertOne({
//  title: "My Post",
//  text: "Post content",
//  creator: ObjectId("507f1f77bcf86cd799439011"),
//  comments: [
//    {
//      text: "Great post!",
//      author: ObjectId("507f1f77bcf86cd799439012")
//    }
//  ]
//})

//Invalid document (will fail):
//db.posts2.insertOne({
//  title: 123,                    // Should be string
//  text: "Post content",
//  creator: "invalid-id",         // Should be ObjectId
//  comments: "not-an-array"       // Should be array
//})
//Error: Document failed validation

//BEST PRACTICES---------------------------
//1. Define validation during collection creation
//2. Use descriptive error messages
//3. Validate required fields and data types
//4. Use enums for limited value sets
//5. Set reasonable min/max constraints
//6. Consider performance impact of complex validations
//7. Test validation rules thoroughly
//8. Use 'warn' action during development, 'error' in production
//9. Document your validation schema
//10. Keep validation rules simple and maintainable


//DATA MODELING & STRUCTURING - KEY CONSIDERATIONS---------------------------
//MongoDB data modeling requires different thinking than relational databases
//Focus on how data is accessed rather than how it's stored

//1. UNDERSTAND YOUR APPLICATION PATTERNS---------------------------
//Query Patterns:
//- What data is accessed together?
//- How often is data read vs written?
//- What are the most common queries?
//- Do you need real-time or eventual consistency?

//Example Analysis:
//Blog Application:
//- Posts with comments (read together frequently) → Embed comments
//- User profiles (accessed independently) → Separate collection
//- Tags (simple, limited) → Embed as array
//- Categories (shared across posts) → Reference

//2. RELATIONSHIP MODELING DECISIONS---------------------------
//EMBED when:
//- Data is accessed together (1:1, 1:few)
//- Child data doesn't exist independently
//- Atomic updates needed
//- Limited growth (< 100 items)
//- Performance is critical

//REFERENCE when:
//- Data grows unbounded (1:many, many:many)
//- Data is accessed independently
//- Data is shared across documents
//- Need complex queries on child data
//- Document size approaches limits

//3. DOCUMENT SIZE CONSIDERATIONS---------------------------
//Hard Limits:
//- 16MB maximum document size
//- 100 levels maximum nesting depth
//- Index key size limit (1024 bytes)

//Performance Guidelines:
//- Keep frequently accessed data < 1MB
//- Limit embedded arrays to < 100 elements
//- Avoid deep nesting (> 5 levels)
//- Consider network transfer costs

//4. SCHEMA DESIGN PATTERNS---------------------------

//Pattern 1: POLYMORPHIC SCHEMA
//Store different document types in same collection
//{
//  _id: ObjectId("..."),
//  type: "product",
//  name: "iPhone",
//  price: 999,
//  category: "electronics"
//}
//{
//  _id: ObjectId("..."),
//  type: "service",
//  name: "Consulting",
//  hourlyRate: 150,
//  expertise: ["mongodb", "nodejs"]
//}

//Pattern 2: ATTRIBUTE PATTERN
//Handle documents with many similar fields
//{
//  _id: ObjectId("..."),
//  name: "Product A",
//  attributes: [
//    {key: "color", value: "red"},
//    {key: "size", value: "large"},
//    {key: "weight", value: "2kg"}
//  ]
//}

//Pattern 3: BUCKET PATTERN
//Group time-series or similar data
//{
//  _id: ObjectId("..."),
//  sensor_id: "temp_001",
//  date: ISODate("2023-10-01"),
//  readings: [
//    {time: "00:00", value: 20.5},
//    {time: "00:15", value: 20.7},
//    {time: "00:30", value: 20.3}
//  ]
//}

//5. INDEXING STRATEGY---------------------------
//Consider indexes during design phase:
//- Index frequently queried fields
//- Compound indexes for multi-field queries
//- Text indexes for search functionality
//- Geospatial indexes for location data
//- Sparse indexes for optional fields

//Index Planning Examples:
//Users Collection:
//- Single: {email: 1} (unique login)
//- Single: {status: 1} (filter active users)
//- Compound: {department: 1, role: 1} (department queries)

//6. DENORMALIZATION STRATEGIES---------------------------
//Strategic data duplication for performance:

//Example: E-commerce Order
//{
//  _id: ObjectId("..."),
//  orderNumber: "ORD-001",
//  customerId: ObjectId("..."),
//  customerName: "John Doe",        // Denormalized from users
//  customerEmail: "john@gmail.com", // Denormalized from users
//  items: [
//    {
//      productId: ObjectId("..."),
//      productName: "iPhone",       // Denormalized from products
//      price: 999,                  // Snapshot at order time
//      quantity: 1
//    }
//  ],
//  total: 999,
//  orderDate: ISODate("2023-10-01")
//}

//Benefits: Single query gets all order info
//Tradeoffs: Data consistency challenges, storage overhead

//7. CONSISTENCY CONSIDERATIONS---------------------------
//MongoDB provides different consistency levels:

//Strong Consistency:
//- Use transactions for multi-document operations
//- Read from primary replica
//- Atomic operations within single document

//Eventual Consistency:
//- Accept temporary inconsistencies
//- Use change streams for data synchronization
//- Design for idempotent operations

//8. SCALABILITY PLANNING---------------------------
//Horizontal Scaling (Sharding):
//- Choose good shard keys (high cardinality, even distribution)
//- Avoid hotspots (monotonically increasing keys)
//- Consider query patterns for shard key selection

//Good Shard Keys:
//- userId (for user-centric applications)
//- customerId (for multi-tenant applications)
//- hashed(_id) (for even distribution)

//Bad Shard Keys:
//- timestamp (creates hotspots)
//- incrementing counters
//- low cardinality fields

//9. PERFORMANCE OPTIMIZATION---------------------------
//Read Optimization:
//- Embed frequently accessed data
//- Use appropriate indexes
//- Limit returned fields with projection
//- Use aggregation pipeline efficiently

//Write Optimization:
//- Batch operations when possible
//- Use upserts for conditional updates
//- Consider write concerns for consistency needs
//- Avoid large document updates

//10. ANTI-PATTERNS TO AVOID---------------------------
//DON'T:
//- Treat MongoDB like SQL (avoid excessive normalization)
//- Create collections for every entity type
//- Use long, deeply nested documents
//- Ignore index performance
//- Store large files in documents (use GridFS)
//- Use arrays as sets without proper indexing

//DO:
//- Model based on access patterns
//- Embrace denormalization when beneficial
//- Use appropriate data types
//- Plan for growth and scaling
//- Monitor and optimize query performance

//11. REAL-WORLD MODELING EXAMPLES---------------------------

//Social Media Platform:
//Users: {_id, username, profile, followers_count}
//Posts: {_id, userId, content, likes, comments: [embedded]}
//Follows: {followerId, followingId, date} // Junction collection

//E-commerce:
//Products: {_id, name, price, category, inventory}
//Orders: {_id, customerId, items: [embedded], total}
//Users: {_id, name, email, addresses: [embedded]}

//Content Management:
//Articles: {_id, title, content, authorId, tags: [embedded]}
//Authors: {_id, name, bio, articles_count}
//Categories: {_id, name, slug, article_count}

//12. VALIDATION AND GOVERNANCE---------------------------
//- Use schema validation for data integrity
//- Document your data model decisions
//- Version your schema changes
//- Monitor document sizes and query performance
//- Regular review and optimization cycles

//13. MIGRATION CONSIDERATIONS---------------------------
//- Plan for schema evolution
//- Use versioning fields for gradual migrations
//- Test performance with production-like data volumes
//- Consider backward compatibility
//- Use feature flags for gradual rollouts

//DECISION FRAMEWORK---------------------------
//For each relationship, ask:
//1. How is this data accessed? (together/separately)
//2. How much will this data grow? (bounded/unbounded)
//3. How often is it updated? (frequent/rare)
//4. Do I need atomic updates? (yes/no)
//5. What are the query patterns? (simple/complex)
//6. What are the performance requirements? (fast reads/writes)

//Based on answers, choose:
//- Embed: Small, accessed together, atomic updates needed
//- Reference: Large, independent access, complex queries
//- Denormalize: Performance critical, acceptable inconsistency
//- Hybrid: Mix approaches based on specific use cases


//CREATING DOCUMENTS ------------------------------
//insertOne() - Insert a single document
//insertMany() - Insert multiple documents
//insert() - Deprecated, use insertOne/insertMany
//db.hobbies.insertMany([{_id:"yoga",name:"yoga"},{_id:"cooking",name:"cooking"},{_id:"reading",name:"reading"}],{ordered:false}) - Insert multiple documents, continue on error by giving ordered:false
//writeConcern - Specify write acknowledgment level (journal, w, wtimeout)
//db.collection.insertOne(document, {writeConcern: {w: "majority", wtimeout: 5000}}) - Insert with majority write concern and 5s timeout
//Atomicity - Single document operations are atomic by default
//mongoimport - Command-line tool for bulk importing JSON/CSV data
//Example: mongoimport --db mydb --collection mycollection --file data.json --jsonArray --drop
//Example: mongoimport --db mydb --collection mycollection --type csv --headerline --file data.csv --drop
//--drop option drops existing collection before import to avoid duplicates
//--jsonArray option specifies input file contains a JSON array of documents

//READING DOCUMENTS ------------------------------
//find() - Query documents in a collection
//findOne() - Retrieve a single document
//Projection - Specify fields to include/exclude in results
//Operators -------
//Comparison: 
// $eq - Equal
// $ne - Not equal
// $gt - greater than
// $gte - greater than or equal
// $lt - less than
// $lte - less than or equal
// $in - present in
// $nin - not present in
//Logical:
// $and - logical AND
// $or - logical OR
// $not - logical NOT
//Element:
// $exists - field exists
// $type - field type
//Evaluation:
// $regex - regular expression match
// $expr - expression evaluation - eg:- financialData> db.sales.find({$expr:{$gt:["$volume","$target"]}})
// $cond - conditional expressions
//if/else logic
//$subtract - subtract values
// $add - add values
//Array:
//$size - array length
// $all - all elements match , doesnot match order
// $elemMatch - match array elements
//Cursor Methods -------
//Applying cursor methods to refine results
// const dataCursor = db.tasks.find();
// dataCursor.next(); // Get next document
//sorting cursor results
// dataCursor.sort({priority: -1}); // Sort by priority descending
//skipping documents
// dataCursor.skip(5); // Skip first 5 documents
//limiting results
// dataCursor.limit(10); // Limit to 10 documents
//dataCursor.skip(10).limit(5).sort({createdAt: -1}); // Skip 10, limit 5, sort by createdAt desc
//Projection in array fields
// db.users.find({},{name:1, hobbies:{$slice:3}}); // Get name and first 3 hobbies
//slice can take two arguments - $slice:[skip,limit]


