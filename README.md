# ldb (LocalDB) Documentation

A Quick and easy way to use database in client side browser's local-Storage. Created by AJ of TECHSOUL.

## Methods

- **`insert(db, key, val)`**: Inserts or updates a key-value pair in the specified database. If the key already exists and holds an object, it merges the new value.
- **`update(db, key, val)`**: Updates a specific key in the database. If the key contains an object, it merges the new value.
- **`delete(db, key)`**: Deletes a specific key from the database.
- **`get(db, key)`**: Retrieves the value of a specific key from the database.
- **`search(db, query, key)`**: Searches for a query in the database. Optionally filters the search within a specific key.
- **`convertJSON(db)`**: Converts the entire database to a JSON object and returns it.
- **`importJSON(db, json)`**: Imports a JSON object or array into the specified database, overwriting any existing data.

## CDN - Quick Intergration
```
https://cdn.jsdelivr.net/gh/aj-techsoul/LocalDB@latest/ldb.min.js
```

## Usage Example

```javascript
const db = new ldb();

// Insert data
db.insert('users', 'user1', { name: 'AJ', age: 30 });
db.insert('users', 'user2', { name: 'Jane', age: 25 });

// Update data
db.update('users', 'user1', { age: 30 });

// Get data
console.log(db.get('users', 'user1')); // Output: { name: 'AJ', age: 30 }

// Search data
console.log(db.search('users', 'Jane')); // Output: [{ user2: { name: 'Jane', age: 16 } }]

// Delete data
db.delete('users', 'user2');

// Convert database to JSON
console.log(db.convertJSON('users')); // Output: { user1: { name: 'AJ', age: 30 } }

// Import JSON into database
db.importJSON('users', { user3: { name: 'Jane', age: 16 } });
console.log(db.convertJSON('users')); // Output: { user3: { name: 'Alice', age: 28 } }
```
