<template>
  <div>
    <h3>当前最新count值为：{{ count }}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandler2">-N</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    btnHandler1() {
      this.sub()
    },
    btnHandler2() {
      this.subN(3)
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>
