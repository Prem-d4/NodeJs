// SINGLE THREADED:---------------------------------
// Node.js was designed to build scalable network applications.Using a single thread simplifies development(no need for complex thread synchronization or locking mechanisms) and fits well with JavaScript's single-threaded nature (as in browsers).
// How it works:
// It uses one main thread(the Event Loop) to handle all JavaScript execution, and offloads time - consuming operations(like file system access or database calls) to background workers managed by libuv(a C++ library under Node.js).


//EVENT DRIVEN:---------------------------------------------
// Event - driven means that Node.js doesn’t wait around for things to finish.Instead, it registers callbacks or event listeners and continues execution.When an event(like a file being read or data being received) occurs, the callback is triggered.
// Think of it like a restaurant:
// The chef(Node.js) takes an order(request), hands it to the kitchen(worker threads), and immediately moves on to take another order.When the food(data) is ready, the kitchen calls the chef back to serve it.


// NON-BLOCKING I/O:-----------------------------------------
// Non - blocking I / O means that when Node.js performs input / output(like reading a file, accessing a DB, or making an API call), it doesn’t wait for the result.It continues executing other code, and the result is handled asynchronously via callbacks, Promises, or async / await.
//example:
// If Node.js was blocking, handling one request(e.g., getting user data from DB) would stop all others until it's done.
// Instead, Node.js handles all 1000 requests concurrently using the event loop, delegating I/O operations to the background.


// EVENT LOOP WORKING:------------------------
//             ┌────────────────────────────┐
//             │   Incoming HTTP Request    │
//             └────────────┬───────────────┘
//                          │
//                          ▼
//                ┌────────────────────┐
//                │   Event Loop(JS)  │  🧠 Main Thread
//                └────────┬───────────┘
//                         │
//     ┌───────────────────┴─────────────────────┐
//     │                                         │
//     ▼                                         ▼
// [Quick JS Work][Async I / O Task(DB, File, Network)]
//                                        │
//                                        ▼
//                            ┌────────────────────────┐
//                            │ libuv Thread Pool(C++)│
//                            └─────────┬──────────────┘
//                                      │
//                          ┌───────────▼────────────┐
//                          │   Callback Queued      │
//                          └───────────┬────────────┘
//                                      │
//                                      ▼
//                           ←←← Event Loop picks it up


//GLOBAL OBJECTS, BUILT-IN OBJECTS, AND GLOBAL FUNCTIONS IN NODE.JS -----------------------
// AbortController                   AbortSignal                       AggregateError
// Array                             ArrayBuffer                       Atomics
// BigInt                            BigInt64Array                     BigUint64Array
// Blob                              Boolean                           BroadcastChannel
// Buffer                            ByteLengthQueuingStrategy         CompressionStream
// CountQueuingStrategy              Crypto                            CryptoKey
// CustomEvent                       DOMException                      DataView
// Date                              DecompressionStream               Error
// EvalError                         Event                             EventTarget
// File                              FinalizationRegistry              Float32Array
// Float64Array                      FormData                          Function
// Headers                           Infinity                          Int16Array
// Int32Array                        Int8Array                         Intl
// Iterator                          JSON                              Map
// Math                              MessageChannel                    MessageEvent
// MessagePort                       NaN                               Navigator
// Number                            Object                            Performance
// PerformanceEntry                  PerformanceMark                   PerformanceMeasure
// PerformanceObserver               PerformanceObserverEntryList      PerformanceResourceTiming
// Promise                           Proxy                             RangeError
// ReadableByteStreamController      ReadableStream                    ReadableStreamBYOBReader
// ReadableStreamBYOBRequest         ReadableStreamDefaultController   ReadableStreamDefaultReader
// ReferenceError                    Reflect                           RegExp
// Request                           Response                          Set
// SharedArrayBuffer                 String                            SubtleCrypto
// Symbol                            SyntaxError                       TextDecoder
// TextDecoderStream                 TextEncoder                       TextEncoderStream
// TransformStream                   TransformStreamDefaultController  TypeError
// URIError                          URL                               URLSearchParams
// Uint16Array                       Uint32Array                       Uint8Array
// Uint8ClampedArray                 WeakMap                           WeakRef
// WeakSet                           WebAssembly                       WebSocket
// WritableStream                    WritableStreamDefaultController   WritableStreamDefaultWriter
// _                                 _error                            a
// assert                            async_hooks                       atob
// b                                 btoa                              buffer
// child_process                     clearImmediate                    clearInterval
// clearTimeout                      cluster                           console
// constants                         crypto                            decodeURI
// decodeURIComponent                dgram                             diagnostics_channel
// dns                               domain                            encodeURI
// encodeURIComponent                escape                            eval
// events                            fetch                             fs
// global                            globalThis                        http
// http2                             https                             inspector
// isFinite                          isNaN                             module
// navigator                         net                               os
// parseFloat                        parseInt                          path
// perf_hooks                        performance                       process
// punycode                          querystring                       queueMicrotask
// readline                          repl                              require
// setImmediate                      setInterval                       setTimeout
// stream                            string_decoder                    structuredClone
// sys                               timers                            tls
// trace_events                      tty                               undefined
// unescape                          url                               util
// v8                                vm                                wasi
// worker_threads                    zlib

