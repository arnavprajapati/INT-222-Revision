const fs = require("fs");

// Step 1: Read config.json
fs.readFile("config.json", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    // Convert string → object
    const config = JSON.parse(data);

    // Step 2: Update values
    config.mode = "production";
    config.version = "2.0";

    // Step 3: Write updated config back
    fs.writeFile(
        "config.json",
        JSON.stringify(config, null, 2),
        "utf-8",
        (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }
            console.log("Config updated successfully!");
        }
    );
});
