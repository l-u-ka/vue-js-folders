const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: ''
    };
  },
  /*
  computed also takes methods like method property, however they are executed differentyle;
  with every method in method property, when we add them in html, view is not aware of its dependencies - data used inside,
  so if they are not listening to an event and are just binded, or called in {{}} they will get executed after any data variable
  is updated,
  but with computed methods, vue is aware of the dependencies- what data method uses and will only call them if one of the
  dependencies change;
  to avoid accidental and unwanted calling of a method, you use computed;

  watchers are also used to execute a function only when a dependency is changed, however computed works with multiple dependencies,
  so it gets executed when eather one of used data gets updated, but with watchers each data separately gets a watch method,
  that gets executed only when that specific data is changed;
  also, computed property needs to be pointed or called in html file, while watch method is not mentioned in hmtl file,
  it automatically is executed on data update;
  watch method gets the same name as the data that is being watched
   */
  computed: {

    fullName() {
      if (this.name === '' || this.lastName === '') return '';
      return this.name + ' ' + this.lastName;
    }
  }
  ,
  watch: {
    counter(value) {
      if (value>50) {
        this.counter = 0;
      }
    }
    /*
    lastName(value) {
      if (value === '') this.fullName = '';
      else this.fullName = this.name + ' ' + value;
    },
    name(value  ,prevValue ) {
      if (value==='') this.fullName = '';
      else this.fullName = value + ' ' + this.lastName;
    } */
  }
  ,
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
      console.log(this.name)
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    clearInput() {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
