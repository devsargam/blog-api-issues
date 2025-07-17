// SECURITY ISSUE: File named 'secrets.js' - red flag!
// This file should not exist - use environment variables instead

module.exports = {
  // SECURITY ISSUE: Production secrets in code
  production: {
    // Database master password
    dbMasterPassword: 'ProdDB#Master2023!',

    // Root API keys for various services
    masterApiKey: 'master-api-key-that-controls-everything',

    // Encryption keys and salts
    masterEncryptionKey: '0123456789abcdef0123456789abcdef',
    hmacSecret: 'hmac-secret-key-for-signatures',

    // Payment gateway production keys
    stripeSecretKey: 'sk_lve_4eC39HqLyjWDarjtT1zdp7dc',
    stripeWebhookSecret: 'whsec_D5H8gjk4hKJHGjhg45jhg45jh',

    // SMS service credentials
    twilioAccountSid: 'AC234567890abcdef1234567890abcd',
    twilioAuthToken: '12367890abcdef1234567890abcdef',
    twilioApiKey: 'SK12347890abcdef1234567890abcdef',
    twilioApiSecret: 'abcf1234567890abcdef1234567890',

    // Push notification keys
    fcmServerKey: 'AAAA1234567:APA91bHun4...',
    apnsKey: '-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49...\n-----END PRIVATE KEY-----',

    // Blockchain/Crypto wallet keys (EXTREMELY DANGEROUS!)
    walletPrivateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    walletMnemonic: 'test test test test test test test test test test test junk',

    // SSL certificates and keys
    sslPrivateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA...\n-----END RSA PRIVATE KEY-----',

    // Admin backdoor codes
    adminBypassCode: 'supersecretadminbypass123',
    emergencyShutdownCode: 'EMERGENCY-STOP-NOW',

    // OAuth app secrets
    oauthApps: {
      mobile: {
        clientSecret: 'mobile-app-oauth-secret-key'
      },
      desktop: {
        clientSecret: 'desktop-app-oauth-secret-key'
      },
      partner: {
        clientSecret: 'partner-integration-secret-key'
      }
    },

    // Backup encryption passwords
    backupEncryptionPassword: 'BackupPass123!@#',

    // Internal service communication keys
    microserviceKeys: {
      authService: 'auth-service-internal-key',
      paymentService: 'payment-service-internal-key',
      notificationService: 'notification-service-internal-key'
    },

    // Root SSH keys (NEVER store these!)
    sshPrivateKey: '-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmU...\n-----END OPENSSH PRIVATE KEY-----',

    // Database encryption keys
    databaseEncryptionKey: 'db-encryption-master-key-32bytes',

    // Token signing keys
    accessTokenPrivateKey: '-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIG...\n-----END EC PRIVATE KEY-----',
    refreshTokenSecret: 'refresh-token-signing-secret-key'
  },

  // SECURITY ISSUE: Even development secrets shouldn't be in code
  development: {
    dbPassword: 'devpass123',
    jwtSecret: 'dev-jwt-secret',
    apiKeys: {
      testStripe: 'sk_test_1234567890',
      testSendgrid: 'SG.test_key_1234567890'
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
module.exports.getAllSecrets = function () {
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
