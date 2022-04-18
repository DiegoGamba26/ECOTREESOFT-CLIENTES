import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);