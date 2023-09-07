const app = Vue.createApp({
  // template: `
  // <h1>HOLA MUNDO</h1>
  // <p>{{1+1}}</p>

  // `

  data() {
    return {
      quote: "Soy batman",
      author: "Bruce Wayne",
    };
  },
  methods: {
    capitalize() {
        this.author = this.author.toUpperCase();
      },
    changeQuote(event) {
      this.quote = "Soy tu padre";
      capitalize();
      console.log(event);
    },
   
  },
});

app.mount("#myapp");
