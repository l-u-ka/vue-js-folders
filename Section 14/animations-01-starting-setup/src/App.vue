<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!-- 
  <div class="container">
    <list-data></list-data>
  </div>

  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <transition name="para"
     :css="false"
     @before-enter="beforeEnter"
     @before-leave="beforeLeave"
     @enter="enter"
     @after-enter="afterEnter"
     @leave="leave"
     @after-leave="afterLeave"
     @enter-cancelled="enterCancelled"
     @leave-cancelled="leaveCancelled"
     >
      <p v-if="paraIsVisible">This is only sometimes visible</p>  
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>


  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button v-if="!usersAreVisible" @click="showUsers">Show Users</button>
      <button v-else @click="hideUsers">Hide Users</button>
    </transition>
  </div>


  <base-modal :open="dialogIsVisible" @close="hideDialog">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  -->
</template>  

<script>

// import ListData from './components/ListData.vue'

export default {
  components: {
    //ListData
  },
  data() {
    return {
      animatedBlock: false, 
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    enterCancelled(el) {
      console.log(el)
      clearInterval(this.enterInterval)
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval)
    },
    beforeEnter(el) {
      console.log('before enter');
      console.log(el);

      el.style.opacity = 0;
    },
    enter(el, done) { 
      console.log('enter');
      console.log(el);
      let round = 1;

        this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20)
    },
    afterEnter(el) {
      console.log('after enter')
      console.log(el)
    },
    beforeLeave(el) {
      console.log('before leave');
      console.log(el);

      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);

      let round = 1;

      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20)
    },
    afterLeave(el) {
      console.log('after leave');
      console.log(el)
    },

    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    }
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /*transform: translateX(-100px);*/
  animation: slide-fade 0.3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active
 {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}



/* transition wrapper automatically adds this classes to child element before being mounted */
/*
.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.3s ease-out;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  
  opacity: 1;
  transform: translateY(0);
  
}
.para-leave-active {
  transition: all 0.3s ease-in;
  
   for animation instead of tranistion property
  you only need this active class and not to and from classes,
  
  animation: slide-fade 0.3s ease-out;
}
.para-leave-to {
  
  opacity: 0;
  transform: translateY(-30px);
  
}
*/


.route-enter-active {
  animation: slide-fade 0.5s ease-in;
}

.route-leave-active {
  animation: slide-fade 0.5s ease-out reverse;
}


@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.2);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}

</style>