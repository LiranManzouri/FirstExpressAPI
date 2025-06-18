import {v4 as uuidv4} from 'uuid';

let storage = {}

class InMemorySharedStorage {
    create(collectionName, item) {
        const newObject = {_id: uuidv4(), ...item};
        if (storage[collectionName]) {
            storage[collectionName].push(newObject);
        } else {
            storage[collectionName] = [newObject];
        }
        return newObject;
    }

    find(collectionName, findFunc) {
        if (storage[collectionName]) {
            return storage[collectionName].filter(item => findFunc(item));
        }
        return [];
    }

    where(collectionName, where) {
        if (storage[collectionName]) {
            return storage[collectionName].filter(item => JSON.stringify(item) === JSON.stringify(where));
        }
        return [];
    }

    remove(collectionName, findFunc) {
        if (storage[collectionName]) {
            let itemsToRemove = storage[collectionName].filter(item => findFunc(item));
            storage[collectionName] = storage[collectionName].filter(item => !findFunc(item));
            return itemsToRemove;
        }
        return [];
    }
}


export {InMemorySharedStorage};