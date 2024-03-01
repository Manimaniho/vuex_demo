import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 只有mutations中定义的数据才有权利修改state中的数据
    add(state) {
      state.count++
      // 不可以在mutations中执行异步操作
      // setTimeout(() => {
      //   state.count++
      // }, 3000)
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在actions中不能直接修改state中的数据；必须通过context.commit()触发某个mutation才行
        context.commit('add')
      }, 3000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        // 在actions中不能直接修改state中的数据；必须通过context.commit()触发某个mutation才行
        context.commit('addN', step)
      }, 3000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 3000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 3000)
    }
  },
  getters: {
    showNum(state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  },
  modules: {
  }
})
