<template>
  <div class="content">
    <div class="left-panel">
      <div class="left-toolbar">
      
      </div>
      <div>
        <div v-for="u in getUsers()" @click="user = u">
            <aside-link :active="u === user">{{u.name}}</aside-link>
        </div>
      </div>
    </div>
    <div class="right-panel">

    </div>
  </div>
</template>

<script>
import store from '~/store/index';

export default {
  data(){
    return {
      user: null,
    };
  },
  methods: {
    getUsers: () => store.users,
  },
  components: {
    'aside-link': {
      props: {
        active: { required: true, type: Boolean },
      },
      template: `
        <div ref="asideLink" :class="['aside-link', {active: this.active}]" >
          <slot></slot>
          <ui-ripple-ink trigger="asideLink" ></ui-ripple-ink>  
        </div>`,
    },
  }
};
</script>

<style scoped>
.content{
  display: flex;
}
.left-panel{
  width: 200px;
  background: #eeeeee;
}
.right-panel{
  flex: 1;
}
.aside-link{
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
</style>
