import pkg from 'pg';
const { Pool } = pkg;


const db = new Pool({
  host: 'aws-0-us-east-2.pooler.supabase.com',
  user: 'postgres.pnpzdzqhuytzbttrwbvb',
  password: process.env.PSQL, 
  database: 'postgres',
  port: 6543,
  ssl: { rejectUnauthorized: false }
});

export default db;