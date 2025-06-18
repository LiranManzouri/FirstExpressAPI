import {InMemoryStorage} from "./OurFirstModule/in-memory-storage.js";
import express from 'express';
const app = express();

let ims = new InMemoryStorage();
ims.create('users', {
    firstName: 'Liran',
    lastName: 'Manzouri',
    email: 'my-email@gmail.com',
    password: '123456',
    age: 20,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    tests: new InMemoryStorage().create('tests', {
        date: new Date("2001/9/11").toLocaleDateString(),
        name: 'Cyber',
        grade: 98,
    })
});
ims.create('users', {
    firstName: 'Roei',
    lastName: 'Bason',
    email: 'my-email@gmail.com',
    password: '123456',
    age: 6,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    tests: new InMemoryStorage().create('tests', {
        date: new Date("2006/12/6").toLocaleDateString(),
        name: 'Clown',
        grade: 12,
    })
});

app.get('/api/users/', (req, res) => {
    res.send(ims.storage['users']);
});

app.get('/api/users/:userId/tests', (req, res) => {
    const {userId} = req.params;
    const user = ims.find('users', user => user._id === userId)[0];
    const tests = user.tests;
    res.send(tests);
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});