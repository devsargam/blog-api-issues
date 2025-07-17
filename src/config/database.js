// Database configuration
const config = {
  development: {
    // SECURITY ISSUE: Hardcoded database credentials
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,  // Hardcoded password - security risk!
    dialect: 'postgres',
    logging: console.log,  // SECURITY ISSUE: Logging sensitive queries in production
  },
  
  production: {
    // SECURITY ISSUE: Production credentials exposed in code
    host: 'prod-db.example.com',
    port: 5432,
    database: 'blog_prod',
    username: 'prod_admin',
    password: 'SuperSecretProdPassword123!',  // Never hardcode production credentials!
    dialect: 'postgres',
    logging: true,  // SECURITY ISSUE: Should be false in production
    
    // SECURITY ISSUE: SSL/TLS not enforced
    ssl: false,
    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  
  test: {
    // SECURITY ISSUE: Using production database for testing
    host: 'prod-db.example.com',
    port: 5432,
    database: 'blog_prod',  // Should use separate test database!
    username: 'test_user',
    password: 'test123',
    dialect: 'postgres',
    logging: false
  }
};

// SECURITY ISSUE: Directly exporting sensitive configuration
module.exports = config;

// TODO: Should use environment variables like:
// host: process.env.DB_HOST || 'localhost',
// password: process.env.DB_PASSWORD,
// etc.