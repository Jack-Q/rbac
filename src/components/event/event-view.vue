<template>
  <div v-if="getEvent()" class="event-frame">
    <div class="result" :class="{success: getEvent().success}">
      <ui-icon v-if="getEvent().success">done</ui-icon>
      <ui-icon v-if="!getEvent().success">do_not_disturb</ui-icon>
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
  box-shadow: 0 0 20px 3px rgba(20, 20, 20, 0.3);
}

.result {
  color: #fff;
  text-shadow: 0 0 4px rgba(50, 50, 60, 0.7);
  border-radius: 20px 20px 0 0;
  background: rgba(255, 100, 130, 0.8);
}

.result.success {
  background: #5f5;
  background: rgba(70, 255, 140, 0.8);
}

.result .ui-icon {
  font-size: 3em;
  margin: 10px auto 0;
}

.message {
  line-height: 40px;
  border-top: dotted 1px #ccc;
  margin: 0 20px;
  font-size: 0.7em;
  padding: 0;
}

dl{
  text-align: left;
  border-bottom: dotted 1px #aaa;
  padding: 10px;
  margin: 0 20px;
}
dt{
  font-size: 0.9em;
  position: absolute;
  background: #ccc;
  padding: 0 10px;
  height: 20px;
  border-radius: 10px 10px 0 0;
  margin-top: 10px;
}
dd{
  border-top: solid 1px #ccc;
  margin: 30px 0 0;
  font-size: 0.8em;
}
</style>
