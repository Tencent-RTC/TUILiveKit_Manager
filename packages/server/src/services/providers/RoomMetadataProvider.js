const BaseProvider = require('./BaseProvider');

class RoomMetadataProvider extends BaseProvider {
  constructor(name = 'room-metadata') {
    super(name);
  }

  normalize(roomInfo = {}) {
    const customInfo = roomInfo.CustomInfo || roomInfo.customInfo || roomInfo.extension || {};
    return typeof customInfo === 'object' && customInfo !== null ? customInfo : {};
  }

  apply(roomPayload = {}, extension = {}) {
    if (!extension || typeof extension !== 'object') return roomPayload;
    return {
      ...roomPayload,
      CustomInfo: {
        ...(roomPayload.CustomInfo || {}),
        ...extension,
      },
    };
  }
}

module.exports = RoomMetadataProvider;
