<script setup lang="ts">
const {title , subject , subTitle} = defineProps({
  title:String ,
  subTitle:String,
  subject:String
})
</script>

<template>
  <div class="title p-10 border-l-[3px] border-[rgba(0,0,0,0.5)]">
    <span class="">{{ subject }}</span>
    <div>
      <div><h4>{{ title }}</h4></div>
      <div><h2>{{ subTitle }}</h2></div>
    </div>
  </div>
</template>

<style scoped>
.title{
  position: relative;
  span{
    position: absolute;
    color: rgba(0,0,0,0.1);
    top: -25%;
    left: 1%;
    font-weight: bold;
    font-size: 62px;

  }
  h4{
    font-size: 30px;
  }
  h2{
    font-size: 38px;
    font-weight: 700;
    font-family: Calibri , sans-serif;
  }
}
</style>
