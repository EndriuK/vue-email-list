const { createApp } = Vue;

createApp({
  data() {
    return {
      email: "",
    };
  },
  methods: {
    generateRandomEmail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.email = response.data.response;
        });
    },
  },
}).mount("#app");
