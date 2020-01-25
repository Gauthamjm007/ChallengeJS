const csv = require("csv-parser");
const fs = require("fs");
let result = [];
fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (row) => {
    result.push(row);
    fs.writeFile("./data.json", JSON.stringify(result, null, 4), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  })
  .on("end", () => {
    console.log("File has been created");
    console.log("CSV file successfully processed");
  });

console.log(result);
