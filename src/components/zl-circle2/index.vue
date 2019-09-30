<template>
  <div class='circle-container auto' :style="circleStyle" :data-value="value">
    <div class="clip" :style="clipStyle">
        <div class="left" :style="leftStyle"></div>
        <div class="right width-none" :style="rightStyle"></div>
    </div>
    <div class="num" :style="fillStyle" v-html="text">
      
    </div>
  </div>
</template>

<script>
export default {
  model:{
    prop:'value',
    event: 'change'
  },
  props: {
    value: {
      type:[String, Number],
      default:0
    },
    size:{
      type: [String, Number],
      default: 100
    },
    strokeWidth:{
      type: [String, Number],
      default: 20
    },
    rate:{
      type: [String, Number],
      default: 100
    },
    layerColor:{
      type: String,
      default: '#eee'
    },
    color:{
      type: String,
      default: 'lightblue'
    },
    fill:{
      type: String,
      default: '#fff'
    },
    text: String,
    speed:{
      type: [String, Number],
      default: 30
    }
  },
  computed: {
    widthHeight(){
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      }
    },
    position(){
      return{
        top: `${-this.strokeWidth}px`,
        left: `${-this.strokeWidth}px`
      }
    },
    circleStyle(){
      return {
        ...this.widthHeight,
        background: this.layerColor
      }
    },
    clipStyle(){
      return {
        ...this.widthHeight,
        borderColor: this.layerColor,
        borderWidth: `${this.strokeWidth}px`,
        clip: `rect(0, ${this.size}px, ${this.size}px, ${this.size/2}px)`
      }
    },
    leftStyle(){
      return {
        ...this.widthHeight,
        ...this.position,
        clip: `rect(0, ${this.size/2}px, ${this.size}px, 0px)`
      }
    },
    rightStyle(){
      let transform= `rotate(${-180 + 360/this.rate * this.value}deg)`
      return {
        ...this.widthHeight,
        ...this.position,
        borderWidth: this.strokeWidth * 2 + 'px',
        borderColor: this.color,
        clip: `rect(0, ${this.size}px, ${this.size}px, ${this.size/2}px)`,
        transform: transform
      }
    },
    fillStyle(){
      return {
        width: `${this.size - this.strokeWidth}px`,
        height: `${this.size - this.strokeWidth}px`,
        background: this.fill
      }
    }
  },
  data() {
    return{
      tempValue: this.value
    }
  },
  watch: {
    tempValue(val){
      console.log(val)
      this.$emit('change', val+=this.speed)
    }
  },
  methods: {

  },
}
</script>

<style lang='less' scoped>
  .circle-container{
    position: relative;
    box-sizing: border-box;
    position: relative;
    border-radius: 50%;
    div{
      box-sizing: border-box;
    }
    .clip,.left,.right{
      position: absolute;
      border-style: solid;
      border-radius: 50%;
      transition: rotate .5s linear;
    }
    .right{
      // transform: rotate(90deg);
    }
    .num{
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .width-none{
        width: 0;
    }
    .auto{
        clip: auto;
    }
  }
</style>
