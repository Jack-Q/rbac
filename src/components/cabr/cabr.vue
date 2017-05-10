<template>
  <div class="cabr">
    <header>
      CABR Mgmt. System
    </header>
    <div v-for="r in getResources()">
      <ui-button>{{r.name}}({{r.id}})</ui-button>
    </div>
  </div>
</template>

<script>
import store from '#';

export default {
  methods: {
    getResources: () => store.resources,
  }
};
</script>

<style scope>
.cabr{
  position: relative;
  overflow: hidden;
  background: #bcd;
}
header{
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>
