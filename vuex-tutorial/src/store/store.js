import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store=new Vuex.Store({
    state:{
        food:'Hamburger',
        sport:'Running',
        txtchange: ''
    },
    mutations:{
        setFood(state, food){
            state.food = food
        },
        setSport(state, sport){
            state.sport = sport
        },
    },
    getters:{
        food:state=>state.food,
        sport:state=>state.sport
    }
})
