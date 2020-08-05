var app = new Vue({
  el: "#app",
});

Vue.component("portfolio-img", {
  template: `	
    <div class="projects">
		<box 
		v-for="project in portfolioData"
		:data= "project"></box>
    </div>`,
  data() {
    return {
      portfolioData: [
        {
          title: "Neon Animation",
          image: "/dist/img/neon.jpg",
          url:
            "http://circuslabs.net/~nancy.mocker/quarter-2/web-animation/neon/",
        },
        {
          title: "Olea",
          image: "/dist/img/shopping.jpg",
          url: "http://circuslabs.net/~nancy.mocker/quarter-2/webdev2/olea/",
        },
        {
          title: "S'mores",
          image: "/dist/img/smores.jpeg",
          url:
            "http://circuslabs.net/~nancy.mocker/quarter-2/webdev2/smores-project/",
        },
      ],
      hover: false,
      selectedImage: null,
    };
  },
});

Vue.component("box", {
  props: ["data", "hover"],
  template: `
    <a :href="data.url">
        <img 
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :src="data.image" 
        class="project" 
        :class="{active: hover}">
        <span v-if="hover" class="title">{{data.title}}</span>
    </a>
    `,
});
