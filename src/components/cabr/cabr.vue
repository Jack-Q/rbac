<template>
  <div class="cabr">
    <header>
      CABR Mgmt. System
    </header>
    <div class="user" v-if="getUser()">
      Logged as {{getUser().name}}.
      <span class="user-action" @click="logout()">logout</span>
    </div>
    <div class="user" v-else>
      guest mode
      <span class="user-action" :class="{on: showUserList}" @click="showUserList=!showUserList">login</span>
    </div>
    <div class="user-list" :class="{on: showUserList}" @click="showUserList=false">
      <ul>
        <li v-for="u in getUserList()" :key="u.id" @click="login(u), showUserList=false">{{u.name}}</li>
      </ul>
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
    return {
      showUserList: false,
      click: {},
    };
  },

  methods: {
    getResources: () => store.resources,
    getUser: () => store.loginUser,
    getUserList: () => store.users,
    logout: () => store.logout(),
    login: (u) => store.login(u),
    getUserId: () => store.loginUser ? store.loginUser.id : null,

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
  position: relative;
}

.user-action {
  display: block;
  position: absolute;
  right: 0px;
  top: 0;
  padding: 0 10px;
  color: #555;
  transition: all ease 400ms;
  cursor: pointer;
}
.user-action.on {
  background: #555;
  color: #eee;
}

.user-list {
  font-size: 0.8em;
  position: absolute;
  top: 90px;
  width: 100%;
  z-index: 5;
  overflow: hidden;
  pointer-events: none;
  height: calc(100% - 90px);
  transition: all ease 400ms;
}

.user-list.on {
  pointer-events: all;
  background: rgba(35,35, 35, 0.4);
}

.user-list ul {
  transition: all ease 200ms;
  transform: translateY(-100%);
  list-style: none;
  padding: 0;
  margin: 0;
  background: #555;
  opacity: 0;
}

.user-list li {
  opacity: 0;
  padding: 5px 20px;
  display: block;
  color: #eee;
  cursor: pointer;
  transition: color ease 400ms, opacity ease 400ms 100ms;
}

.user-list.on ul, .user-list.on li {
  opacity: 1;
  transform: translateY(0);
}

.user-list li:hover {
  background: #999;
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
