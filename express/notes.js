//EXPRESS---------------------------
//Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
//It is designed for building web applications and APIs, and it is often used in conjunction with Node.js.
//Express is known for its simplicity and ease of use, making it a popular choice for developers.

//API AND RESTFUL API DESIGN---------------------------
//API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications.
//A RESTful API is an architectural style for designing networked applications, using HTTP requests to access and manipulate data.          

//RESTFUL API PRINCIPLES---------------------------
//Separate API into Logical Resources: Each resource should have its own endpoint. 
    // Example: /users,   /products,
//Expose structured resource-based URLs: Use nouns to represent resources in the URL.
    // Example: /users/123, /products/456,
//Use HTTP methods(verbs): The HTTP methods (GET, POST, PUT, DELETE) should be used to perform actions on resources.
    // Example:
                //GET /users - Retrieve a list of users
                //POST /users - Create a new user 
                //GET /users/123 - Retrieve a specific user
                //PUT /users/123 - Update a specific user
                //PATCH /users/123 - Partially update a specific user
                //DELETE /users/123 - Delete a specific user
//Send data as JSON: Use JSON as the format for sending and receiving data in the API.
    //Example:format for JSON data
            //{
            // status: 200,
            // message: 'User created successfully',
            // data: {
                //   id: 123,       
                //   name: 'John Doe',
                //   email: 'abc@gmail.com',
                //   createdAt: '2023-10-01T12:00:00Z'
            // }
            // } 

            //PUT vs PATCH DIFFERENCE---------------------------
            //PUT - Complete replacement (requires ALL fields)
                //Example: PUT /users/123
                //Request body must contain ALL user fields:
                //{
                //  "name": "John Doe",
                //  "email": "john@gmail.com", 
                //  "age": 30,
                //  "address": "123 Main St"
                //}
                //Missing fields will be set to null/undefined

            //PATCH - Partial update (only fields to be updated)
                //Example: PATCH /users/123  
                //Request body contains ONLY fields to update:
                //{
                //  "email": "newemail@gmail.com"
                //}
                //Other fields remain unchanged

            // PUT: Replaces entire resource - if you don't send a field, it gets removed/nullified
            // PATCH: Updates only specified fields - other fields stay as they were
            // So if a user has name, email, age, and address:
            // PUT without age field → age becomes null
            // PATCH without age field → age stays the same

//Be Stateless: Each request from the client to the server must contain all the information needed to understand and process the request.
//This means that the server does not store any client context between requests.
//Example: /book/next, /book/previous
//Use Versioning: Versioning your API allows you to make changes without breaking existing clients.
//This can be done by including the version number in the URL or in the request headers.
//example: /api/v1/users, /api/v2/users


//STATUS CODES -------------------------------------------------
//1xx Informational
//100 - Continue: Server received request headers, client should proceed with request body
//101 - Switching Protocols: Server is switching protocols as requested by client

//2xx Success
//200 - OK: Request successful, response body contains requested data
//201 - Created: Request successful, new resource created
//202 - Accepted: Request accepted for processing but not completed
//204 - No Content: Request successful but no content to return

//3xx Redirection
//301 - Moved Permanently: Resource permanently moved to new URL
//302 - Found: Resource temporarily moved to different URL
//304 - Not Modified: Resource not modified since last request

//4xx Client Error
//400 - Bad Request: Invalid request syntax or malformed request
//401 - Unauthorized: Authentication required or failed
//403 - Forbidden: Server understood request but refuses to authorize
//404 - Not Found: Requested resource not found on server
//405 - Method Not Allowed: HTTP method not supported for this resource
//409 - Conflict: Request conflicts with current state of resource
//422 - Unprocessable Entity: Request well-formed but contains semantic errors
//429 - Too Many Requests: Client sent too many requests in given time

