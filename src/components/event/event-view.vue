<template>
  <div v-if="getEvent()" class="event-frame">
    <div class="result" :class="{success: getEvent().success}">
      <ui-icon>done</ui-icon>
      <div class="message">{{getEvent().success ? 'success' : getEvent().result()}}</div>
    </div>
    <dl>
      <dt>event</dt>
      <dd>{{getEvent().action}} {{getEvent().resource.name}} {{getEvent().userId ? 'by ' + getEvent().user.name : ''}}</dd>
      <dt>user</dt>
      <dd v-if="getEvent().user">{{getEvent().user.name}}</dd>
      <dd v-if="!getEvent().user">Anonymous User</dd>
      <dt>action</dt>
      <dd>{{getEvent().action}}</dd>
      <dt>permission</dt>
      <dd v-if="getEvent().permission">{{getEvent().permission.id}}</dd>
      <dd v-if="!getEvent().permission">No permission configured for this action</dd>
      <template v-if="getEvent().success">
        <dt>role</dt>
        <dd>
          <span v-for="r in getEvent().claims">{{r.name}}</span>
        </dd>
      </template>
    </dl>
    <div>
      <ui-button @click="handleEvent()">close</ui-button>
    </div>
  </div>
  <div v-else class="empty">
  
  </div>
</template>

<script>
import store from '~/store';

export default {
  methods: {
    getEvent: () => store.event,

    handleEvent: () => store.handleEvent(),
  }
};
</script>

<style scoped>
.event-frame {
  background: rgba(220, 220, 220, 0.6);
  width: 100%;
  border-radius: 20px;
  z-index: 100;
}

.result{
  border-radius: 20px 20px 0 0;
  height: 80px;
  background: rgba(255,100,130,0.8);
}
.result.success {
  background: #5f5;
  background: rgba(100,255,130,0.8);
}
</style>
