<template>
  <div>
    <h3>当前最新count值为：{{ count }}</h3>
    <button>-1</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>
