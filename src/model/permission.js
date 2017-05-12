import shortid from 'shortid';

export default class Permission {
  constructor(resource, action) {
    this.id = shortid();
    this.resource = resource;
    this.action = action;
  }

  toString() {
    return `${this.action} ${this.resource}`;
  }
}
