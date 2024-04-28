const mysql = require("mysql2");

// Create a pool
const pool = mysql.createPool({
    connectionLimit: 10, // adjust as per your requirement
    host: 'sql.freedb.tech',
    user: 'freedb_idan44',
    password: 'fPecEFr5!hvhuM3',
    database:'freedb_IdanDB',
    port: '3306'
});

// Get connection from the pool
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }

    console.log('Connected to database');

    // Use the connection for querying

    // Example query
    connection.query('SELECT * FROM USER', (error, results, fields) => {
        if (error) {
            console.error('Error executing query: ', error);
            connection.release(); // Release the connection back to the pool
            return;
        }

        // Do something with the results

        // Release the connection back to the pool
        connection.release();
    });
});

// Export the pool
module.exports = pool;
