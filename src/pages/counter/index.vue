<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <div @click="handleGo" class="home">去非tab页面</div>
  </div>
</template>

<script>
  // import wxInterface from '../../wxApi/interface'

  export default {
    data () {
      return {
        count: 50
      }
    },
    methods: {
      increment () {
        this.count += 1
      },
      decrement () {
        this.count -= 1
      },
      handleGo () {
        this.$router.push('/pages/not-tab/index')
      }
    }
  }
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
