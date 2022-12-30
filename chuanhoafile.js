// read json file
const fs = require('fs');
const data = fs.readFileSync('product.json', 'utf8');
function standardize(str) {
    str = str.trim();
    str = str.toLowerCase();
    return str;
}
function chuanHoaFile() {
    let dataArr = JSON.parse(data);
    for (let i = 0; i < dataArr.length; i++) {
        dataArr[i].name = standardize(dataArr[i].name);
        dataArr[i].origin = standardize(dataArr[i].origin);
    }
    fs.writeFile('product.json', JSON.stringify(dataArr), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    }
    );
}
chuanHoaFile();
