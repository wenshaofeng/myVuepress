const fs = require('fs')
let dirpathFiles = fs.readdirSync("../git_note")
let result = dirpathFiles.map((item=>{
    return `"${item.slice(0,-3)}"`
})).join(',')

console.log(result);
