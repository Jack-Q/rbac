import User from '~/model/user';
import Role from '~/model/role';
import Permission from '~/model/permission';
import Resource from '~/model/resource';
import UserRole from '~/model/user-role';
import RolePermission from '~/model/role-permission';

const actionList = ["click", "double-click", "right-click"];

class Store {
  constructor() {
    this.users = [];
    this.roles = [];
    this.permissions = [];
    this.userRoles = [];
    this.rolePermissions = [];
    this.resources = [];

    this.loginUser = null;
    this.event = null;
  }

  addUser(n) {
    this.users.push(new User(n));
  }
  addRole(n) {
    this.roles.push(new Role(n));
  }
  getUnmappedActions(r) {
    return actionList.filter(a => !this.permissions.some(p => p.action === a && p.resource === r.id));
  }
  addPermission(resource, action) {
    this.permissions.push(new Permission(resource.id, action));
  }
  addResource(n) {
    this.resources.push(new Resource(n));
  }
  addRoleToUser(r, u) {
    this.userRoles.push(new UserRole(u.id, r.id));
  }
  removeRoleFromUser(r, u) {
    this.userRoles.splice(this.userRoles.findIndex(ur => ur.user === u.id && ur.role === r.id), 1);
  }
  addPermissionToRole(p, r) {
    this.rolePermissions.push(new RolePermission(r.id, p.id));
  }
  removePermissionFromRole(p, r) {
    this.rolePermissions.splice(this.rolePermissions.findIndex(rp => rp.role === r.id && rp.permission === p.id), 1);
  }
  getPermissionLabel(p) {
    return `${p.action} ${this.resources.find(r => r.id === p.resource).name}`;
  }

  login(user) {
    this.loginUser = user;
  }

  logout() {
    this.loginUser = null;
  }

  emit(event) {
    // Event listener handles event
    console.log(event);
    this.event = event;

    // access check
    event.user = event.userId ? this.users.find(u => u.id === event.userId) : "";
    event.resource = this.resources.find(r => r.id === event.resourceId);
    event.permission = this.permissions.find(p => p.resource === event.resourceId && p.action === event.action);
    event.success = false;

    if (!event.user) {
      event.result = () => "no user identity";
      return;
    }

    if (!event.permission) {
      event.result = () => "no permission configured to " + event.action + " " + event.resource.name;
      return;
    }

    event.claims = this.userRoles.filter(ur => ur.user === event.user.id)
      .map(ur => store.roles.find(r => r.id === ur.role))
      .filter(r => store.rolePermissions.some(rp => rp.role === r.id && rp.permission === event.permission.id));
    
    if (event.claims.length == 0) {
      event.result = () => event.user.name + " has no permission";
      return;
    }

    event.result = () => "success";
    event.success = true;
  }

  handleEvent() {
    this.event = null;
  }

}

const store = new Store();

store.addUser('Hind');
store.addUser('Seed');
store.addUser('Leed');
store.addResource('Unload');
store.addResource('Reset');
store.addResource('Term');
store.addRole('Super');
store.addRole('Novel');
store.addRole('Sinkr');

export default store;
