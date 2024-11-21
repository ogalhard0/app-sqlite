import * as SQLite from 'expo-sqlite';

const initDb = async () => {
    const db = await SQLite.openDatabaseAsync('appsqlite.db');
    await db.execAsync(`
        
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS keys (id INTEGER PRIMARY KEY, number INTEGER,
        user INTEGER, date timestamp DEFAULT CURRENT_TIMESTAMP);

        `);
        return db;
};
export {initDb};