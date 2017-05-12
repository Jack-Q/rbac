<template>
  <tab-content>
    <div slot="list" v-for="r in getRoles()" @click="role = r">
      <aside-link :active="r === role">{{r.name}}</aside-link>
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
      role: null,
    };
  },
  methods: {
    getRoles: () => store.roles,
  },
  components: {
    TabContent,
    AsideLink,
  }
};
</script>

<style scoped>

</style>
