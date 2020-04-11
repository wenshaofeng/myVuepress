const fs = require('fs')
let dirpathFiles = fs.readdirSync("../jsbooks/you_Dont_Know_JavaScript")
let result = dirpathFiles.map((item=>{
    return `"${item.slice(0,-3)}"`
})).join(',')

console.log(result);
