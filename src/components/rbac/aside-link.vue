<template>
  <div ref="asideLink" :class="['aside-link', {active: this.active}]">
    <slot></slot>
    <div class="sub">
      <slot name="sub"></slot>
    </div>
    <ui-ripple-ink trigger="asideLink"></ui-ripple-ink>
  </div>
</template>

<script>
export default  {
  props: {
    active: { required: true, type: Boolean },
  },
}
</script>

<style scoped>
.aside-link {
  position: relative;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 1.125rem;
  padding: 0;
  margin: 0;
  transition: all ease 400ms;
}

.aside-link.active {
  background: #ccc;
}

.sub{
  font-size: 0.5em;
  line-height: 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
