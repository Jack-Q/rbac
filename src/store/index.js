import {} from '../model';

class Store {
  constructor() {
    this.users = [];
    this.roles = [];
    this.permission = [];
    this.userRoles = [];
    this.rolePermission = [];
    this.resources = [];
  }

  addUser() {
    this.users.push({});
  }
}
export default new Store();
