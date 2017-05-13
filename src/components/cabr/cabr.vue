<template>
  <div class="cabr">
    <header>
      CABR Mgmt. System
    </header>
    <div class="user" v-if="getUser()">
      Logged as {{getUser().name}}.
    </div>
    <div class="user" v-else>
      guest mode
    </div>
    <div class="resource">
      <div v-for="r in getResources()" @click="handleClick($event, r.id, getUserId())" @dblclick="handleClick($event, r.id, getUserId())" @contextmenu="handleContextMenu($event, r.id,  getUserId())">
        <ui-button>{{r.name}}({{r.id}})</ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '~/store/index';

export default {
  data() {
    return { click: {} };
  },

  methods: {
    getResources: () => store.resources,
    getUser: () => store.loginUser,
    getUserId: () => store.loginUser ? store.loginUser.id : null,
    emitEvent: (e) => console.log(e),

    handleClick(e, resourceId, userId) {
      this.click[resourceId] = this.click[resourceId] || 0;
      this.click[resourceId]++;
      if (this.click[resourceId] == 1) {
        setTimeout(() => {
          if (this.click[resourceId] == 1) {
            store.emit({ action: 'click', resourceId, userId });
          } else {
            store.emit({ action: 'double-click', resourceId, userId });
          }
          this.click[resourceId] = 0;
        }, 200);
      }


    },
    handleContextMenu(e, resourceId, userId) {
      store.emit({ action: 'right-click', resourceId, userId });
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
  height: 100%;
  display: flex;
  flex-direction: column;
}

header {
  height: 60px;
  line-height: 60px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-family: serif;
  background: #8585a5;
  color: #eaeacc;
}

.content {
  padding-top: 60px;
  height: 100%；
}

.user {
  height: 30px;
  line-height: 30px;
  font-size: 0.8em;
  font-weight: 900;
  border-bottom: dotted 1px #999;
}

.resource {
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
}

.resource>div {
  flex: 1;
  margin: 10px 30px;
  position: relative;
}

.resource button {
  width: 100%;
}
</style>