// __proto__                         hasOwnProperty                    isPrototypeOf
// propertyIsEnumerable              toLocaleString                    toString
// valueOf



// require('fs');require - built in function used to import modules


//CALLBACK FUNCTION:-------------------------------------
// A callback function is a function that is passed as an argument to another function and is executed after the completion of that function.


//CALLBACK HELL:-------------------------------------
// Callback hell refers to the situation where multiple nested callbacks make the code hard to read and maintain. It often occurs when dealing with asynchronous operations in JavaScript, leading to deeply nested structures that can be difficult to follow. 
// To avoid callback hell, can use Promises or async/await syntax, which allows for more readable and manageable asynchronous code.


//HEADERS:--------------------------------------------------
// key value pairs sent between client and server
// Meta information about response or request
            //kind of data
            //format
            //cache
            //authentication
            //origin


//TYPES OF HEADERS:--------------------------------------------
//Request Headers: 
        //Client ---> Server 
        //about client or request

//Response Headers: 
        //Server ---> Client 
        //about response or server

//General Headers: 
        //Both 
        //Metadata for req/res

//Entity Headers: 
        //Both 
        //About the body of the request/response



//HTTP HEADERS:--------------------------------------------------
// 1.Content - Type
// Purpose: Tells the browser what kind of content is being sent(text / html, application / json, etc.)
// Without it: The browser might guess(incorrectly) and display content the wrong way.

//2.X-Powered-By
// Purpose: Tells the client what technology you're using (e.g., Node.js, Express, PHP).
// Can be hidden for security reasons(don’t advertise tech stack).
// Use case: Sometimes used for internal tracking or framework validation.

//3.Strict-Transport-Security (HSTS)
// Purpose: Forces browser to only use HTTPS for future requests.
// Prevents man -in -the - middle attacks over HTTP.
// Use case: Banking, e - commerce sites must use this.
//example :
// const https = require('https');
// const server = https.createServer(options,(req,res) =>{
// if (pathName === '/strict') {
//         res.writeHead(200, {
//                 'Content-Type': 'text/html',
//                 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
//         });
//         res.end("<h1>Strict Transport Security is enabled</h1>");
// }}

// 4.X-Content-Type-Options: nosniff
// Purpose: Prevents the browser from guessing MIME types.
// Without it, the browser may "sniff" content type and open your JSON as HTML — risky!
// Security against content - type attacks.
// When to Use nosniff
// Use Case	Add nosniff ?
// Serving JSON	        Yes
// Serving JavaScript   Yes
// Serving HTML pages   Yes
// Downloadable files   Yes
// APIs/REST endpoints  Definitely

        //MIME TYPES:
        //Multipurpose Internet Mail Extensions tell the browser what type of file/content it is receiving,
        //File Type	MIME Type
        // HTML	text / html
        // CSS	text / css
        // JS	application / javascript
        // JSON	application / json
        // PNG	image / png
        // JPEG	image / jpeg
        // PDF	application / pdf
        // CSV	text / csv


//5. X-Frame-Options: DENY
//Purpose: Stops your website from being embedded in <iframe> (clickjacking protection).
// Prevents attackers from overlaying buttons over your site.
// Use case: Login pages, dashboards, etc.
// A user is logged into their online banking.
// An attacker sends them to a fake site that embeds the banking site in an iframe, hidden under fake buttons.
// User tries to “play a game,” but unknowingly clicks “Transfer Money” on the real site.
// Value	                       Meaning
// DENY	                               Completely prevents all iframe embedding
// SAMEORIGIN	                       Only allows your site to iframe itself(same domain)
// ALLOW - FROM uri(Deprecated)        Allowed only for a specific URI(not supported in all browsers)

