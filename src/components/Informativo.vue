<template>
  <div class="row justify-content-center border border-dark bg-dark mt-3 rounded">
    <div class="d-flex justify-content-between text-light">
        <div>
            <p>Total tareas: {{contar}}</p>
        </div>
        <div>
            <p>Tareas pendientes: {{pendientes}}</p>
        </div>
        <div>
            <p>Tareas realizadas: {{realizadas}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['contar','pendientes','realizadas']),
    //retornar(){
    //  return this.contartareas()
    //}
  },
  methods: {
    //...mapMutations(['contartareas'])
    //...mapActions(['setcontartareas'])
  },

}
</script>

<style>

</style>