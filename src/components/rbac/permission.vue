<template>
  <tab-content fullHeight>
    <div slot="list" v-for="r in getResources()" @click="resource = r">
      <aside-link :active="r === resource">
        {{r.name || "unnamed"}}
        <span slot="sub">{{r.id}}</span>
      </aside-link>
    </div>
    <template v-if="resource">
      <div>Resource: {{resource.name || "Unnamed"}}({{resource.id}})</div>
      <div>
        <ui-textbox floating-label label="Resource Name" placeholder="resource name" v-model="resource.name"></ui-textbox>
      </div>
      <tab-content>
        <ui-button slot="toolbar" v-if="getUnmappedActions(resource).length" color="primary" has-dropdown ref="addResourceButton">
          <ui-menu contain-focus has-icons has-secondary-text slot="dropdown" :options="getUnmappedActions(resource)" @select="createPermission(resource, $event)" @close="$refs.addResourceButton.closeDropdown()"></ui-menu>
          Add Permission
        </ui-button>
        <div slot="toolbar" v-if="!getUnmappedActions(resource).length">
          All actions are mapped
        </div>
        <div slot="list" v-for="p in getPermissions(resource)" @click="permission = p">
          <aside-link :active="p === permission">{{p.action}}</aside-link>
        </div>
        <template v-if="permission">
          <div>Permission: {{permission.action}} {{resource.name}}</div>
          <div class="actions">
            <div>
              <ui-select has-search label="Role" placeholder="Search role to attach" :keys="{ label: 'name', value: 'id' }" :options="getRolesWithoutPermission(permission)" v-model="roleToAdd"></ui-select>
              <ui-button :disabled="!roleToAdd" @click="addPermissionToRole(permission, roleToAdd)">Attach Permission to Role</ui-button>
            </div>
          </div>
          <div>
            <div v-for="r in getRolesWithPermission(permission)" class="roleUser">
              <div>{{r.name}} ({{r.id}})</div>
              <ui-icon-button icon="remove" type="secondary" @click="removePermissionFromRole(permission, r)"></ui-icon-button>
            </div>
          </div>
        </template>
      </tab-content>
    </template>
    <div v-else>
      Select an resource
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
    if(this.resource && this.permission && this.permission.resource !== this.resource.id){
      this.permission = "";
    }
    if(this.permission && this.roleToAdd && getRoles(this.permission).find(rp => rp.role === this.roleToAdd.id)){
      this.roleToAdd = "";
    }
  },
  methods: {
    getPermissions: (r) => store.permissions.filter(p => p.resource === r.id),
    getResources: () => store.resources,
    getUnmappedActions: (r) => store.getUnmappedActions(r),
    getRolesWithPermission: (p) => getRoles(p).map(rp => store.roles.find(r => r.id === rp.role)),
    getRolesWithoutPermission: (p) => store.roles.filter(r => !getRoles(p).some(rp => rp.role === r.id)),
    createPermission: (resource, action) => store.addPermission(resource, action),
    addPermissionToRole: (p, r) => store.addPermissionToRole(p, r),
    removePermissionFromRole: (p, r) => store.removePermissionFromRole(p, r),
  },
  components: {
    TabContent,
    AsideLink,
  }
};
</script>

<style scoped>

</style>
