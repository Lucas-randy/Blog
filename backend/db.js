const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',         // Ton utilisateur PostgreSQL
    host: 'localhost',        // Serveur PostgreSQL
    database: 'Blog',         // Nom de ta base de données
    password: 'Lucas36!!',  // Ton mot de passe PostgreSQL
    port: 5432,               // Port par défaut de PostgreSQL
});

module.exports = pool;
