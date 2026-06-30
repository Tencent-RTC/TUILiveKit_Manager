const RoomMetadataProvider = require('./RoomMetadataProvider');

class DefaultRoomMetadataProvider extends RoomMetadataProvider {
  constructor() {
    super('default-room-metadata');
  }
}

module.exports = DefaultRoomMetadataProvider;