//5xx Server Error
//500 - Internal Server Error: Generic server error occurred
//501 - Not Implemented: Server doesn't support functionality required
//502 - Bad Gateway: Server received invalid response from upstream server
//503 - Service Unavailable: Server temporarily unavailable
//504 - Gateway Timeout: Server didn't receive timely response from upstream


//MIDDLEWARE ----------------------------------------
//Middleware functions are functions that execute during the request-response cycle
//They have access to request (req), response (res), and next middleware function (next)
//Middleware can: execute code, modify req/res objects, end request-response cycle, call next middleware

//MIDDLEWARE FUNCTION STRUCTURE
//function middlewareName(req, res, next) {
//  // Execute code
//  // Modify req or res
//  next(); // Call next middleware (IMPORTANT!)
//}

//TYPES OF MIDDLEWARE---------------------------

//1. APPLICATION-LEVEL MIDDLEWARE
//Applied to entire app using app.use()
//Example:
//app.use((req, res, next) => {
//  console.log('Time:', Date.now());
//  next();
//});

//2. ROUTER-LEVEL MIDDLEWARE  
//Applied to specific routes using router.use()
//Example:
//const router = express.Router();
//router.use('/users', authMiddleware);

//3. ERROR-HANDLING MIDDLEWARE
//Has 4 parameters: (err, req, res, next)
//Example:
//app.use((err, req, res, next) => {
//  console.error(err.stack);
//  res.status(500).send('Something broke!');
//});

//4. BUILT-IN MIDDLEWARE
//express.json() - Parse JSON bodies
//express.urlencoded() - Parse URL-encoded bodies  
//express.static() - Serve static files
//Example:
//app.use(express.json());
//app.use(express.static('public'));

//5. THIRD-PARTY MIDDLEWARE
//cors, helmet, morgan, compression, etc.
//Example:
//const cors = require('cors');
//app.use(cors());

//MIDDLEWARE EXECUTION ORDER---------------------------
//Middleware executes in the order it's defined
//Example:
//app.use(middleware1); // Runs first
//app.use(middleware2); // Runs second
//app.get('/users', middleware3, handler); // middleware3 runs before handler

//COMMON MIDDLEWARE EXAMPLES---------------------------

//Logging Middleware
//app.use((req, res, next) => {
//  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
//  next();
//});

//Authentication Middleware
//const authMiddleware = (req, res, next) => {
//  const token = req.headers.authorization;
//  if (!token) {
//    return res.status(401).json({ error: 'No token provided' });
//  }
//  // Verify token logic here
//  next();
//};

//Request Time Middleware
//app.use((req, res, next) => {
//  req.requestTime = new Date().toISOString();
//  next();
//});

//Body Size Limit Middleware
//app.use(express.json({ limit: '10mb' }));

//MIDDLEWARE PATTERNS---------------------------

//Conditional Middleware
//app.use('/admin', (req, res, next) => {
//  if (req.user && req.user.role === 'admin') {
//    next();
//  } else {
//    res.status(403).json({ error: 'Admin access required' });
//  }
//});

//Multiple Middleware in Route
//app.get('/protected', authMiddleware, logMiddleware, (req, res) => {
//  res.json({ message: 'Protected route accessed' });
//});

//Middleware with Parameters
//const rateLimiter = (maxRequests) => {
//  return (req, res, next) => {
//    // Rate limiting logic
//    next();
//  };
//};
//app.use(rateLimiter(100));

//IMPORTANT MIDDLEWARE RULES---------------------------
//Always call next() unless you're ending the response
//Order matters - middleware runs in sequence
//Error middleware must have 4 parameters
//Use return when sending response to avoid calling next()
//Middleware can be async/await compatible

//COMMON BUILT-IN MIDDLEWARE---------------------------
//app.use(express.json()); // Parse JSON request bodies
//app.use(express.urlencoded({ extended: true })); // Parse form data
//app.use(express.static('public')); // Serve static files from 'public' directory
//app.use(express.raw()); // Parse raw request bodies
//app.use(express.text()); // Parse text request bodies
