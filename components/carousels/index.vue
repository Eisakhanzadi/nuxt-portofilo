<script setup lang="ts">
const {items} = defineProps({
  items: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <div class="mx-20" dir="ltr" v-if="items?.length">
    <UCarousel
        v-slot="{ item }"
        loop
        dots
        :duration="50"
        arrows
        :autoplay="{ delay: 3000 }"
        :items="items"
        :ui="{ item: 'basis-1/2 md:basis-1/5' }"
    >
      <img :src="item" width="234" height="234" class="rounded-lg object-cover"/>
    </UCarousel>
  </div>
</template>

<style scoped>
img {
  aspect-ratio: 6/4;
}
</style>
