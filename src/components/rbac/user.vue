<template>
  <tab-content fullHeight>
    <div slot="toolbar">
      <ui-button color="primary" @click="user = addUser()">Add New User</ui-button>
    </div>
    <div slot="list" v-for="u in getUsers()" @click="user = u">
      <aside-link :active="u === user">
        {{u.name}}
        <span slot="sub">{{u.id}}</span>
      </aside-link>
    </div>
    <template v-if="user">
      <div class="detail">
        <div>User Detail</div>
        <ui-textbox floating-label label="ID" disabled v-model="user.id"></ui-textbox>
        <ui-textbox floating-label label="Name" placeholder="user name" v-model="user.name"></ui-textbox>
      </div>
      <div class="actions">
        <ui-button @click="login(user)">log in CABR</ui-button>
        <ui-button @click="user = deleteUser(user)">delete user account</ui-button>
        <ui-button @click="removeAllRoles(user)">remove all roles</ui-button>
      </div>
      <div class="action-group">
        <ui-select has-search icon="group" placeholder="Search role to add" :keys="{ label: 'name', value: 'id' }" :options="getRolesNotUser(user)" v-model="roleToAdd"></ui-select>
        <ui-button ref="btn-add" :disabled="!roleToAdd" @click="addRoleToUser(roleToAdd, user)" icon="add" size="small" >
        </ui-button>
      </div>
      <div class="action-item-list">
        <div v-for="r in getRolesOfUser(user)" class="roleUser">
          <span>{{r.name}} ({{r.id}})</span>
          <ui-icon-button icon="remove" type="secondary" size="small" @click="removeRoleFromUser(r, user)"></ui-icon-button>
        </div>
      </div>
    </template>
    <div v-else class="tip">
      Select a user or create a new one from left
    </div>
  </tab-content>
</template>

<script>
import store from '~/store/index';
import TabContent from './tab-content';
import AsideLink from './aside-link';

const getRoles = u => store.userRoles.filter(ur => ur.user === u.id);

export default {
  data() {
    return {
      user: "",
      roleToAdd: "",
    };
  },
  beforeUpdate() {
    if (this.user && this.roleToAdd && getRoles(this.user).find(ur => ur.role === this.roleToAdd.id)) {
      this.roleToAdd = "";
    }
  },
  methods: {
    getUsers: () => store.users,
    addUser: () => store.addUser("New User"),
    getRolesOfUser: (u) => getRoles(u).map(ur => store.roles.find(r => r.id === ur.role)),
    getRolesNotUser: (u) => store.roles.filter(r => !getRoles(u).some(ur => ur.role === r.id)),
    addRoleToUser: (r, u) => store.addRoleToUser(r, u),
    removeRoleFromUser: (r, u) => store.removeRoleFromUser(r, u),

    login: u => store.login(u),
    deleteUser: (u) => store.removeUser(u),
    removeAllRoles: (u) => store.removeUserRoleByUser(u),
  },
  components: {
    TabContent,
    AsideLink,
  }
};
</script>

<style scoped>
.roleUser {
  min-width: 120px;
  display: inline-block;
  background: rgba(120, 120, 120, 0.2);
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  line-height: 32px;
}

.roleUser span {
  height: 2.25em;
}

.ui-icon-button {
  background: rgba(255, 120, 150, 0.7);
  transition: all ease 400ms;
}

.ui-icon-button--type-primary.ui-icon-button:hover {
  background: rgba(255, 90, 120, 0.9);
}


</style>
