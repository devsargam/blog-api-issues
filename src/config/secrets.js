// SECURITY ISSUE: File named 'secrets.js' - red flag!
// This file should not exist - use environment variables instead

module.exports = {
  // SECURITY ISSUE: Production secrets in code
  production: {
    // Database master password
    dbMasterPassword: '',

    // Root API keys for various services
    masterApiKey: '',

    // Encryption keys and salts
    masterEncryptionKey: '',
    hmacSecret: '',

    // Payment gateway production keys
    stripeSecretKey: '',
    stripeWebhookSecret: '',

    // SMS service credentials
    twilioAccountSid: '',
    twilioAuthToken: '',
    twilioApiKey: '',
    twilioApiSecret: '',

    // Push notification keys
    fcmServerKey: '',
    apnsKey: ''

    // Blockchain/Crypto wallet keys (EXTREMELY DANGEROUS!)
    walletPrivateKey: '',
    walletMnemonic: '',

    // SSL certificates and keys
    sslPrivateKey: '',
    // Admin backdoor codes
    adminBypassCode: '',
    emergencyShutdownCode: '',

    // OAuth app secrets
    oauthApps: {
      mobile: {
        clientSecret: ''
      },
      desktop: {
        clientSecret: ''
      },
      partner: {
        clientSecret: ''
      }
    },

    // Backup encryption passwords
    backupEncryptionPassword: '',

    // Internal service communication keys
    microserviceKeys: {
      authService: '',
      paymentService: '',
      notificationService: ''
    },

    // Root SSH keys (NEVER store these!)
    sshPrivateKey: '',
    // Database encryption keys
    databaseEncryptionKey: '',

    // Token signing keys
    accessTokenPrivateKey: '',
    refreshTokenSecret: ''
  },

  // SECURITY ISSUE: Even development secrets shouldn't be in code
  development: {
    dbPassword: '',
    jwtSecret: '',
    apiKeys: {
      testStripe: '',
      testSendgrid: ''
    }
  },

  // SECURITY ISSUE: Shared secrets across environments
  shared: {
    internalApiKey: 'shared-internal-api-key-all-envs',
    serviceToServiceToken: 'service-communication-token'
  },

  // SECURITY ISSUE: Key rotation history (old keys still accessible!)
  oldKeys: {
    previousJwtSecrets: [
      'old-jwt-secret-1',
      'old-jwt-secret-2',
      'old-jwt-secret-3'
    ],
    previousApiKeys: [
      'old-api-key-1',
      'old-api-key-2'
    ]
  },

  // SECURITY ISSUE: Emergency access codes
  emergencyAccess: {
    superAdminPassword: 'EmergencyAdmin123!',
    systemRecoveryCode: 'RECOVER-SYSTEM-911',
    databaseRootPassword: 'DB-ROOT-ACCESS-2023'
  }
};

// SECURITY ISSUE: Function to get all secrets (easy target for attackers)
module.exports.getAllSecrets = function() {
  return module.exports;
};

// SECURITY ISSUE: Logging secrets on import (in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Loaded secrets:', Object.keys(module.exports));
}

// WARNING: This entire file is a security disaster!
// TODO: 
// 1. DELETE this file immediately
// 2. Move all secrets to environment variables
// 3. Use a proper secret management system (AWS Secrets Manager, HashiCorp Vault, etc.)
// 4. Never commit secrets to version control
// 5. Rotate all exposed keys immediately
