import User from '~/model/user';
import Role from '~/model/role';
import Permission from '~/model/permission';
import Resource from '~/model/resource';
import UserRole from '~/model/user-role';
import RolePermission from '~/model/role-permission';


class Store {
  constructor() {
    this.users = [];
    this.roles = [];
    this.permissions = [];
    this.userRoles = [];
    this.rolePermissions = [];
    this.resources = [];
  }

  addUser() {
    this.users.push(new User());
  }
  addRole() {
    this.roles.push(new Role());
  }
  addPermission(resource, action) {
    this.permissions.push(new Permission(resource.id, action));
  }
  addResource() {
    this.resources.push(new Resource());
  }
  addRoleToUser(r, u) {
    this.userRoles.push(new UserRole(u.id, r.id));
  }
  removeRoleFromUser(r, u){
    this.userRoles.splice(this.userRoles.findIndex(ur => ur.user === u.id && ur.role === r.id), 1);
  }
  addPermissionToRole(p, r) {
    this.rolePermissions.push(new RolePermission(r.id, p.id));
  }
  removePermissionFromRole(p, r) {
    this.rolePermissions.splice(this.rolePermissions.findIndex(rp => rp.role === r.id && rp.permission === p.id), 1);
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
