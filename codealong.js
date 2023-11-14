const fs = require("fs");
const action=precess.argv[2];
function printAll(){
fs.readFile("./data.json","utf8"), (err, data) => {
    const notes=JSON.parse(data);
    console.log("here are all your notes:\n\n")
    for(let i=0; i<notes.length; i++){
        console.log(notes[i].title + "\n");
        console.log(notes[i].text + "\n");

    }
}
}
