"use strict";

Vue.component("greeting", {
  template: '<p>My name is {{ name }}. <button v-on:click="changeName">Change name</button><p>',
  data: function data() {
    return {
      name: "Nancy"
    };
  },
  methods: {
    changeName: function changeName() {
      this.name = "Peter";
    }
  }
});
//# sourceMappingURL=vue.js.map
