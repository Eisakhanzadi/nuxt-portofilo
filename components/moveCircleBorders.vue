<script setup lang="ts">
const {h, w, img, text} = defineProps({
  h: {
    default: '30px',
    type: String
  },
  w: {
    default: '30px',
    type: String
  },
  text: String,
  img: String
})

</script>

<template>
  <div class="flex justify-center items-center">
    <div class="image-container flex justify-center align-center  relative " :style="{width: w, height: h , maxWidth:'400px' , maxHeight:'400px'}">
      <div class=" ">
        <span class="rounded-full b-top"></span>
        <span class="rounded-full b-top"></span>
        <span class="rounded-full b-top"></span>
        <span class="rounded-full b-top"></span>
      </div>
      <img v-if="img"  class="object-cover w-full rounded-full" :src="img" alt="عیسی خانزادی">
      <p v-if="text">{{ text }}</p>
      <div class="">
      <span class="rounded-full b-bottom"></span>
      <span class="rounded-full b-bottom"></span>
      <span class="rounded-full b-bottom"></span>
      <span class="rounded-full b-bottom"></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img:hover ~ div {
  display: none;
}
.image-container{
  border-radius: 50%;
  border: 2px solid #000;
  span{
   position: absolute;
   width: 100%;
   height: 100%;
   background-color:transparent;
   &.b-top{
     top: 0;
     left: 0;
     z-index: 1;
     border: transparent;
     border-top: 1px solid #000;
     &:first-child{
       animation: linear wave-top  2.2s  infinite  forwards;
     }
     &:nth-child(2){
       animation: linear wave-top  2.2s 0.5s infinite  forwards;
     }
     &:nth-child(3){
       animation: linear wave-top  2.2s 1s infinite  forwards;
     }
     &:last-child{
       animation: linear wave-top  2.2s 1.5s infinite  forwards;
     }
   }
   &.b-bottom{
     bottom: 0;
     left: 0;
     z-index: 1;
     border: transparent;
     border-bottom: 1px solid #000;
     &:first-child{
       animation: linear wave-bottom  2.2s  infinite  forwards;
     }
     &:nth-child(2){
       animation: linear wave-bottom  2.2s 0.5s infinite  forwards;
     }
     &:nth-child(3){
       animation: linear wave-bottom  2.2s 1s infinite  forwards;
     }
     &:last-child{
       animation: linear wave-bottom  2.2s 1.5s infinite  forwards;
     }
   }
 }
}
@keyframes wave-top {
  from{
    opacity: 1 ;
    transform: translateY(0);
  }
  to{
    opacity: 0 ;
    transform: translateY(-4rem);
  }
}
@keyframes wave-bottom {
  from{
    opacity: 1 ;
    transform: translateY(0);
  }
  to{
    opacity: 0 ;
    transform: translateY(4rem);
  }
}
</style>
