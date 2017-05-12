<template>
  <div class="content">
    <div class="left-panel">
      <div class="left-toolbar">
        <slot name="toolbar"></slot>
      </div>
      <div>
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

}
</script>

<style scoped>
.content{
  display: flex;
  height: 100%;
}
.left-panel{
  width: 200px;
  background: #eeeeee;
}
.right-panel{
  flex: 1;
}

</style>
