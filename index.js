import fs from "fs";

const challengePath = `./challenges/${process.argv[2]}.js`;

if (!process.argv[2]) {
    console.log("Please provide a challenge day as argument!")
    process.exit(0);
}

if (isNaN(parseInt(process.argv[2]))) {
    console.log("Please provide a number as argument!")
    process.exit(0);
}

fs.stat(challengePath, (err) => {
    // no error = file exists so we can continue
    if (err === null) {
        import(challengePath);
    }
    else {
        console.log("This challenge day doesn't exist... yet 👀")
    }
})


