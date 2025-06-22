<script setup lang="ts">
const {number,text,h,w , index} = defineProps({
  number: {
    type: Number||String,
    default: 10
  },
  index: {
    type: Number||String,
    default: 1
  },
  w: {
    type: String,
    default: '150px'
  },
  h: {
    type: String,
    default: '150px'
  },
  text: {
    type: String,
    default: 'somethings'
  }
})
const progressBar = ref<HTMLElement>(null)
const progressNumber = ref(0)
onMounted(() => {
counterPercentage(200)
})
function counterPercentage(time:number):void{
  setTimeout(()=>{
    const timer = setInterval(() => {
      if (progressNumber.value == number) {
        clearInterval(timer)
      } else {
        progressNumber.value += 1
        progressBar.value.style.background = `conic-gradient(var(--base-warning) ${progressNumber.value}% 0%, rgba(0,0,0,0.2) 0% 100%)`

      }
    }, 50)
  } , index*time)
}
</script>

<template>
  <div class="w-full flex flex-col items-center">
  <div ref="progressBar" id="progress-bar" class="w-32 h-32 relative rounded-full bg-blue-100" :style="{width:w,height:h}">
    <div class="progress-bar-number  flex justify-center items-center rounded-full bg-blue-100 font-bold text-3xl text-white ">
      <span>{{ progressNumber }} %</span>
    </div>
  </div>
    <div class="flex justify-center mt-5">
      <u-button class="rounded-full text-white font-bold block border border-black bg-transparent px-5 py-2 hover:!text-white hover:bg-black capitalize">
        {{ text }}
      </u-button>
    </div>
  </div>
</template>

<style scoped>
#progress-bar {
  .progress-bar-number {
    position: absolute;
    inset: 4px;
    background: var(--base-theme);
  }
}
</style>
