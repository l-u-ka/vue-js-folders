<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <h2>{{ uName }}</h2>
    <h3>{{user.age}}</h3>
    <button @click="setAge">Change age</button>
    <div>
      <input v-model="firstName" type="text" placeholder="First Name"/>
      <input ref="lastNameInput" type="text" placeholder="Lastt Name"/>
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
//import { ref } from 'vue';
import {reactive, computed, ref, watch, provide, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
// ref works with any type of data, reactive - only objects
// ref creates an object where passed arguments are stored under value key, reactive just creates an object with the passed arguments

import UserData from './components/UserData.vue'

export default {
  components: {
    UserData
  },
  setup() {
    /*
    // refs create reactive values, meaning that vue detects if they are changed and updates dom
    // refs can take any value as a parameter and return an object where passed value is stored inside value key
    const uName = ref('Maximilian');
    const uAge = ref(31);
    
    const user = ref({
      name: 'Maximilian',
      age: 31
    })
    */
   const user = reactive({
    name: 'Maximilian',
    age: 31
   })

   const firstName = ref('');
   const lastName = ref('');
   const uAge = ref('31')
   const lastNameInput = ref(null);

   onBeforeMount(() => {
    console.log('OnBeforeMount')
   })
   onMounted(()=> {
    console.log('OnMounted')
   })
   onBeforeUpdate(()=> {
    console.log('OnBeforeUpdate')
   })
   onUpdated(() => {
    console.log('onUpdated')
   })
   onBeforeUnmount(()=> {
    console.log('OnBeforeUnmounted')
   })
   onUnmounted(()=> {
    console.log('OnUnMounted')
   })

   /*  // working with ref
    setTimeout(function() {
      user.value.name = 'Max';
      user.value.age = 32;
    }, 2000)
    */
    // working with reactive 
    /*
    setTimeout(function() {
      user.name = 'Max';
      user.age = 32;
    }, 2000) */

    console.log(user.name)

    function setNewAge() {
      user.age = 38;
    }
    function setLastName() {
      lastName.value = lastNameInput.value.value;  // since lastNameInput is a ref referencing input, its value is input and value's value is input's value
    }
    /*
    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    function setLastName(event) {
      lastName.value = event.target.value;
    }
    */
    const uName = computed(function() {
      return firstName.value + ' ' + lastName.value
    })

    watch([firstName, lastName], function(newValues, oldValues) {
      console.log('Old name: ' + oldValues[0])
      console.log('New name: ' + newValues[0])
      console.log('Old lastname: ' + oldValues[1])
      console.log('New lastname: ' + newValues[1])
    })

    provide('userAge', uAge)

    return {
      user: user,
      setAge: setNewAge,
      firstName,
      lastName,
      //setFirstName,
      //setLastName,
      uName,
      lastNameInput,
      setLastName
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>