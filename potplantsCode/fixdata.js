// Assume the JSON file is named data.json and is located in the same directory as the JavaScript file

const fs = require("fs");

fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Remove newline characters from the data
    data = data.replace(/\n/g, "");

    // Add square brackets to the beginning and end of the data to make it a valid JSON array
    data = "[" + data + "]";

    // Write the fixed data to a new file named fixed_data.json
    fs.writeFile("fixed_data.json", data, "utf-8", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Fixed data has been written to fixed_data.json");
    });
});
