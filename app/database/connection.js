import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

export async function connectDatabase() {

    try {

        const client = await pool.connect();

        console.log("PostgreSQL conectado");

        client.release();

    } catch (error) {

        console.error("Erro ao conectar PostgreSQL:", error);

    }

}

export default pool;