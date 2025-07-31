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

