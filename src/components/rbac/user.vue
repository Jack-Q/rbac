<template>
  <tab-content>
    <div slot="list" v-for="u in getUsers()" @click="user = u">
      <aside-link :active="u === user">
        {{u.name}}
        <span slot="sub">{{u.id}}</span>
      </aside-link>
    </div>
    <div v-if="user">
      <ui-textbox floating-label label="Name" placeholder="user name" v-model="user.name"></ui-textbox>
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
      user: null,
    };
  },
  methods: {
    getUsers: () => store.users,
  },
  components: {
    TabContent,
    AsideLink,
  }
};
</script>

<style scoped>

</style>
