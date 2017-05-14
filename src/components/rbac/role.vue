<template>
  <tab-content fullHeight>
    <div slot="toolbar">
      <ui-button color="primary" @click="role = addRole()">Add New Role</ui-button>
    </div>
    <div slot="list" v-for="r in getRoles()" @click="role = r">
      <aside-link :active="r === role">
        {{r.name}}
        <span slot="sub">{{r.id}}</span>
      </aside-link>
    </div>
    <template v-if="role">
      <div class="detail">
        <div>Role Detail</div>
        <ui-textbox floating-label label="Role ID" disabled v-model="role.id"></ui-textbox>
        <ui-textbox floating-label label="Role Name" placeholder="role name" v-model="role.name"></ui-textbox>
      </div>
      <div class="actions">
        <ui-button @click="role = deleteRole(role)">delete role</ui-button>
        <ui-button @click="removeAllUsers(role)">remove from all users</ui-button>
        <ui-button @click="removeAllPermissions(role)">remove all permissions</ui-button>
      </div>
      <div class="main-panel">
        <div class="action-panel">
          <div class="action-group">
            <ui-select has-search icon="person" placeholder="Search users" :keys="{ label: 'name', value: 'id' }" :options="getUsersExRole(role)" v-model="userToAdd"></ui-select>
            <ui-button :disabled="!userToAdd" @click="addRoleToUser(role, userToAdd)">Add to User</ui-button>
          </div>
          <div class="action-item-list">
            <div v-for="u in getUsersInRole(role)" class="roleUser">
              <span>{{u.name}} ({{u.id}})</span>
              <ui-icon-button icon="remove" type="secondary" @click="removeRoleFromUser(role, u)"></ui-icon-button>
            </div>
          </div>
        </div>
        <div class="action-panel">
          <div class="action-group">
            <ui-select has-search icon="security" placeholder="Search permissions" :keys="{ label: 'label', value: 'id' }" :options="getPermissionsWithoutRole(role)" v-model="permissionToAdd">
            </ui-select>
            <ui-button :disabled="!permissionToAdd" @click="addPermissionToRole(permissionToAdd.permission, role)">Attach to Role</ui-button>
          </div>
          <div class="action-item-list">
            <div v-for="p in getPermissionsWithRole(role)" class="roleUser">
              <span>{{getPermissionLabel(p)}} ({{p.id}})</span>
              <ui-icon-button icon="remove" type="secondary" size="small" @click="removePermissionFromRole(p, role)"></ui-icon-button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="tip">
      Select a role or create a new one from left
    </div>
  </tab-content>
</template>

<script>
import store from '~/store/index';
import TabContent from './tab-content';
import AsideLink from './aside-link';

const getInRole = r => store.userRoles.filter(ur => ur.role === r.id);
const getWithRole = r => store.rolePermissions.filter(rp => rp.role === r.id);

export default {
  data() {
    return {
      role: "",
      userToAdd: "",
      permissionToAdd: "",
    };
  },
  beforeUpdate() {
    if (this.role && this.userToAdd && getInRole(this.role).find(ur => ur.user === this.userToAdd.id)) {
      this.userToAdd = "";
    }
    if (this.role && this.permissionToAdd && getWithRole(this.role).find(rp => rp.permission === this.permissionToAdd.permission.id)) {
      this.permissionToAdd = "";
    }
  },
  methods: {
    getRoles: () => store.roles,
    addRole: () => store.addRole("New Role"),
    getUsersInRole: (r) => getInRole(r).map(ur => store.users.find(u => u.id === ur.user)),
    getUsersExRole: (r) => store.users.filter(u => !getInRole(r).some(ur => ur.user === u.id)),
    addRoleToUser: (r, u) => store.addRoleToUser(r, u),
    removeRoleFromUser: (r, u) => store.removeRoleFromUser(r, u),
    getPermissionsWithRole: (r) => getWithRole(r).map(rp => store.permissions.find(p => p.id === rp.permission)),
    getPermissionsWithoutRole: (r) => store.permissions.filter(p => !getWithRole(r).some(rp => rp.permission === p.id))
      .map(p => ({ id: p.id, label: store.getPermissionLabel(p), permission: p })),
    addPermissionToRole: (p, r) => store.addPermissionToRole(p, r),
    removePermissionFromRole: (p, r) => store.removePermissionFromRole(p, r),
    getPermissionLabel: (p) => store.getPermissionLabel(p),

    deleteRole: (r) => store.removeRole(r),
    removeAllUsers: (r) => store.removeUserRoleByRole(r),
    removeAllPermissions: (r) => store.removeRolePermissionByRole(r),
  },
  components: {
    TabContent,
    AsideLink,
  }
};
</script>

<style scoped>
.main-panel {
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100%;
}

.main-panel>div {
  flex: 1;
}

.roleUser {
  min-width: 120px;
  display: inline-block;
  background: rgba(120, 120, 120, 0.2);
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
}

.ui-icon-button {
  background: rgba(255, 120, 150, 0.7);
  transition: all ease 400ms;
}

.ui-icon-button--type-primary.ui-icon-button:hover {
  background: rgba(255, 90, 120, 0.9);
}

</style>
