const BaseProvider = require('./BaseProvider');

class AuthProvider extends BaseProvider {
  constructor(name = 'auth') {
    super(name);
  }

  isServerConfigured() {
    throw new Error('AuthProvider.isServerConfigured() must be implemented');
  }

  extractCredentials(_req) {
    throw new Error('AuthProvider.extractCredentials() must be implemented');
  }

  shouldSkipAuth(_req) {
    return false;
  }

  getRequestCredentials(_req) {
    return null;
  }

  getServerCredentials() {
    return null;
  }

  createLoginResponse(_params = {}) {
    throw new Error('AuthProvider.createLoginResponse() must be implemented');
  }
}

module.exports = AuthProvider;
