<template>
  <div class="container">
    <a href="https://github.com/Jack-Q/rbac" title="fork me on GitHub" class="github-corner" aria-label="View source on Github">
      <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body">
        </path>
      </svg>
    </a>
    <div class="header">
      <div class="header-left">
        <span>Role</span>
        <span>Bases</span>
        <span>Access</span>
        <span>Control</span>
      </div>
      <a href="https://github.com/Jack-Q/" class="header-right">
        <svg height="20" aria-label="code" viewBox="0 0 14 16" version="1.1" width="17" role="img">
          <path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path>
        </svg>
        with
        <svg height="20" aria-label="love" viewBox="0 0 12 16" version="1.1" width="15" role="img">
          <path d="M11.2 3c-.52-.63-1.25-.95-2.2-1-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-.95.05-1.69.38-2.2 1-.52.61-.78 1.28-.8 2 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.02-.72-.28-1.39-.8-2.02V3z"></path>
        </svg>
        by Jack Q
      </a>
    </div>
    <div class="main">
      <div class="main-left" :class="{ active: mode === 'cabr' }">
        <div class="cabr" :class="{drop: getEvent()}">
          <cabr></cabr>
        </div>
        <div class="event" :class="{drop: getEvent()}">
          <event-view></event-view>
        </div>
      </div>
      <div class="main-right" :class="{ active: mode === 'rbac' }">
        <rbac></rbac>
      </div>
    </div>
    <div class="switcher">
      <div @click="mode='cabr'" :class="{ active: mode === 'cabr' }">Events</div>
      <div @click="mode='rbac'" :class="{ active: mode === 'rbac' }">RBAC Management</div>
    </div>
  </div>
</template>

<script>
import store from '~/store';

import Cabr from './cabr/cabr';
import Rbac from './rbac/rbac';
import EventView from './event/event-view';

export default {
  name: 'main-frame',
  data() {
    return {
      mode: 'cabr',
    };
  },
  methods: {
    getEvent: () => store.event,
  },
  components: {
    Cabr, Rbac, EventView,
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  padding-top: 40px;
  overflow: hidden;
  background: #ccc;
  transition: all ease 400ms;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

a.github-corner {
  transform: rotate(45deg);
  width: 114px;
  height: 114px;
  position: fixed;
  top: -57px;
  right: -57px;
  z-index: 100;
  overflow: hidden;
}


.github-corner svg {
  fill: #70B7FD;
  color: #fff;
  position: absolute;
  top: 0;
  border: 0;
  right: 0;
  z-index: 10000;
  transform: rotate(-45deg) translate(-64px, 40px);
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0)
  }
  20%,
  60% {
    transform: rotate(-25deg)
  }
  40%,
  80% {
    transform: rotate(10deg)
  }
}

@media (max-width:500px) {
  .github-corner:hover .octo-arm {
    animation: none
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 0;
  display: flex;
  background: #ccc;
  line-height: 40px;
  overflow: hidden;
}

.header-left {
  text-align: left;
  padding-left: 30px;
  flex: 1;
  font-size: 1.3em;
  transition: all cubic-bezier(0.68, -0.55, 0.265, 1.55) 800ms;
  letter-spacing: -1px;
  word-spacing: -5px;
  min-width: 100px;
}

.header-left span {
  display: inline-block;
  overflow: hidden;
  max-width: 18px;
  letter-spacing: 8px;
  transition: inherit;
}

.header-left:hover {
  padding-left: 20px;
  word-spacing: 2px;
  min-width: 270px;
}

.header-left:hover span {
  max-width: 150px;
  letter-spacing: -1px;
}

.header-right {
  display: block;
  padding-right: 70px;
  color: #999;
  transition: all ease 400ms;
  color: inherit;
  text-decoration: none;
}

.header-right:hover {
  padding-left: 30px;
  padding-right: 85px;
  color: #666;
  background: rgba(255, 255, 255, 0.25);
}


.header-right svg {
  fill: #999;
  vertical-align: middle;
}

.main {
  display: flex;
  height: 100%;
  position: relative;
}

.main>div {
  transition: all ease 400ms;
}

.main-left {
  width: 330px;
  flex: 1;
  position: relative;
  padding: 10px;
  box-shadow: inset 0 0 120px 20px rgba(20, 20, 20, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.cabr {
  border-radius: 30px;
  box-shadow: inset 0 0 20px 5px rgba(20, 20, 20, 0.3);
  height: 100%;
  width: 100%;
  transition: all ease 400ms;
  transform-origin: bottom center;
  max-height: 550px;
  max-width: 350px;
}

.cabr.drop {
  pointer-events: none;
  transform: rotateX(50deg);
  filter: blur(2px);
}

.event {
  left: 0;
  right: 0;
  position: absolute;
  padding: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
  width: 100%;
  transition: all ease 400ms;
  transform: translateY(-300px);
  pointer-events: none;
  opacity: 0;
  height: 100%;
  max-height: 450px;
  max-width: 400px;
}

.event.drop {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}

.main-right {
  width: 400px;
  max-width: 1200px;
  flex: 4;
}

.switcher {
  position: absolute;
  bottom: -40px;
  height: 40px;
  display: flex;
  align-items: stretch;
  width: 100%;
  background-color: #ccc;
  transition: all ease 400ms;
  z-index: 10;
}

.switcher div {
  flex: 1;
  line-height: 40px;
  position: relative;
  color: #999;
  transition: all ease 400ms;
  cursor: pointer;
  overflow: hidden;
  height: 40px;
}

.switcher div.active {
  color: #555;
}

.switcher div::after {
  display: block;
  content: '';
  border: transparent 8px solid;
  border-bottom: 8px #555 solid;
  position: absolute;
  left: 50%;
  margin-left: -8px;
  bottom: -10px;
  z-index: 1;
  transition: all ease 400ms;
}

.switcher div.active::after {
  opacity: 1;
  bottom: 0;
}

@media screen and (max-width: 1024px) {
  .main-right {
    font-size: 0.7em;
  }
}

@media screen and (max-width: 800px) {
  .container {
    padding-bottom: 40px;
  }
  .switcher {
    bottom: 0;
  }
  .switcher>div {
    cursor: pointer;
  }
  .main {
    display: block;
  }
  .main>div {
    position: absolute;
    height: 100%;
    width: 100%;
    left: -100%;
    opacity: 0;
    z-index: 1;
  }
  .main>div.active {
    left: 0;
    opacity: 1;
    z-index: 2;
  }
}
</style>
