<template>
  <div class="cabr">
    <header>
      CABR Mgmt. System
    </header>
    <div class="content">
      <div v-for="r in getResources()" class="resource">
        <ui-button>{{r.name}}({{r.id}})</ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '~/store/index';

export default {
  methods: {
    getResources: () => store.resources,
  }
};
</script>

<style scoped>
.cabr{
  position: relative;
  overflow: hidden;
  background: #bcd;
}
header{
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}
.content{
  padding-top: 40px;
}
.resource{
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.resource button{
  flex: 1;
  margin: 0 20px;
}
</style>
