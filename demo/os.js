const os = require("os");

console.log("Operational system:", os.platform());
console.log("Processor arch:", os.arch());
console.log("About processor:", os.cpus());
console.log("Free memory:", os.freemem());
console.log("Total memory:", os.totalmem());
console.log("Home dir:", os.homedir());
console.log("Work time:", os.uptime());
