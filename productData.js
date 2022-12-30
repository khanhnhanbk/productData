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
    constructor(id,price,name,description,content,img){
        this.id=id;
        this.price=price;
        this.name=name;
        this.description=description;
        this.content=content;
        this.img=img;
    }

}

// create 100 users
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const users = [];
for (let i = 0; i < 100; i++) {
    let id = i;
    let price = randomNum(100, 1000);
    let name = faker.commerce.productName();
    let description = faker.commerce.productDescription();
    let content = faker.lorem.paragraphs();
    let img = faker.image.image();
    users.push(new Product(id,price,name,description,content,img));
}

// write to file
fs.writeFile('product.json', JSON.stringify(users), (err) => {
    if (err) throw err;
    console.log('Data written to file');
}
);
