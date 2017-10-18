<template>
  <div class="panel">
    <div class="er-diagram" :class="{blur: showTable}">
      <div class="svg-header">Entity &amp; Relationship</div>
      <div class="actions">
        <ui-button @click="clearAll()">clear all data</ui-button>
        <ui-button @click="resetToInitial()">reset to initial state</ui-button>
      </div>
      <div class="svg-container">
  
        <svg xmlns="http://www.w3.org/2000/svg" height="232" width="596" version="1.1">
          <g class="svg-table" id="Users" :class="{active: table ==='users'}" @click="selectTable('users')">
            <text style="font-weight:bold;" y="27.5" x="53.237213">
              Users
            </text>
            <text y="51" x="15">
              PK
            </text>
            <text y="51" x="42">
              ID
            </text>
            <text y="66" x="42">
              Name
            </text>
            <path class="bg" d="m 10,10 120,0 0,60 -120,0 0,-60 z" style="stroke:#000000;" />
            <path d="m 37,33 0,37" style="fill:transparent;stroke:#000000;" />
            <path style="stroke:#000000;" d="M 9.9999981,32.999997 130,32.999997" />
          </g>
          <g class="svg-table" id="Roles" :class="{active: table ==='roles'}" @click="selectTable('roles')">
            <path class="bg" d="m 197,10 120,0 0,60 -120,0 0,-60 z" style="stroke:#000000;" />
            <path d="m 197,33 120,0" style="fill:transparent;stroke:#000000;" />
            <path d="m 224,33 0,37" style="fill:transparent;stroke:#000000;" />
            <text style="font-weight:bold;" y="26.412415" x="241.78101">
              Roles
            </text>
            <text y="51" x="202">
              PK
            </text>
            <text y="51" x="229">
              ID
            </text>
            <text y="66" x="229">
              Name
            </text>
          </g>
          <g class="svg-table" id="Permissions" :class="{active: table ==='permissions'}" @click="selectTable('permissions')">
            <path class="bg" d="m 370,10 120,0 0,75 -120,0 0,-75 z" style="stroke:#000000;" />
            <path d="m 370,33 120,0" style="fill:transparent;stroke:#000000;" />
            <path d="m 397,33 0,52" style="fill:transparent;stroke:#000000;" />
            <text style="font-weight:bold;" y="27.5" x="396.32483">
              Permissions
            </text>
            <text y="51" x="375">
              PK
            </text>
            <text y="51" x="402">
              ID
            </text>
            <text y="66" x="375">
              FK
            </text>
            <text y="66" x="402">
              ResourceId
            </text>
            <text y="81" x="402">
              Action
            </text>
          </g>
          <g class="svg-table" id="UserRoles" :class="{active: table ==='userRoles'}" @click="selectTable('userRoles')">
            <path class="bg" d="m 106,162 106,0 0,60 -106,0 0,-60 z" style="stroke:#000000;" />
            <path d="m 106,185 106,0" style="fill:transparent;stroke:#000000;" />
            <path d="m 152,185 0,37" style="fill:transparent;stroke:#000000;" />
            <text style="font-weight:bold;" y="179.5" x="129.73721">
              UserRoles
            </text>
            <text y="203" x="111">
              PK,FK
            </text>
            <text y="203" x="157">
              UserID
            </text>
            <text y="218" x="111">
              PK,FK
            </text>
            <text y="218" x="157">
              RoleID
            </text>
          </g>
          <g class="svg-table" id="RolePermissions" :class="{active: table ==='rolePermissions'}" @click="selectTable('rolePermissions')">
            <path class="bg" d="m 274,162 144,0 0,60 -144,0 0,-60 z" style="stroke:#000000;" />
            <path d="m 274,185 144,0" style="fill:transparent;stroke:#000000;" />
            <path d="m 320,185 0,37" style="fill:transparent;stroke:#000000;" />
            <text style="font-weight:bold;" y="179.5" x="300">
              RolePermissions
            </text>
            <text y="203" x="279">
              PK,FK
            </text>
            <text y="203" x="325">
              RoleID
            </text>
            <text y="218" x="279">
              PK,FK
            </text>
            <text y="218" x="325">
              PermissionID
            </text>
          </g>
          <g class="svg-table" id="Resources" :class="{active: table ==='resources'}" @click="selectTable('resources')">
            <path class="bg" d="m 466,162 120,0 0,60 -120,0 0,-60 z" style="stroke:#000000;" />
            <path d="m 466,185 120,0" style="fill:transparent;stroke:#000000;" />
            <path d="m 493,185 0,37" style="fill:transparent;stroke:#000000;" />
            <text style="font-weight:bold;" y="179.5" x="499.5">
              Resources
            </text>
            <text y="203" x="471">
              PK
            </text>
            <text y="203" x="498">
              ID
            </text>
            <text y="218" x="498">
              Name
            </text>
          </g>
          <g id="Linkages" style="fill:transparent;stroke:#000000;">
            <path d="m 138.00002,33.041496 a 7.9990792,8.0599664 0 0 1 7.99908,8.059966 l 0,120.899498 m -15.99816,-128.959464 7.99908,0" />
            <path d="m 146,148 -7,14" />
            <path d="m 146,148 7,14" />
            <path d="m 139,140 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" style="fill:#fff;" />
            <path d="m 139,140 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" />
            <path d="m 135.09672,27 0,14" />
            <path d="m 197.00185,32.917125 -19.00256,0 m 0,0 a 8.0010792,7.8828113 0 0 0 -8.00108,7.882811 l 0,121.198224" />
            <path d="m 170,148 -7,14" />
            <path d="m 170,148 7,14" />
            <path d="m 163,140 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" style="fill:#fff;" />
            <path d="m 163,140 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" />
            <path d="m 190,38 0,-14" />
            <path d="m 317.00095,33.041509 4.9993,0 m 0,0 a 7.9988707,8.0599672 0 0 1 7.99887,8.059967 l 0,120.899504" />
            <path d="m 330,148 -7,14" />
            <path d="m 330,148 7,14" />
            <path d="m 323,140 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" style="fill:#fff;" />
            <path d="m 323,140 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" />
            <path d="m 323.32709,27 0,14" />
            <path d="m 370.00167,32.725427 -8.00163,0 m 0,0 a 8.001628,7.8945288 0 0 0 -8.00163,7.894529 l 0,121.378384" />
            <path d="m 354,148 -7,14" />
            <path d="m 354,148 7,14" />
            <path d="m 347,140 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" style="fill:#fff;" />
            <path d="m 347,140 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" />
            <path d="m 363.19226,40 0,-14" />
            <path d="m 537.99945,161.80831 0,-120.539684 m 0,0 a 7.9998138,8.0359792 0 0 0 -7.99982,-8.035979 l -39.99907,0" />
            <path d="m 504,33.0387 -14,-7" />
            <path d="m 503.80774,33.34583 -14,7" />
            <path d="m 505,34 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" style="fill:#fff;" />
            <path d="m 505,34 c 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 z" />
            <path d="m 531,155 14,0" />
          </g>
        </svg>
      </div>
      <div class="er-overlay" :class="{active: showTable}"  @click="showTable = false"></div>
    </div>
    <div class="tables" :class="{active: showTable}">
      <div class="close"><ui-icon-button icon="close" type="secondary" @click="showTable = false"></ui-icon-button></div>
      <div v-if="table==='users'" class="tab">
        <div class="tbl-caption">User Data</div>
        <div class="tbl-header">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table>
            <tbody>
              <tr v-for="i in getUsers()">
                <td class="id">{{i.id}}</td>
                <td>{{i.name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="table==='userRoles'" class="tab">
        <div class="tbl-caption">User Role Assignemnt</div>
        <div class="tbl-header">
          <table>
            <thead>
              <tr>
                <th>UserID</th>
                <th>RoleID</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table>
            <tbody>
              <tr v-for="i in getUserRoles()">
                <td class="id">{{i.user}}</td>
                <td class="id">{{i.role}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="table==='roles'" class="tab">
        <div class="tbl-caption">Role Data</div>
        <div class="tbl-header">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table>
            <tbody>
              <tr v-for="i in getRoles()">
                <td class="id">{{i.id}}</td>
                <td>{{i.name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="table==='rolePermissions'" class="tab">
        <div class="tbl-caption">Permission Role Assignemnt</div>
        <div class="tbl-header">
          <table>
            <thead>
              <tr>
                <th>RoleID</th>
                <th>PermissionID</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table>
            <tbody>
              <tr v-for="i in getRolePermissions()">
                <td class="id">{{i.role}}</td>
                <td class="id">{{i.permission}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="table==='permissions'" class="tab">
        <div class="tbl-caption">Permission Data</div>
        <div class="tbl-header">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>ResourceID</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table>
            <tbody>
              <tr v-for="i in getPermissions()">
                <td class="id">{{i.id}}</td>
                <td class="id">{{i.resource}}</td>
                <td>{{i.action}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="table==='resources'" class="tab">
        <div class="tbl-caption">Resource Data</div>
        <div class="tbl-header">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table>
            <tbody>
              <tr v-for="i in getResources()">
                <td class="id">{{i.id}}</td>
                <td>{{i.name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '~/store/index';

export default {
  data() {
    return {
      table: 'users',
      showTable: false,
    };
  },
  methods: {
    getUsers: () => store.users,
    getUserRoles: () => store.userRoles,
    getRoles: () => store.roles,
    getRolePermissions: () => store.rolePermissions,
    getPermissions: () => store.permissions,
    getResources: () => store.resources,
    clearAll: () => store.clearAll(),
    resetToInitial: () => store.resetToInitial(),
    selectTable(table) {
      this.table = table;
      this.showTable = true;
    }
  },
};
</script>

<style scoped>
.panel {
  display: flex;
  height: 100%;
}

.er-diagram {
  flex: 1;
  background: #fafafa;
  width: 0;
  position: relative;
}

.svg-header {
  height: 60px;
  line-height: 60px;
  border-bottom: solid 1px #dadada;
  font-size: 1.2em;
}

.actions {
  height: 40px;
  line-height: 40px;
}
.svg-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: calc(100% - 100px);
  overflow: auto;
}

@media screen and (max-width: 1500px) {
  .svg-container {
    align-items: flex-start;
  }
}

.er-overlay {
  pointer-events: none;
  opacity: 0;
  background-color: rgba(35, 35, 35, 0.3);
  transition: all ease 400ms;
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.tables {
  overflow-x: auto;
  flex: 1;
  max-width: 600px;
  height: 100%;
  background: #dadada;
  position: relative;
}

.tab {
  min-width: 200px;
  height: 100%;
  width: 100%;
}

.tab .tbl-caption {
  height: 60px;
  line-height: 60px;
  font-size: 1.2em;
}

table {
  width: 100%;
  table-layout: fixed;
  text-align: center;
}

.tbl-header {
  pointer-events: none;
  height: 60px;
  background-color: rgba(55, 55, 55, 0.3);
}

.tbl-content {
  height: calc(100% - 120px);
  overflow-x: auto;
  margin-top: 0px;
  border-top: 1px solid rgba(55, 55, 55, 0.3);
}

th {
  padding: 10px 15px;
  text-transform: uppercase;
}

td {
  padding: 10px 15px;
  vertical-align: middle;
}

td.id {
  font-family: Monaco, Consolas, monospace;
}

tr {
  transition: all ease 400ms;
}

tr:nth-child(2n) {
  background: rgba(75, 75, 75, 0.2);
  border-bottom: solid 1px rgba(55, 55, 55, 0.1);
}

tr:hover {
  background: rgba(35, 35, 35, 0.1);
}

tr:nth-child(2n):hover {
  background: rgba(0, 0, 0, 0.2);
}

svg text {
  fill: #555;
  font-size: 14px;
}
svg .bg {
  fill: rgba(0, 0, 0, 0);
  transition: all ease 400ms;
}
svg .active .bg {
  fill: rgba(120,120,180,0.2);
}

.svg-table {
  fill: transparent;
  cursor: pointer;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  height: 60px;
  line-height: 60px;
  width: 60px;
  text-align: center;
  opacity: 0;
  transition: all ease 400ms;
}

@media screen and (max-width: 1024px){
  .er-diagram.blur {
    filter: blur(3px);
  }
  .close {
    opacity: 1;
  }

  .tables {
    height: 100%;
    position: absolute;
    right: -100%;
    width: 100%;
    max-width: 450px;
    z-index: 10;
    transition: all ease 400ms;
    opacity: 0;
  }
  .tables.active {
    right: 0;
    opacity: 1;
  }

  .er-overlay.active {
    pointer-events: all;
    display: block;
    opacity: 1;
  }
}
</style>
