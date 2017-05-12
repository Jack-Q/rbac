import shortid from 'shortid';

export default class Resource {
  constructor(name) {
    this.id = shortid();
    this.name = name || "";
  }
}
