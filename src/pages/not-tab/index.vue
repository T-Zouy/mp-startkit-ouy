<template>
    <div class="not-tab">
      <input type="digit" :value="info.name" @blur="handleNameBlur">
      <input type="number" :value="info.phone" @blur="handlePhoneBlur">
      <input type="text" :value="info.weChat" @blur="handleWeChatBlur">
      <picker mode="region" @change="handleRegionChange" :value="info.region">
        <input type="text" :value="totalRegion" disabled>
      </picker>
      <input class="edit" placeholder-class="placeholder"
             type="digit"
             maxlength="10"
             placeholder="请输入价格"
             :value="info.price"
             @blur="handlePriceChange" />
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        info: {
          region: ['', '', ''],
          name: 0,
          phone: 123,
          weChat: '',
          price: 1
        },
        region: ['', '', ''],
        name: ''
      }
    },
    computed: {
      totalRegion () {
        return `${this.info.region[0]}${this.info.region[1]}`
      }
    },
    methods: {
      handleNameBlur (e) {
        const {value: name} = e.target
        this.info = {
          ...this.info,
          name
        }
      },
      handlePhoneBlur (e) {
        const {value} = e.target
        this.info.phone = value
      },
      handleWeChatBlur (e) {
        const {value} = e.target
        this.info.weChat = value
      },
      handleRegionChange (e) {
        const {value} = e.target
        console.log(value)
        this.info.region = value
      },
      handlePriceChange (e) {
        const {value: price} = e.target
        this.info.price = price
      }
    }
  }
</script>

<style lang="less" scoped>
  .not-tab {
    width: 100%;
  }
  input {
    border: 1px solid #000;
    color: #000;
    font-size: 24px;
    line-height: 50px;
    width: 100%;
    height: 50px;
  }
</style>
