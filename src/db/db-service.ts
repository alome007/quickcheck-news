import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {ToDoItem} from '../models';
import {User} from '../screens/Auth/types';

const tableName = 'userData';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'user-data.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  try {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      email TEXT NOT NULL
  );`;
    await db.executeSql(query);
  } catch (e) {
    // console.log(e.message);
  }
};

export const getUser = async (
  email: string,
  password: string,
  db: SQLiteDatabase,
): Promise<User[]> => {
  try {
    const users: User[] = [];
    const results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE email = '${email}' AND password = '${password}'`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        users.push(result.rows.item(index));
      }
    });

    console.log(users)
    return users;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get user !!!');
  }
};

export const saveUserData = async (db: SQLiteDatabase, user: User) => {
  const insertQuery = `INSERT INTO ${tableName}(username, password, email)
    VALUES ('${user.username}', '${user.password}', '${user.email}');`;

  return db.executeSql(insertQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};
