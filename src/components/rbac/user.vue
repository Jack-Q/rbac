<template>
  <div>
    User
  </div>
</template>

<script>
import store from '~/store/index';

export default {
  methods: {
    getUsers: () => store.users,
  },
};
</script>

<style>

</style>
