<template>
  <div>
    <h3>当前最新count值为：{{ $store.state.count }}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <button @click="btnHandler3">+1 Async</button>
    <button @click="btnHandler4">+N Async</button>

  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    btnHandler1() {
      // this.$store.state.count++
      this.$store.commit('add')
    },
    btnHandler2() {
      // commit作用就是调用某个mutation函数
      this.$store.commit('addN', 3)
    },
    btnHandler3() {
      // dispatch作用就是调用某个action函数
      this.$store.dispatch('addAsync')
    },
    btnHandler4() {
      // dispatch作用就是调用某个action函数
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>
