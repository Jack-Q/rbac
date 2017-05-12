<template>
  <tab-content>
    <div slot="list" v-for="r in getResources()" @click="resource = r">
      <aside-link :active="r === resource">
        {{r.name || "unnamed"}}
        <span slot="sub">{{r.id}}</span>
      </aside-link>
    </div>
    <div v-if="resource">
      <div>Resource: {{resource.name || "Unnamed"}}({{resource.id}})</div>
      <ui-button color="primary" has-dropdown ref="addResourceButton">
        <ui-menu contain-focus has-icons has-secondary-text slot="dropdown" :options="getUnmappedActions(resource)" @select="createPermission(resource, $event)" @close="$refs.addResourceButton.closeDropdown()"></ui-menu>
        Add Permission
      </ui-button>
      <tab-content>
        <div slot="list" v-for="p in getPermissions()" @click="permission = p">
          <aside-link :active="p === permission">{{p.toString()}}</aside-link>
        </div>
      </tab-content>
    </div>
    <div v-else>
      Select an resource
    </div>
  </tab-content>
</template>

<script>
import store from '~/store/index';
import TabContent from './tab-content';
import AsideLink from './aside-link';

export default {
  data() {
    return {
      resource: null,
      permission: null,
    };
  },
  methods: {
    getPermissions: (resource) => store.permissions,
    getResources: () => store.resources,
    getUnmappedActions: (resource) => ["add", "drop", "create"],
    createPermission: (resource, action) => store.addPermission(resource, action),
  },
  components: {
    TabContent,
    AsideLink,
  }
};
</script>

<style scoped>

</style>
