<template>
    <h2>{{uName}}</h2>
    <h3>{{age}}</h3>
</template>


<script>
import {computed, inject} from 'vue'
export default {
    props: ['firstName', 'lastName'],
    
    setup(props, context) {
        const uName = computed(() => {
            return props.firstName + ' ' + props.lastName 
        })

        const age = inject('userAge');

        context.emit('')

        return {
            uName,
            age
        }
    }
    
    /*
    computed: {
        userName() {
            return this.firstName + ' ' + this.lastName 
        }
    }
    */
}
</script>