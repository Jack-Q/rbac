<template>
  <div>
    <div>
      Data
    </div>
    <div class="tables">
      <div class="tab">
        <div>User Data</div>
        <table>
          <thead></thead>
          <tbody>
            <tr v-for="i in getUsers()">
              <td>{{i.id}}</td>
              <td>{{i.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab">
        <div>User Role Assignemnt</div>
        <table>
          <thead></thead>
          <tbody>
            <tr v-for="i in getUserRoles()">
              <td>{{i.user}}</td>
              <td>{{i.role}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab">
        <div>Role Data</div>
        <table>
          <thead></thead>
          <tbody>
            <tr v-for="i in getUsers()">
              <td>{{i.id}}</td>
              <td>{{i.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab">
        <div>Permission Role Assignemnt</div>
        <table>
          <thead></thead>
          <tbody>
            <tr v-for="i in getRolePermissions()">
              <td>{{i.role}}</td>
              <td>{{i.permission}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab">
        <div>Permission Data</div>
        <table>
          <thead></thead>
          <tbody>
            <tr v-for="i in getPermissions()">
              <td>{{i.id}}</td>
              <td>{{i.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab">
        <div>Resorce Data</div>
        <table>
          <thead></thead>
          <tbody>
            <tr v-for="i in getResources()">
              <td>{{i.id}}</td>
              <td>{{i.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import store from '~/store/index';

export default {
  methods: {
    getUsers: () => store.users,
    getUserRoles: () => store.userRoles,
    getRoles: () => store.roles,
    getRolePermissions: () => store.rolePermissions,
    getPermissions: () => store.permissions,
    getResources: () => store.resources,
  },
};
</script>

<style scoped>
.tables {
  display: flex;
  overflow-x: auto;
  width: 100%;
  height: 100%;
}

.tab {
  flex: 1;
  min-width: 200px;
  height: 100%;
}
</style>
