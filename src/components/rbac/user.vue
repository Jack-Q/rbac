<template>
  <tab-content>
    <div slot="list" v-for="u in getUsers()" @click="user = u">
      <aside-link :active="u === user">{{u.name}}</aside-link>
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
