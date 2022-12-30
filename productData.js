const { faker } = require('@faker-js/faker');
const fs = require('fs');
// generator data
class Product{
    /*id int AI PK 
price int 
name varchar(255) 
description varchar(1000) 
content varchar(10000) 
img varchar(255)*/
    constructor(id,name,oldPrice, newPrice, saled, origin,  saleOff){
        this.id = id;
        this.name = name;
        this.oldPrice = oldPrice;
        this.newPrice = newPrice;
        this.saled = saled;
        this.origin = origin;
        this.saleOff = saleOff;
    }

}

// create 100 users
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// read file list.txt
const list = fs.readFileSync('list.txt', 'utf8');
const listArr = list.split('\n');
console.log(listArr);
const users = [];
for (let i = 0; i < 100; i++) {
    let id = i;
    let name = listArr[i];
    let oldPrice = randomNum(100, 1000) * 1000;
    let newPrice = randomNum(100, 1000) * 1000;
    let saled = randomNum(0, 20);
    let origin = faker.address.country();
    let saleOff = randomNum(0, 100);
    users.push(new Product(id,name,oldPrice, newPrice, saled, origin,  saleOff));
}

// write to file
fs.writeFile('product.json', JSON.stringify(users), (err) => {
    if (err) throw err;
    console.log('Data written to file');
}
);
