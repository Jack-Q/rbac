<template>
  <tab-content fullHeight>
    <div slot="list" v-for="u in getUsers()" @click="user = u">
      <aside-link :active="u === user">
        {{u.name}}
        <span slot="sub">{{u.id}}</span>
      </aside-link>
    </div>
    <template v-if="user">
      <ui-textbox floating-label label="Name" placeholder="user name" v-model="user.name"></ui-textbox>
      <div class="actions">
        <div>
          <ui-select has-search label="Role" placeholder="Search role to add" :keys="{ label: 'name', value: 'id' }" :options="getRolesNotUser(user)" v-model="roleToAdd"></ui-select>
          <ui-button :disabled="!roleToAdd" @click="addRoleToUser(roleToAdd, user)">Add Role to User</ui-button>
        </div>
      </div>
      <div>
        <div v-for="r in getRolesOfUser(user)" class="roleUser">
          <div>{{r.name}} ({{r.id}})</div>
          <ui-icon-button icon="remove" type="secondary" @click="removeRoleFromUser(r, user)"></ui-icon-button>
        </div>
      </div>
    </template>
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
    if(this.user && this.roleToAdd && getRoles(this.user).find(ur => ur.role === this.roleToAdd.id)){
      this.roleToAdd = "";
    }
  },
  methods: {
    getUsers: () => store.users,
    getRolesOfUser: (u) => getRoles(u).map(ur => store.roles.find(r => r.id === ur.role)),
    getRolesNotUser: (u) => store.roles.filter(r => !getRoles(u).some(ur => ur.role === r.id)),
    addRoleToUser: (r, u) => store.addRoleToUser(r, u),
    removeRoleFromUser: (r, u) => store.removeRoleFromUser(r, u),
  },
  components: {
    TabContent,
    AsideLink,
  }
};
</script>

<style scoped>

</style>