// 6. X-XSS-Protection
// Purpose: Enables browser's built-in cross-site scripting (XSS) protection.
// Somewhat outdated now, but still used for legacy support.

// 7. Content-Security-Policy (CSP)
// Purpose: Controls what scripts, styles, and resources the browser can load.
// A powerful defense against XSS and data injection attacks.
// Example: Block inline JS with Content-Security-Policy: script-src 'self'.
// Only load JavaScript from the same origin(i.e., your domain).
// Block:
// Inline scripts(<script>alert()</script>)
// External JS like CDN scripts unless explicitly allowed.

// 8. Referrer-Policy
// Purpose: Controls how much referrer information is sent in requests.
// Without it, sensitive URLs can leak in external requests.
// Use case: no-referrer ensures privacy of internal paths.
// You Want...	                        Use This Policy
// Max privacy and no referrer at all	no-referrer
// Some info for analytics(only domain)	origin
// Security + some usability	        strict-origin-when-cross-origin

// 9. Cache-Control
// Purpose: Tells browser whether to cache the response and how long.
// Useful for static files (long cache), sensitive data (no-store).
// Use case: Cache-Control: no-store for login and banking pages.
// Use Case	                                Cache-Control
// Banking or login page	                no-store
// Frequently changing API data	                no-cache, must-revalidate
// Versioned static assets (e.g. CSS/JS)	public, max-age=31536000, immutable
// Dynamic HTML content	                        private, no-cache
// Prevent form re-submission	                no-store, no-cache, must-revalidate

// 10. Access-Control-Allow-Origin (CORS)
// Purpose: Allows or blocks cross-origin requests from other domains.
// Prevents unauthorized access to your APIs.
// Use case: Allow example.com to access your API but block others.

//  11. Set-Cookie
// Purpose: Sends a cookie to the browser for session, user tracking, preferences, etc.
//  Essential for login systems.
//  Use with flags like HttpOnly, Secure, SameSite.

//  12. ETag / Vary
// Purpose: Helps in caching and versioning of resources.
//  ETag lets browser check if the file has changed since last time.
//  Vary allows caching different versions based on User-Agent, Accept-Encoding, etc.

//  13. Custom Headers (X-Anything or your own)
// Purpose: You can define your own headers for tracking, logging, debugging, or internal logic.
//  X-Custom-Token, My-Own-Header: my-app.



// url.parse() -------------------
// url.parse() is a built -in method in Node.js(from the url module) that breaks down a full URL string into its individual components like:
// protocol
// hostname
// path
// query parameters(as object)
// hash, etc.
        // req.url: A URL string like /users?id=5&name=John
        // true: This flag tells Node to parse the query string into an object

        // {
        // protocol: null,
        // slashes: null,
        // auth: null,
        // host: null,
        // port: null,
        // hostname: null,
        // hash: null,
        // search: '?id=5&name=john',
        // query: { id: '5', name: 'john' },
        // pathname: '/profile',
        // path: '/profile?id=5&name=john',
        // href: '/profile?id=5&name=john'
        // }


//module.exports ------------------------------
//In Node.js, every file is treated as a separate module.To make something available outside that file(so other files can use it), you export it using module.exports.
// module.exports = what your file sends out (exports).
// require() = how you import another file/module.

// Multiple exports ----------------------
// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// module.exports = {
//   add,
//   subtract
// };

//usage ----
// const math = require('./math');
// console.log(math.add(10, 2));     
// console.log(math.subtract(10, 2)); 


//NPM ----------------------------
// npm stands for Node Package Manager.
// A tool to install/manage packages (libraries) in Node.js.
// A registry (like a big warehouse) of thousands of open-source JavaScript packages.


//PACKAGE.JSON ----------------------------
// It is the heart of any Node.js project. It keeps track of your app's dependencies, scripts, metadata, and project settings.
// npm init          Step-by-step creation
// npm init - y      Create with default values(yes to all)

// {
//   "name": "myapp",
//   "version": "1.0.0",
//   "description": "A test Node.js app",
//   "main": "index.js",
//   "scripts": {
//     "start": "node index.js",
//     "dev": "nodemon index.js"
//   },
//   "dependencies": {
//     "express": "^4.18.2"
//   },
//   "devDependencies": {
//     "nodemon": "^2.0.22"
//   },
//   "author": "john",
//   "license": "ISC"
// }

