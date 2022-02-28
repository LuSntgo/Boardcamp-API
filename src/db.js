import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;
const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default db;