import User from '~/model/user';
import Role from '~/model/role';
import Permission from '~/model/permission';
import Resource from '~/model/resource';
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
    this.users.push(new User());
  }
  addRole() {
    this.roles.push(new Role());
  }
  addPermission() {
    this.permission.push(new Permission());
  }
  addResource() {
    this.resources.push(new Resource());
  }
}

const store = new Store();

store.addUser();
store.addUser();
store.addUser();
store.addResource();
store.addResource();
store.addResource();
store.addRole();
store.addRole();
store.addRole();

export default store;
