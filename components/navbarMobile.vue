<script setup lang="ts">
const emit = defineEmits(['close'])
const {background} = defineProps({
  background:{
    type:String,
    default:'rgb(255, 214, 90)'
  },
  links:{
    type:Array ,
    default:[]
  }
})
onMounted(()=>{
  const links = document.querySelectorAll<HTMLLinkElement>('.modal-backdrop a')
  document.body.classList.add('overflow-hidden')
  hoverAnimation(Array.from(links))
})
onBeforeUnmount(()=>document.body.classList.remove('overflow-hidden'))
function closeModal(){
  emit('close')
}
</script>

<template>
<div class="modal-backdrop" :style="{background:background}" >
  <nav class="w-full h-full flex items-center justify-center aside-menu" @click.self="closeModal">
    <ul v-if="links?.length > 0" class="flex flex-col blink-text-menu">
      <li  v-for="(item , index) in links" :key="item.id" >
        <u-link class="font-semibold py-2.5 my-1 inline-block" active-Class="active-link" @click="closeModal" :to="`#${item.id}`" > {{ index+1 < 10 ? '0'+(index+1) : index }} {{ item.name }}</u-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<style scoped>
.modal-backdrop{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 10;
  nav{
    backdrop-filter: blur(3px) !important;
  }
}
.active-link{
  font-size: 18px;
}
</style>
