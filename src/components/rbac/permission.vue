<template>
  <tab-content fullHeight>
    <div slot="toolbar">
      <ui-button color="primary" @click="resource = addResource()">Add New Resource</ui-button>
    </div>
    <div slot="list" v-for="r in getResources()" @click="resource = r">
      <aside-link :active="r === resource">
        {{r.name || "unnamed"}}
        <span slot="sub">{{r.id}}</span>
      </aside-link>
    </div>
    <template v-if="resource">
      <div class="detail">
        <div>Resource Detail</div>
        <ui-textbox floating-label label="Resource ID" disabled v-model="resource.id"></ui-textbox>
        <ui-textbox floating-label label="Resource Name" placeholder="resource name" v-model="resource.name"></ui-textbox>
      </div>
      <div class="actions">
        <ui-button @click="resource = deleteResource(resource)">delete resource</ui-button>
        <ui-button @click="addAllPermissions(resource)">add all permissions</ui-button>
        <ui-button @click="deleteAllPermissions(resource)">remove all permission</ui-button>
      </div>
      <tab-content>
        <ui-button slot="toolbar" v-if="getUnmappedActions(resource).length" color="primary" has-dropdown ref="addResourceButton">
          <ui-menu contain-focus has-icons has-secondary-text slot="dropdown" :options="getUnmappedActions(resource)" @select="createPermission(resource, $event)" @close="$refs.addResourceButton.closeDropdown()"></ui-menu>
          Add Permission
        </ui-button>
        <ui-button slot="toolbar" v-if="!getUnmappedActions(resource).length" color="primary" has-dropdown disabled>
          All actions are mapped
        </ui-button>
        <div slot="list" v-for="p in getPermissions(resource)" @click="permission = p">
          <aside-link :active="p === permission">{{p.action}}</aside-link>
        </div>
        <template v-if="permission">
          <div class="permission-header">
            <div>Permission: {{permission.action}} {{resource.name}}</div>
            <ui-button @click="removeAllRoles(permission)">remove all roles</ui-button>
            <ui-button @click="permission = deletePermission(permission)">delete permission</ui-button>
          </div>
          <div class="actions">
            <div class="action-group">
              <ui-select has-search icon="group" placeholder="Search role to attach" :keys="{ label: 'name', value: 'id' }" :options="getRolesWithoutPermission(permission)" v-model="roleToAdd"></ui-select>
              <ui-button :disabled="!roleToAdd" @click="addPermissionToRole(permission, roleToAdd)">Attach to Role</ui-button>
            </div>
          </div>
          <div>
            <div v-for="r in getRolesWithPermission(permission)" class="roleUser">
              <span>{{r.name}} ({{r.id}})</span>
              <ui-icon-button icon="remove" type="primary" size="small" @click="removePermissionFromRole(permission, r)"></ui-icon-button>
            </div>
          </div>
        </template>
      </tab-content>
    </template>

    <div v-else class="tip">
      Select a resource or create a new one from left
    </div>
  </tab-content>
</template>

<script>
import store from '~/store/index';
import TabContent from './tab-content';
import AsideLink from './aside-link';

const getRoles = p => store.rolePermissions.filter(rp => rp.permission === p.id);

export default {
  data() {
    return {
      resource: "",
      permission: "",
      roleToAdd: "",
    };
  },
  beforeUpdate() {
    if (this.resource && this.permission && this.permission.resource !== this.resource.id) {
      this.permission = "";
    }
    if (this.permission && this.roleToAdd && getRoles(this.permission).find(rp => rp.role === this.roleToAdd.id)) {
      this.roleToAdd = "";
    }
  },
  methods: {
    getPermissions: (r) => store.permissions.filter(p => p.resource === r.id),
    getResources: () => store.resources,
    addResource: () => store.addResource("New Resource"),
    getUnmappedActions: (r) => store.getUnmappedActions(r),
    getRolesWithPermission: (p) => getRoles(p).map(rp => store.roles.find(r => r.id === rp.role)),
    getRolesWithoutPermission: (p) => store.roles.filter(r => !getRoles(p).some(rp => rp.role === r.id)),
    createPermission: (resource, action) => store.addPermission(resource, action),
    addPermissionToRole: (p, r) => store.addPermissionToRole(p, r),
    removePermissionFromRole: (p, r) => store.removePermissionFromRole(p, r),
    deletePermission: (p) => store.removePermission(p),
    deleteResource: (r) => store.removeResource(r),
    addAllPermissions: (r) => store.addAllPermissions(r),
    deleteAllPermissions: (r) => store.removePermissionByResource(r),
    removeAllRoles: (p) => store.removeRolePermissionByPermission(p),
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
}

.ui-icon-button {
  background: rgba(255, 120, 150, 0.7);
  transition: all ease 400ms;
}

.ui-icon-button--type-primary.ui-icon-button:hover {
  background: rgba(255, 90, 120, 0.9);
}

.detail {
  text-align: left;
  padding: 30px 40px 0;
  max-width: 450px;
}

.actions {
  text-align: left;
  padding: 20px 30px 0;
  border-bottom: 1px solid #eee;
}

.action-group {
  margin: 0 20px;
  display: flex;
}

.action-group .ui-select {
  flex: 1;
}

.permission-header{
  text-align: left;
  padding: 20px 20px 0;
  background: #eee;
}
</style>
