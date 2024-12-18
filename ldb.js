class ldb {
    insert(db, key, val) {
        let dbData = JSON.parse(localStorage.getItem(db)) || {};

        if (typeof dbData[key] === "object" && dbData[key] !== null) {
            dbData[key] = { ...dbData[key], ...val };
        } else {
            dbData[key] = val;
        }

        localStorage.setItem(db, JSON.stringify(dbData));
        return true;
    }

    update(db, key, val) {
        let dbData = JSON.parse(localStorage.getItem(db));

        if (dbData && dbData.hasOwnProperty(key)) {
            if (typeof dbData[key] === "object" && dbData[key] !== null) {
                dbData[key] = { ...dbData[key], ...val };
            } else {
                dbData[key] = val;
            }

            localStorage.setItem(db, JSON.stringify(dbData));
            return true;
        }

        return false;
    }

    delete(db, key) {
        let dbData = JSON.parse(localStorage.getItem(db));

        if (dbData && dbData.hasOwnProperty(key)) {
            delete dbData[key];
            localStorage.setItem(db, JSON.stringify(dbData));
            return true;
        }

        return false;
    }

    get(db, key) {
        let dbData = JSON.parse(localStorage.getItem(db));

        if (dbData && dbData.hasOwnProperty(key)) {
            return dbData[key];
        }

        return null;
    }

    search(db, query, key = null) {
        let dbData = JSON.parse(localStorage.getItem(db));

        if (dbData) {
            let results = [];

            for (let k in dbData) {
                if (key && k === key && dbData[k].toString().includes(query)) {
                    results.push({ [k]: dbData[k] });
                } else if (!key && dbData[k].toString().includes(query)) {
                    results.push({ [k]: dbData[k] });
                }
            }

            return results;
        }

        return [];
    }

    convertJSON(db) {
        return JSON.parse(localStorage.getItem(db)) || {};
    }
}
