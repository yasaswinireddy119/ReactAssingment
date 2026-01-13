1. Node.js Architecture

Node.js is a server-side JavaScript runtime built to handle multiple client requests efficiently using a non-blocking, event-driven architecture.

Key Idea:

Node.js uses single-threaded JavaScript execution

Heavy or slow tasks are handled asynchronously

This allows Node.js to scale well without creating a new thread for every request

Main Components of Node.js Architecture:

JavaScript Engine (V8)

Node.js Core APIs

Native Bindings

Event Loop

libuv

Thread Pool

2. JavaScript Engine (V8)
What is V8?

V8 is Google’s high-performance JavaScript engine

Written in C++

Converts JavaScript code into machine code

Role in Node.js:

Executes JavaScript code

Handles memory management (garbage collection)

Provides fast execution speed

👉 Without V8, Node.js cannot run JavaScript.

3. Node.js Core APIs
What are Core APIs?

Built-in modules provided by Node.js

Written mostly in JavaScript and C++

Examples:

fs → File system operations

http → Create servers

path → File paths

os → Operating system info

Purpose:

Allow developers to interact with system resources

Avoid writing low-level code

4. Native Bindings
What are Native Bindings?

A bridge between JavaScript code and C/C++ code

Helps Node.js talk to system-level features

Why needed?

JavaScript alone cannot access OS-level APIs

Native bindings connect:

JS → Core APIs → C/C++ → OS

Example:

When you read a file using fs.readFile(), native bindings help JS call C++ code internally.

5. Event Loop
What is the Event Loop?

The heart of Node.js

Manages asynchronous operations

Continuously checks queues and executes callbacks

Why Event Loop is Important:

Enables non-blocking behavior

Allows Node.js to handle thousands of requests with one thread

6. libuv
What is libuv?

A C library used by Node.js

Provides event loop and asynchronous I/O handling

Works across platforms (Windows, Linux, macOS)

Why Node.js Needs libuv

JavaScript does not handle low-level async operations

libuv handles:

File system

Networking

Timers

Thread pool

Responsibilities of libuv

Managing the event loop

Handling async I/O

Managing the thread pool

Scheduling callbacks

7. Thread Pool
What is a Thread Pool?

A group of background threads

Used to execute blocking operations

Why Node.js Uses a Thread Pool

Some operations are slow and blocking

These should not block the main event loop

Operations Handled by Thread Pool:

File system operations (fs)

Cryptography (crypto)

Compression (zlib)

DNS lookup (some cases)

👉 Default thread pool size: 4 threads

8. Worker Threads
What are Worker Threads?

Separate JavaScript threads

Allow running CPU-heavy tasks in parallel

Why Worker Threads are Needed

Main thread should stay responsive

CPU-intensive tasks can block event loop

Worker threads prevent performance issues

Difference: Thread Pool vs Worker Threads
Thread Pool	Worker Threads
Used internally by Node.js	Used explicitly by developer
Runs C++ operations	Runs JavaScript code
Fixed size	Can create multiple threads
Background support	True parallelism
9. Event Loop Queues

Node.js event loop processes tasks from different queues.

a) Macro Task Queue
What it Contains:

setTimeout

setInterval

setImmediate

I/O callbacks

Example:
setTimeout(() => {
  console.log("Macro task");
}, 0);

b) Micro Task Queue
What it Contains:

Promise.then()

Promise.catch()

queueMicrotask

Example:
Promise.resolve().then(() => {
  console.log("Micro task");
});

Execution Priority

👉 Micro Task Queue has higher priority than Macro Task Queue

Order:

Call Stack

Micro Task Queue

Macro Task Queue

