<template>
  <div>
    <h3>当前最新count值为：{{ count }}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandler2">-N</button>
    <button @click="btnHandler3">-1 Async</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHandler1() {
      this.sub()
    },
    btnHandler2() {
      this.subN(3)
    },
    btnHandler3() {
      this.subAsync()
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>
