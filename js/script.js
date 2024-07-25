// const { createApp } = Vue;

// createApp({
//   data() {
//     return {
//       email: null,
//       emails: [],
//     };
//   },
//   methods: {
//     generateRandomEmail() {
//       axios
//         .get("https://flynn.boolean.careers/exercises/api/random/mail")
//         .then((response) => {
//           this.email = response.data.response;
//         });
//     },

//     generateTenRandomEmails() {
//       for (let i = 0; i < 10; i++) {
//         axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
//             this.emails.push(resp.data.response);
//         });

//     },
//   },
// }).mount("#app");

const { createApp } = Vue;

createApp({
  data() {
    return {
      email: null,
      emails: [],
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

    generateTenRandomEmails() {
      this.emails = [];
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            this.emails.push(resp.data.response);
          });
      }
    },
  },
}).mount("#app");
