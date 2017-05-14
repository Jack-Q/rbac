<template>
  <div class="content" :style="{height: fullHeight?'100%':''}">
    <div class="left-panel">
      <div class="left-toolbar">
        <slot name="toolbar"></slot>
      </div>
      <div class="list">
        <slot name="list"></slot>
      </div>
    </div>
    <div class="right-panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullHeight: { required: false, type: Boolean },
  },

}
</script>

<style scoped>
.content {
  display: flex;
  height: 100%;
  flex: 1;
  overflow: hidden;
}

.left-panel {
  width: 200px;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
}

.right-panel {
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
}

.list{
  overflow: auto;
}

@media screen and (max-width: 1024px){
  .left-panel{
    width: 130px;
    flex-shrink: 0;
  }
  .right-panel {
    width: calc(100% - 130px);
  }
}
@media screen and (max-width: 640px){
  .left-panel {
    width: 80px;
  }

  .right-panel {
    width: calc(100vw - 80px);
  }
}
</style>
