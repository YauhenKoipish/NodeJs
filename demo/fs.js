const fs = require("fs"); // file system
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("dir is created");
// });

const filePath = path.join(__dirname, "test", "text.txt");

// fs.writeFile(filePath, "hello nodejs", (err) => {
//   if (err) {
//     throw err;
//   }

//   fs.appendFile(filePath, "\nhello nodejs 2", (err) => {
//     if (err) {
//       throw err;
//     }
//   });
//   console.log("File is created");
// });

fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }

  console.log(`content\n`, content);
});
