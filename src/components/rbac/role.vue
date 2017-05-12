<template>
  <tab-content>
    <div slot="list" v-for="r in getRoles()" @click="role = r">
      <aside-link :active="r === role">
        {{r.name}}
        <span slot="sub">{{r.id}}</span>
      </aside-link>
    </div>
    <div v-if="role">
      <ui-textbox floating-label label="Role Name" placeholder="role name" v-model="role.name"></ui-textbox>
      <div class="actions">
        <div>
          <ui-select has-search label="User" placeholder="Search user to add" :keys="{ label: 'name', value: 'id' }" :options="getUsersExRole(role)" v-model="userToAdd"></ui-select>
          <ui-button :disabled="!userToAdd" @click="addRoleToUser(role, userToAdd)">Add Role to User</ui-button>
        </div>
      </div>
      <div>
        <div v-for="u in getUsersInRole(role)" class="roleUser">
          <div>{{u.name}} ({{u.id}})</div>
          <ui-icon-button icon="remove" type="secondary" @click="removeRoleFromUser(role, u)"></ui-icon-button>
        </div>
      </div>
    </div>
  </tab-content>
</template>

<script>
import store from '~/store/index';
import TabContent from './tab-content';
import AsideLink from './aside-link';

const getInRole = r => store.userRoles.filter(ur => ur.role === r.id);

export default {
  data() {
    return {
      role: "",
      userToAdd: "",
    };
  },
  beforeUpdate() {
    if(this.role && this.userToAdd && getInRole(this.role).find(ur => ur.user === this.userToAdd.id)){
      this.userToAdd = "";
    }
  },
  methods: {
    getRoles: () => store.roles,
    getUsersInRole: (r) => getInRole(r).map(ur => store.users.find(u => u.id === ur.user)),
    getUsersExRole: (r) => store.users.filter(u => !getInRole(r).some(ur => ur.user === u.id)),
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
