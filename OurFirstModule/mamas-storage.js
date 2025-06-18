import {InMemoryStorage} from "./in-memory-storage.js";
import {InMemorySharedStorage} from "./in-memory-shared-storage.js";

const ims = new InMemoryStorage();
let u1 = ims.create('users', {username: 'cool_guy111', password: 'c00lz'});
console.log(u1);
let u2 = ims.create('users', {username: 'cool_guy222', password: 'c00lz'});
console.log(u2);

let r = ims.find('users', (item) => item.username === 'cool_guy111');
console.log(r);

let w = ims.where('users', u2);
console.log(w);


let rem = ims.remove('users', (item) => item.username === 'cool_guy222');
console.log(rem);

const imss = new InMemorySharedStorage();
let u1s = imss.create('users', {username: 'cool_guy111', password: 'c00lz'});
console.log(u1s);
let u2s = imss.create('users', {username: 'cool_guy222', password: 'c00lz'});
console.log(u2s);
const imss2 = new InMemorySharedStorage();

let rs = imss2.find('users', (item) => item.username === 'cool_guy111');
console.log(rs);

let ws = imss.where('users', u2s);
console.log(ws);

rs = imss2.find('users', (item) => item.username === 'cool_guy111');
console.log(rs);