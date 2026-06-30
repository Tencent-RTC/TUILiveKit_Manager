class BaseProvider {
  constructor(name) {
    this.name = name;
  }

  isEnabled() {
    return true;
  }
}

module.exports = BaseProvider;
