const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    submitForm() {
      alert('form is submitted')
    }
    ,
    setName(event) {
      this.name = event.target.value;
    },
    confirmName(event) {
      this.confirmedName = event.target.value;
    }
    ,
    add(num) {
      this.counter = this.counter + num;
    },
    minus(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
