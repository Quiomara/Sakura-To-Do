require('dotenv').config(); 
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', 
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', 
  database: process.env.DB_NAME || 'todo_app'
});

db.connect(err => {
  if (err) {
    console.error('❌ Error de conexión a DB:', err.message);
    process.exit(1); // Detiene la aplicación si hay error
  }
  console.log('✅ Base de datos conectada');
});

module.exports = db;