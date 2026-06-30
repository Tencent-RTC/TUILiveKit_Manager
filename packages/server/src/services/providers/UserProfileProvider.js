const BaseProvider = require('./BaseProvider');

class UserProfileProvider extends BaseProvider {
  constructor(name = 'user-profile') {
    super(name);
  }

  async getProfiles(_userIds = []) {
    return new Map();
  }
}

module.exports = UserProfileProvider;
