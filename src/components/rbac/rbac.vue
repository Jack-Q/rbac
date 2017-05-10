<template>
  <ui-tabs type="icon" fullwidth>
    <ui-tab icon="person">
      <user></user>
    </ui-tab>
  
    <ui-tab icon="group">
      <role></role>
    </ui-tab>
  
    <ui-tab icon="pan_tool">
      <permission></permission>
    </ui-tab>
  
    <ui-tab icon="domain">
      <data-record></data-record>
   </ui-tab>
  </ui-tabs>
</template>

<script>

import DataRecord from './data-record';
import Permission from './permission';
import Role from './role';
import User from './user';

export default {
  components: {
    User, Role, Permission, DataRecord,
  },
};
</script>

<style>

</style>
