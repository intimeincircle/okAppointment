//add this code snippet to main.js
const { Worker } = require('worker_threads');

const runService = (workerData) => {
  return new Promise((resolve, reject) => {
    // import workerExample.js script..
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`stopped with  ${code} exit code`));
    });
  });
};

const run = async () => {
  const result = await runService('hello John Doe');
  console.log(result);
};

run().catch((err) => console.error(err));
