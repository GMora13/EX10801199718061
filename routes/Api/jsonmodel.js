var fs = require ('fs');

module.exports ={
    "write": function(data, handler){
        fs.writerFile('data.json', JSON.stringify(data), hand1)
    },
    "read": function(handler){
        fs.readFile('data.json', handler);
    }
}