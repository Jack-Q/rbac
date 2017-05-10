import shortid from 'shortid';

export default class User {
  constructor() {
    this.id = shortid();
    this.name = 'anonymous';
  }
}
