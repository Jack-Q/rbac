<template>
  <ui-tabs type="icon" fullwidth>
    <ui-tab icon="person">
      <user></user>
    </ui-tab>
  
    <ui-tab icon="group">
      <role></role>
    </ui-tab>
  
    <ui-tab icon="security">
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
.ui-tabs__body{
  padding: 0;
  height: 100%;
}
.ui-tabs{
  margin-bottom: 0;
}
.ui-tab{
  height: calc(100vh - 83px);
}
</style>
