<template>
  <div class="row justify-content-center border border-dark">
    <div class="col-6">
        <div class="mt-3" v-for="(item, index) of tareas" :key="index">
            <div role="alert" :class="['alert', item.estado ? 'alert-primary': 'alert-danger']">
                <div class="d-flex justify-content-between">
                    <div :class="[item.estado ? 'text-decoration-line-through': 'text-decoration-none']">
                        {{index+1}} - {{item.nombre}}
                    </div>
                    <div>
                        <button class="btn btn-success btn-sm mx-2" @click="nuevaediciontarea(index)">ok</button>
                        <button class="btn btn-danger btn-sm" @click="eliminar(index)">x</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapMutations(['editartarea','eliminar','nuevaediciontarea']),
    },

}
</script>

<style>

</style>