<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import {useRoute} from 'vue-router'

export default {
  props: ['pid'],
  // can pass props in setup and acess param
  setup() {

    const route = useRoute();

    const products = inject('products');

    const selectedProduct = computed(() => products.value.find(product => product.id === route.params.pid))  // pid is route parameter passed as a prop ) 
    const price = computed(() => selectedProduct.value.price);
    const description = computed( () => selectedProduct.value.description);
    const title = computed( () => selectedProduct.value.title);

    

    return { title, price, description };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>