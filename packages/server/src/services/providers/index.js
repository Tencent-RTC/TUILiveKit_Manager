const DefaultAuthProvider = require('./DefaultAuthProvider');
const DefaultUserProfileProvider = require('./DefaultUserProfileProvider');
const DefaultRoomMetadataProvider = require('./DefaultRoomMetadataProvider');
const storage = require('../storage');

const registry = new Map();

function registerProvider(type, provider) {
  if (!type || typeof type !== 'string') {
    throw new Error('Provider type must be a non-empty string');
  }
  if (!provider || typeof provider !== 'object') {
    throw new Error(`Provider "${type}" must be an object`);
  }
  registry.set(type, provider);
  return provider;
}

function getProvider(type) {
  return registry.get(type) || null;
}

function initializeDefaultProviders() {
  registerProvider('auth', new DefaultAuthProvider());
  registerProvider('userProfile', new DefaultUserProfileProvider());
  registerProvider('roomMetadata', new DefaultRoomMetadataProvider());
  registerProvider('storage', storage);
}

initializeDefaultProviders();

module.exports = {
  registerProvider,
  getProvider,
  initializeDefaultProviders,
  registry,
};
