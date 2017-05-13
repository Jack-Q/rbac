import shortid from 'shortid';

export default class User {
  constructor(name) {
    this.id = shortid();
    this.name = name || 'anonymous';
  }
}
