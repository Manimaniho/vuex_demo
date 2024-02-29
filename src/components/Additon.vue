<template>
  <div>
    <h3>当前最新count值为：{{ $store.state.count }}</h3>
    <button @click="btnHandler1">+1</button>
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
    }
  }
}
</script>
