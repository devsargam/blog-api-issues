// Application configuration
import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
  jwtSecret: process.env.JWT_SECRET,  
  
  sessionSecret: process.env.SESSION_SECRET,  
  
  // SECURITY ISSUE: API keys exposed in code
  apiKeys: {
    sendgrid: process.env.SENDGRID_API_KEY,  
    stripe: process.env.STRIPE_SECRET_KEY,  
    googleMaps: process.env.GOOGLE_MAPS_API_KEY,
    aws: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,  
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1'
    }
  },
  
  // SECURITY ISSUE: CORS configuration too permissive
  cors: {
    origin: '*',  // Allows any origin - security risk!
    credentials: true,  // Dangerous with origin: '*'
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: '*'  // Too permissive
  },
  
  // SECURITY ISSUE: Debug mode always enabled
  debug: true,  // Should be based on environment
  
  // SECURITY ISSUE: No rate limiting configuration
  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 10000  // Way too high - allows 10k requests per 15 minutes!
  },
  
  // SECURITY ISSUE: File upload without restrictions
  upload: {
    maxFileSize: 100 * 1024 * 1024,  // 100MB - too large!
    allowedMimeTypes: '*',  // Accepts any file type - dangerous!
    destination: './uploads'  // No validation on upload path
  },
  
  // SECURITY ISSUE: Encryption key in plain text
  encryptionKey: 'ThisIsMyEncryptionKey123',
  
  // SECURITY ISSUE: Admin credentials
  defaultAdmin: {
    email: 'admin@blog.com',
    password: 'admin123',  // Default admin password!
    role: 'superadmin'
  },
  
  // SECURITY ISSUE: OAuth secrets exposed
  oauth: {
    google: {
      clientId: '123456789-abcdefghijklmnop.apps.googleusercontent.com',
      clientSecret: 'GOCSPX-actualGoogleClientSecret',  // Secret in code!
      callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    github: {
      clientId: 'Iv1.8a61f19b3a7aba',
      clientSecret: '1234567890abcdef1234567890abcdef12345678',  // GitHub secret exposed!
      callbackURL: 'http://localhost:3000/auth/github/callback'
    }
  },
  
  // SECURITY ISSUE: No HTTPS enforcement
  forceHttps: false,
  
  // SECURITY ISSUE: Cookies without security flags
  cookie: {
    httpOnly: false,  // Should be true
    secure: false,    // Should be true in production
    sameSite: 'none'  // Too permissive
  }
};

// SECURITY ISSUE: Exporting configuration directly
module.exports = appConfig;

// NOTE: All sensitive values should come from environment variables
// Example: process.env.JWT_SECRET || throw new Error('JWT_SECRET not set')