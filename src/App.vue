<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="container">
    <principal />
    <lista />
    <informativo />
  </div>
</template>

<script>
import Informativo from './components/Informativo.vue'
import Lista from './components/Lista.vue'
import Principal from './components/Principal.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Principal,
    Lista,
    Informativo
  
  }
}
</script>

<style>

</style>
