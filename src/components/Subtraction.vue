<template>
  <div>
    <h3>当前最新count值为：{{ count }}</h3>
    <button @click="btnHandler1">-1</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['sub']),
    btnHandler1() {
      this.sub()
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>
