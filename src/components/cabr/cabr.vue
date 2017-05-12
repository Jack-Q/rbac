<template>
  <div class="cabr">
    <header>
      CABR Mgmt. System
    </header>
    <div class="content">
      <div v-for="r in getResources()" class="resource">
        <div @click="handleClick($event, r.id, getUserId())" 
             @dblclick="handleClick($event, r.id, getUserId())" @contextmenu="handleContextMenu($event, r.id,  getUserId())">
          <ui-button>{{r.name}}({{r.id}})</ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '~/store/index';

export default {
  data(){
    return {click: {}};
  },

  methods: {
    getResources: () => store.resources,
    getUser: () => store.loginUser,
    getUserId: () => store.loginUser ? store.loginUser.id : null,
    emitEvent: (e) => console.log(e),

    handleClick(e, resourceId, userId){
      this.click[resourceId] = this.click[resourceId] || 0;
      this.click[resourceId]++;
      if (this.click[resourceId] == 1) {
        setTimeout(() => {
          if(this.click[resourceId] == 1) {
            store.emit({action: 'click', resourceId, userId});
          } else {
            store.emit({action: 'double-click', resourceId, userId});
          }
          this.click[resourceId] = 0;
        }, 300);
      }

      
    },
    handleContextMenu(){
      store.emit({action: 'right-click', resourceId, userId});
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.cabr {
  position: relative;
  overflow: hidden;
  background: #bcd;
}

header {
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}

.content {
  padding-top: 40px;
}

.resource {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.resource button {
  flex: 1;
  margin: 0 20px;
}
</style>
