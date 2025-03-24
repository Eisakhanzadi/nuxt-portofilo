<script setup lang="ts">
import me from '~/assets/images/profile/me.jpg'
  const links =[
    {
      name:'صفحه اصلی',
      link:'/'
    },
    {
      name:'نمونه کار ها ',
      link:'/products'
    },
    {
      name:'مهارت ها ',
      link:'/products'
    },
    {
      name:'تماس با من  ',
      link:'/contact-us'
    },
  ]
</script>

<template>
<section>
<nav class="py-5">
  <ul class="nav flex items-center gap-5 md:text-base">
    <li class="nav-item">
      <u-link to="/">
        <UAvatar size="xl" :src="me" />
      </u-link>
    </li>
    <li v-for="item in links" :key="item.name" class="nav-item">
      <u-link :to="item.link" active-class="text-white" >{{item.name}}</u-link>
    </li>
  </ul>
</nav>
</section>
</template>

<style scoped>

</style>
