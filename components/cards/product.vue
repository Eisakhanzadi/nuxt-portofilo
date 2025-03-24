<script setup lang="ts">
const {project} = defineProps({
  project: {
    type: Object,
    default: {
      id: 2,
      img: null,
      link: null,
      title: null
    }
  }
})
const pin = ref(null)
const card = ref(null)
onMounted(() => {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  pin.value.style.backgroundColor = getRandomColor()

  function removeActiveClass() {
    setTimeout(() => {
      card.value.classList.remove('active')
    }, 10500)
  }

  window.addEventListener('scroll', () => {
    if (!card.value.classList.contains('active')) {
      card.value.classList.add('active')
      removeActiveClass()
    } else {
      return
    }
  });
})
</script>

<template>

  <article ref="card" class="card bg-white flex flex-col items-center h-full rounded relative overflow-hidden ">
    <u-link v-if="project" class="flex justify-center h-full"
            :to="`/product/${project.id}/${separator(project.title)}`">
        <img class=" object-contain w-full h-full " :src="project.img" :alt="project.title">
      <span ref="pin" class="w-2.5 h-2.5 rounded-full block absolute top-2 "></span>
      <div class="card-body overflow-hidden flex justify-center items-end  ">
        <h3 class="mb-5 !text-white text-lg font-bold capitalize">{{ project.title }}</h3>
      </div>
    </u-link>
  </article>
</template>

<style scoped lang="scss">
.card {
  aspect-ratio: 4/5;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.1);

  span {
    z-index: 1;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  .card-body {
    height: 0;
    transition: all 0.3s 0.2s;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
    opacity: 1;

    h3 {
      z-index: 3;
    }
  }

  &:hover .card-body {
    transition: all ease 0.3s;
    height: 100%;
    opacity: 1;

  }
}


.active {
  transform-origin: top center;

  &:nth-child(odd) {
    animation: animeOdd 10s linear infinite alternate forwards;
  }

  &:nth-child(even) {
    animation: animeEven 10s linear infinite alternate forwards;
  }
}

@keyframes animeEven {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate3d(0, 0, 1, 1.1deg);
  }
  20% {
    transform: rotate3d(0, 0, 1, -1.1deg);
  }
  30% {
    transform: rotate3d(0, 0, 1, 1deg);
  }
  40% {
    transform: rotate3d(0, 0, 1, -1deg);
  }
  50% {
    transform: rotate3d(0, 0, 1, 0.5deg);
  }
  60% {
    transform: rotate3d(0, 0, 1, -0.5deg);
  }
  70% {
    transform: rotate3d(0, 0, 1, 0.25deg);
  }
  80% {
    transform: rotate3d(0, 0, 1, -0.25deg);
  }
  90% {
    transform: rotate3d(0, 0, 1, 0.15deg);
  }
  95% {
    transform: rotate3d(0, 0, 1, -0.15deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 0.05deg);
  }
}

@keyframes animeOdd {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate3d(0, 0, 1, -1.1deg);
  }
  20% {
    transform: rotate3d(0, 0, 1, 1.1deg);
  }
  30% {
    transform: rotate3d(0, 0, 1, -1deg);
  }
  40% {
    transform: rotate3d(0, 0, 1, 1deg);
  }
  50% {
    transform: rotate3d(0, 0, 1, -0.5deg);
  }
  60% {
    transform: rotate3d(0, 0, 1, 0.5deg);
  }
  70% {
    transform: rotate3d(0, 0, 1, -0.25deg);
  }
  80% {
    transform: rotate3d(0, 0, 1, 0.25deg);
  }
  90% {
    transform: rotate3d(0, 0, 1, -0.15deg);
  }
  95% {
    transform: rotate3d(0, 0, 1, 0.15deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, -0.05deg);
  }
}
</style>
