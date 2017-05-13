import User from '~/model/user';
import Role from '~/model/role';
import Permission from '~/model/permission';
import Resource from '~/model/resource';
import UserRole from '~/model/user-role';
import RolePermission from '~/model/role-permission';

const actionList = ["click", "double-click", "right-click"];
const localStorageKey = 'rbac_state';

const tables = ['users', 'userRoles', 'roles', 'rolePermissions', 'permissions', 'resources'];

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
    return this.users[this.users.length - 1];
  }
  removeUser(u) {
    this.removeUserRoleByUser(u);
    if (this.loginUser === u) {
      this.logout();
    }
    this.users.splice(this.users.indexOf(u), 1);
  }
  addRole(n) {
    this.roles.push(new Role(n));
    return this.roles[this.roles.length - 1];
  }
  removeRole(r) {
    this.removeUserRoleByRole(r);
    this.removeRolePermissionByRole(r);
    this.roles.splice(this.roles.indexOf(r), 1);
  }
  getUnmappedActions(r) {
    return actionList.filter(a => !this.permissions.some(p => p.action === a && p.resource === r.id));
  }
  addPermission(resource, action) {
    this.permissions.push(new Permission(resource.id, action));
  }
  addAllPermissions(r) {
    this.getUnmappedActions(r).map(a => this.addPermission(r, a));
  }
  removePermission(p) {
    this.removeRolePermissionByPermission(p);
    this.permissions.splice(this.permissions.indexOf(p), 1);
  }
  addResource(n) {
    this.resources.push(new Resource(n));
    return this.resources[this.resources.length - 1];
  }
  removePermissionByResource(r) {
    let p;
    while (p = this.permissions.find(p => p.resource === r.id)) {
      this.removePermission(p);
    }
  }
  removeResource(r) {
    this.removePermissionByResource(r);
    this.resources.splice(this.resources.indexOf(r), 1);
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


  removeUserRoleByUser(u) {
    let i;
    while ((i = this.userRoles.findIndex(ur => ur.user === u.id)) !== -1) {
      this.userRoles.splice(i, 1);
    }
  }
  removeUserRoleByRole(r) {
    let i;
    while ((i = this.userRoles.findIndex(ur => ur.role === r.id)) !== -1) {
      this.userRoles.splice(i, 1);
    }
  }
  removeRolePermissionByRole(r) {
    let i;
    while ((i = this.rolePermissions.findIndex(rp => rp.role === r.id)) !== -1) {
      this.rolePermissions.splice(i, 1);
    }
  }
  removeRolePermissionByPermission(p) {
    let i;
    while ((i = this.rolePermissions.findIndex(rp => rp.permission === p.id)) !== -1) {
      this.rolePermissions.splice(i, 1);
    }
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

  dump() {
    let dump = {};
    tables.map(t => {
      dump[t] = JSON.stringify(this[t]);
    });
    return dump;  
  } 
  
  load(data) {
    this.clearAll();
    tables.map(t => {
      JSON.parse(data[t]).map(i => this[t].push(i));
    });
  }

  saveDump() {
    if (window.localStorage)
      window.localStorage.setItem(localStorageKey, JSON.stringify(this.dump()));
  }

  clearAll() {
    tables.map(t => {this[t].splice(0, this[t].length);});
  }

  resetToInitial() {
    this.clearAll();
    // user
    let a = store.addUser('Alice');
    let b = store.addUser('Bob');
    let c = store.addUser('Cindy');
    let d = store.addUser('Dave');
    let e = store.addUser('Eve');
    // role
    let ra = store.addRole('admin');
    let rb = store.addRole('visitor');
    let rc = store.addRole('supervisor');
    // resource
    let pa = store.addResource('start-trigger');
    let pb = store.addResource('terminator');
    let pc = store.addResource('alternate');
  }
}

const store = new Store();


if (window.localStorage && window.localStorage.getItem(localStorageKey)) {
  try {
    store.load(JSON.parse(window.localStorage.getItem(localStorageKey)));
  } catch (e) {
    store.resetToInitial();
  }
} else {
  store.resetToInitial();
}

if (window.localStorage) {
  setInterval(() => store.saveDump(), 500);
}

export default store;
