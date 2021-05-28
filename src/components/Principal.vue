<template>
<!-- video referencia: https://www.youtube.com/watch?v=jfEEQVdbl54&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=7-->
  <div class="row justify-content-center border border-dark bg-info">
    <div class="col-5 text-center">
        <h1>Lista de Tareas</h1>
    </div>
  </div>
  <div class=" row border border-dark bg-warning">
    <div class="row justify-content-center">
        <div class="col-2">
            <div class="form-check">
                <input v-model="picked" value="Compras: " class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">Compras</label>
            </div>
        </div>
        <div class="col-2">
            <div class="form-check">
                <input v-model="picked" value="Deportes: " class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">Deportes</label>
            </div>
        </div>
        <div class="col-2">
            <div class="form-check">
                <input v-model="picked" value="Hogar: " class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">Hogar</label>
            </div>
        </div>
        <div class="col-2">
            <div class="form-check">
                <input v-model="picked" value="Colegio: " class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">Colegio</label>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-6 text-center my-3">
            <input type="text" class='form-control my-3' v-model="dato" v-on:keyup.enter="agregar">
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-6 text-center my-3">
            <button class="btn btn-primary" @click="agregar"> Agregar Tarea </button>
        </div>
    </div>
  </div>
  
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data() {
        return {
            dato:'',
            picked:''
        }
    },
    computed: {
        ...mapState(['tareas']),
        //retornar(){
        //    return this.dato += this.picked
        //}
    },
    methods: {
        ...mapMutations(['agregartarea']),
        agregar(){
            this.agregartarea({nombre:this.picked+this.dato, estado:false});
            this.dato='';
        }
    },

}
</script>

<style>

</style>