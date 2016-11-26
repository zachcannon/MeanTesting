var fs = require("fs");

if (fs.existsSync('temp')) {
    console.log("Directory exists, removing...");
    if (fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }
    
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
if (fs.existsSync("temp")) {
    process.chdir("temp");
    fs.writeFileSync("temp.txt", "Test data for hte file");
    fs.renameSync("temp.txt", "new.txt");
    console.log("The file has size: " + fs.statSync("new.txt").size);
    console.log("File contents " + fs.readFileSync("new.txt").toString());
}