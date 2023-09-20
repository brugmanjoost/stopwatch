# stopwatch
A simple stopwatch for checking durations.

<a name="#1"></a>
## 1. Installation

```sh
$ npm install @brugmanjoost/stopwatch
```

<a name="#2"></a>
## 2. Usage

```
const Stopwatch = require('@brugmanjoost/stopwatch');

let stopwatch = new Stopwatch();
stopwatch.start();

let i = setInterval(() => {
    console.log(`${stopwatch.duration}ms has passed`);
}, 500);

setTimeout(() => {
    console.log(`Stopping stops the counter. Duration is preserved.`);
    stopwatch.stop();
}, 3000);

setTimeout(() => {
    console.log(`Starting again continues the counter.`);
    stopwatch.start();
}, 4500);

setTimeout(() => {
    console.log(`Resetting sets the duration back to 0.`);
    stopwatch.reset();
}, 6000);

setTimeout(() => {
    console.log(`That's all there is.`);
    clearInterval(i);
}, 8000);

```
