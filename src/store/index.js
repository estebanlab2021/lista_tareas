import { createStore } from 'vuex'

export default createStore({
    state: {
        tareas: [],
        contar: 0,
        pendientes: 0,
        realizadas: 0
    },
    mutations: {
        agregartarea(state, payload) {
            state.tareas.push(payload);
            state.contar = state.tareas.length;
            state.pendientes = state.tareas.length;
            state.realizadas = state.contar - state.pendientes;
        },
        editartarea(state, payload) {
            state.tareas[payload].estado = true;
        },
        eliminar(state, payload) {
            state.tareas.splice(payload, 1);
            state.contar = state.tareas.length;
            state.realizadas = state.contar - state.pendientes;
        },
        nuevaediciontarea(state, payload) {
            if (state.tareas[payload].estado === false) {
                state.tareas[payload].estado = true;
                let nuevoarray = state.tareas.filter(element => element.estado === false);
                state.pendientes = nuevoarray.length;
                state.realizadas = state.contar - state.pendientes;
            } else {
                state.tareas[payload].estado = false;
                let nuevoarray = state.tareas.filter(element => element.estado === false);
                state.pendientes = nuevoarray.length;
                state.realizadas = state.contar - state.pendientes;
            }
        },
    },
    actions: {},
    modules: {}
})