<template>
  <div id="app">
    <div class="display-4 text-center text-white bg-dark mb-3 p-4">Vuex Tutorial</div>
    <div class="container">
      <Food/>
      <Sport/>
      <Display/>
    </div>
  </div>
</template>

<script>

import Food from './components/Food'
import Sport from './components/Sport'
import Display from './components/Display'
import {store} from './store/store'

export default {
  name: 'App',
  store,
  components: {
    Food, Sport, Display
  }
}
</script>

<style>

</style>
