import {v4 as uuidv4} from 'uuid';

class InMemoryStorage {
    constructor() {
        this.storage = {}
    }

    create(collectionName, item) {
        const newObject = {_id: uuidv4(), ...item};
        if (this.storage[collectionName]) {
            this.storage[collectionName].push(newObject);
        } else {
            this.storage[collectionName] = [newObject];
        }
        return newObject;
    }

    find(collectionName, findFunc) {
        if (this.storage[collectionName]) {
            return this.storage[collectionName].filter(item => findFunc(item));
        }
        return [];
    }

    where(collectionName, where) {
        if (this.storage[collectionName]) {
            return this.storage[collectionName].filter(item => JSON.stringify(item) === JSON.stringify(where));
        }
        return [];
    }

    remove(collectionName, findFunc) {
        if (this.storage[collectionName]) {
            let itemsToRemove = this.storage[collectionName].filter(item => findFunc(item));
            this.storage[collectionName] = this.storage[collectionName].filter(item => !findFunc(item));
            return itemsToRemove;
        }
        return [];
    }
}


export {InMemoryStorage};