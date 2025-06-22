<script setup lang="ts">
const {id} = defineProps({
  id:{
    type:String,
    default:""
  }
})
</script>

<template>
<nuxt-link :to="`#${id}`" class="flex items-baseline relative w-fit pr-6">
  <p class="capitalize text-warning text-xl font-semibold  ">next chapter </p>
  <icons-arrow class="text-warning"/>
</nuxt-link>
</template>

<style scoped>
svg{
  position: absolute;
  top: 40%;
  right: -5%;
  scale: 1.5;
  &:hover{
    animation: transform 1.2s infinite linear alternate;
  }
}
  p{
    &:hover{
     & + svg{
        animation: transform 1.2s infinite linear alternate;
      }
    }
  }
  @keyframes transform {
    0%{
      transform: translate(0,-4px);
    }
    50%{
      transform: translate(0,8px)
    }
    100%{
      transform: translate(0,-4px)
    }
  }
</style>