// Explanation of Each Field
// Field	            Description
// name	                    Your project/package name. Must be unique if publishing to npm registry.
// version	            Follows Semantic Versioning (e.g., 1.2.3 = major.minor.patch).
// description	            Short description of your app.
// main	                    Entry point file (like index.js).
// scripts	            Custom CLI commands like npm start, npm run dev.
// dependencies	            Required packages to run the app.
// devDependencies	    Packages only needed for development (not production).
// author	            Who made the app.
// license	            License type (e.g., ISC, MIT).


//PACKAGE LOCK.JSON ----------------------------
// Automatically created/updated when installing packages.
// Locks exact versions of dependencies and sub-dependencies.
// Ensures consistent installs across systems.
// Your app works the same on all machines (e.g., in dev, CI/CD, production).
// npm uses it as a cache map, so future installs are much faster.

//Regular Dependency ------- 
// npm install express
// "dependencies": { 
//   "express": "^4.18.2"
// }

// Dev Dependency -------
// npm install nodemon --save-dev
// "devDependencies": {
//   "nodemon": "^2.0.22"
// }

//Scripts ------ 
//npm start
// npm run dev
// npm run build
// "scripts": {
//   "start": "node index.js",
//   "dev": "nodemon index.js",
//   "build": "webpack --mode production"
// }

//even create own commands


//Versioning rules ----------
// ^1.2.3: Allows minor and patch updates (e.g., 1.2.4, 1.3.0, but not 2.0.0).
// ~1.2.3: Allows only patch updates (e.g., 1.2.4, 1.2.5, but not 1.3.0).
// 1.2.3: Locks to that exact version.

//Installing packages ----------------
// npm install <package-name> - Installs the latest version of a package.
// npm install <package-name>@<version> - Installs a specific version.
// npm install <package-name>@latest - Installs the latest version of a package.
// npm install - Installs all dependencies listed in package.json.

//Removing a Package ----------------
// npm uninstall <package-name> - Removes a package from node_modules and package.json.


//Publishing a Package ----------------
// npm login - Log in to your npm account.
// npm publish - Publish your package to the npm registry.

//npm outdated ----------------
// Lists all packages that are outdated in your project.
// Shows current version, wanted version, and latest version.


//CLIENT SERVER ARCHITECTURE ----------------
// Client-Server Architecture is a model where the client (browser or app) requests resources from a server, which processes the request and sends back the response.

//DNS (Domain Name System) ----------------
// DNS is like the phonebook of the internet. It translates human-readable domain names (like www.example.com) into IP addresses (like https://216.58.211.206:443) that computers use to communicate with each other. It will convert the domain name into an IP address so that the browser can find the server hosting the website.

//EVENT DRIVEN ARCHITECTURE ----------------
// Event-Driven Architecture is a software design pattern where the flow of the program is determined by events or messages. In this model, components communicate by emitting and listening for events, allowing for decoupled and scalable systems. For example, in a web application, a user clicking a button can trigger an event that updates the UI or fetches data from the server without blocking the main thread.
// Event emitter ---> emit events ---> Event listener ---> calls ----> Attached callback function

// // 1. Import events module
// const EventEmitter = require('events');

// // 2. Create an instance of EventEmitter
// const myEmitter = new EventEmitter();

// // 3. Define a listener (event listener)
// myEmitter.on('userLoggedIn', (username) => {
//   console.log(`${username} has logged in!`);
// });

// // 4. Another listener for the same event
// myEmitter.on('userLoggedIn', (username) => {
//   console.log(`Sending welcome email to ${username}`);
// });

// // 5. Emit the event (event emitter)
// myEmitter.emit('userLoggedIn', 'user');
// Output:
// pgsql
// Copy
// Edit
// user has logged in!
// Sending welcome email to user
// Real-World Analogy:
// Imagine a doorbell:

// Someone presses the button (emits an event)

// Inside the house, a bell rings (listener reacts)

// You go open the door (callback is executed)


//STREAMS --------------------------------
// Streams are a powerful way to handle data in Node.js, allowing you to read or write data in chunks rather than loading everything into memory at once. This is especially useful for large files or data sources.

// Types of Streams:
// 1. Readable Streams: Used to read data from a source (e.g., file, network).
// 2. Writable Streams: Used to write data to a destination (e.g., file, network).
// 3. Duplex Streams: Can read and write data (e.g., TCP sockets).      
// 4. Transform Streams: A type of duplex stream that can modify the data as it is read or written (e.g., zlib compression).