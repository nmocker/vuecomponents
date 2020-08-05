"use strict";

var app = new Vue({
  el: "#app"
});
Vue.component("portfolio-img", {
  template: "\t\n    <div class=\"projects\">\n\t\t<box \n\t\tv-for=\"project in portfolioData\"\n\t\t:data= \"project\"></box>\n    </div>",
  data: function data() {
    return {
      portfolioData: [{
        title: "Neon Animation",
        image: "/dist/img/neon.jpg",
        url: "http://circuslabs.net/~nancy.mocker/quarter-2/web-animation/neon/"
      }, {
        title: "Olea",
        image: "/dist/img/shopping.jpg",
        url: "http://circuslabs.net/~nancy.mocker/quarter-2/webdev2/olea/"
      }, {
        title: "S'mores",
        image: "/dist/img/smores.jpeg",
        url: "http://circuslabs.net/~nancy.mocker/quarter-2/webdev2/smores-project/"
      }],
      hover: false,
      selectedImage: null
    };
  }
});
Vue.component("box", {
  props: ["data", "hover"],
  template: "\n    <a :href=\"data.url\">\n        <img \n        @mouseover=\"hover = true\"\n        @mouseleave=\"hover = false\"\n        :src=\"data.image\" \n        class=\"project\" \n        :class=\"{active: hover}\">\n        <span v-if=\"hover\" class=\"title\">{{data.title}}</span>\n    </a>\n    "
});
//# sourceMappingURL=main.js.map
