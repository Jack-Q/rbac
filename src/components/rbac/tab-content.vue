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
  flex: 1;
  display: flex;
  flex-direction: column;
}

.list{
  overflow: auto;
}
</style>
