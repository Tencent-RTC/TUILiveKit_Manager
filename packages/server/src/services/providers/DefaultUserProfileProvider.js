const UserProfileProvider = require('./UserProfileProvider');

class DefaultUserProfileProvider extends UserProfileProvider {
  constructor() {
    super('default-user-profile');
  }

  async getProfiles(userIds = []) {
    return new Map(userIds.filter(Boolean).map((userId) => [userId, {
      userId,
      nick: userId,
      avatarUrl: '',
    }]));
  }
}

module.exports = DefaultUserProfileProvider;
