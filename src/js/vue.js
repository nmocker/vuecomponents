Vue.component("greeting", {
  template:
    '<p>My name is {{ name }}. <button v-on:click="changeName">Change name</button><p>',
  data: function () {
    return {
      name: "Nancy",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Peter";
    },
  },
});
