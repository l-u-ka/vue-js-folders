const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      /*this.message = this.currentUserInput;*/
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  }
});
app.mount('#app');
setTimeout(function () {
  app.unmount()
}, 3000)

/*
vue js uses proxy to detect changes to data and act upon them
const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
}

const handler = {
  set(target, key, value) {
    if (key==='message') {
      target.longMessage = value + 'Wolrd'
    }
    target.message = value
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Helooo!!!!'

console.log(proxy.longMessage)
 */


const app2 = Vue.createApp({
  template: `
    <p>{{favoriteMeal}}</p>
  `,
  data() {
    return {
      favoriteMeal: 'pizza'
    }
  }
})

app2.mount('#app2')