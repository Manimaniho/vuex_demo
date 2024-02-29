<template>
  <div id="app">
    <my-addition></my-addition>
    <p>----------------------------------------</p>
    <my-substraction></my-substraction>
  </div>
</template>

<script>
import Addition from './components/Additon.vue'
import Subtraction from './components/Subtraction.vue'
export default {
  components: {
    'my-addition': Addition,
    'my-substraction': Subtraction
  },
  data() {
    return {}
  }
}
</script>
scropt

<style></style>
