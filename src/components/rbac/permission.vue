<template>
  <div class="content">
    <div class="left-panel">
      <div class="left-toolbar">
        <ui-select label="Resource" placeholder="Select an resource" :options="getResources()" v-model="resource" :keys="{label:'id'}"></ui-select>
      </div>
      <div>
        <div v-for="p in getPermissions()" @click="permission = p">
          <aside-link :active="p === permission">{{p.name}}</aside-link>
        </div>
      </div>
    </div>
    <div class="right-panel">
      <div v-if="resource">
        <div>Resource: {{resource.name || "Unnamed"}}({{resource.id}})</div>
        <ui-button color="primary" has-dropdown ref="addResourceButton">
          <ui-menu contain-focus has-icons has-secondary-text slot="dropdown" 
            :options="getUnmappedActions()"
            @select="createPermission(resource, $event)"
            @close="$refs.addResourceButton.closeDropdown()"></ui-menu>
          Add Permission
        </ui-button>
      </div>
      <div v-else>
        Select an resource
      </div>
    </div>
  </div>
</template>

<script>
import store from '~/store/index';

export default {
  data() {
    return {
      resource: null,
      permission: null,
    };
  },
  methods: {
    getPermissions: () => store.permissions,
    getResources: () => store.resources,
    getUnmappedActions: (resource) => ["add", "drop", "create"],
    createPermission: (resource, action) => store.addPermission(resource, action),
  },
  components: {
    'aside-link': {
      props: {
        active: { required: true, type: Boolean },
      },
      template: `
        <div ref="asideLink" :class="['aside-link', {active: this.active}]" >
          <slot></slot>
          <ui-ripple-ink trigger="asideLink" ></ui-ripple-ink>  
        </div>`,
    },
  }
};
</script>

<style scoped>
.content {
  display: flex;
  height: 100%;
}

.left-panel {
  width: 200px;
  background: #eeeeee;
}

.right-panel {
  flex: 1;
}

.aside-link {
  position: relative;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 1.125rem;
  padding: 0;
  margin: 0;
  transition: all ease 400ms;
}

.aside-link.active {
  background: #ccc;
}
</style>
