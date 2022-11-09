<template>
  <uL>
    <li :class="{active: modelValue==='poor'}"><button type="button" @click="activate('poor')">Poor</button></li>
    <li :class="{active: modelValue==='average'}"><button type="button" @click="activate('average')">Average</button></li>
    <li :class="{active: modelValue==='great'}"><button type="button" @click="activate('great')">Great</button></li>
  </uL>
</template>

<script>
export default {
  props: ['modelValue']  // default prop vue passes to custom component when you put v-model on them
  ,
  emit: ['update:modelValue']  // default emit from custom cumponent which gets model value prop because of v-model
  ,
  data() {
    return {
      activeOption: this.modelValue
    }
  },
  /*
  computed: {
    activeOption() {
      return this.modelValue
    }
  },*/
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option)
    }
  }
}
</script>

<style scoped>
.active {
  border-color: purple;
}
.active button {
  color: purple;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>