const { faker } = require('@faker-js/faker');
const fs = require('fs');
// generator data
class User {
    constructor(fname, lname, age,gender, email, phone, profilePic) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.profilePic = profilePic;
    }
}

// create 100 users
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const users = [];
for (let i = 0; i < 100; i++) {
    let fname = faker.name.firstName();
    let lname = faker.name.lastName();
    let age = randomNum(18, 60);
    let gender = randomNum(0, 1);
    let email = faker.internet.email();
    let phone = faker.phone.phoneNumber();
    let profilePic = faker.image.avatar();
    users.push(new User(fname, lname, age, gender,email,phone,profilePic));
}

// write to file
fs.writeFile('users.json', JSON.stringify(users), (err) => {
    if (err) throw err;
    console.log('Data written to file');
}
);
