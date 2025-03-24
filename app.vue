<template>
  <section class="bg-theme">
    <!--    <u-container>-->
    <nuxt-layout name="default">
      <main class="min-h-[100vh] grid grid-cols-12 xl:gap-10 ">
        <div class="col-span-12 xl:col-span-9">
          <nuxt-page/>
        </div>
        <nav class=" aside-menu hidden xl:block col-span-3 " v-if="$route.path == '/'">
          <ul class="blink-text-menu border-l-3 border-l-stone-800">
            <li ref="list" v-for="(item , index) in navLinks" :key="item.id" class=" first:mt-0 last:mb-0 my-1">
              <u-link ref="links" @click="activeList(index)" :to="`#${item.id}`"
                      class="block cursor-pointer py-3.5 px-5 w-full h-full font-bold text-lg gap-1.5">
                {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }} {{ item.name }}

              </u-link>
            </li>
          </ul>
        </nav>
      </main>
    </nuxt-layout>
    <!--    </u-container>-->
  </section>
</template>
<script setup lang="ts">
import hoverAnimation from "~/composables/hoverAnimation.js";

const list = ref(null)
useHead({
  titleTemplate: (title) => {
    return title ? `Eisa Khanzadi|${title}` : 'Eisa Khanzadi|frontEnd developer'
  }
})
definePageMeta({
  layout: 'default'
})
const navLinks = [
  {
    id: 'top',
    name: 'Top'
  },
  {
    id: 'about-me',
    name: 'About Me'
  },
  {
    id: 'skills',
    name: 'Skills'
  },
  {
    id: 'my-project',
    name: 'Project'
  },
  {
    id: 'contact-me',
    name: 'Contact'
  },
]


function activeList(index) {
  for (let li in list.value) {
    list.value[li].classList.remove('active')
  }
  list.value[index].classList.add('active')

}

onMounted(() => {
  let linkItems = document.querySelectorAll('nav.aside-menu ul li a') as HTMLLElement;
  hoverAnimation(linkItems)
})
</script>
<style scoped lang="scss">
/*.dark{
//background: linear-gradient(145deg, #1e2024, #23272b)
}*/
.bg-theme {
  background: var(--base-theme);
}

nav {
  ul {
    position: fixed;
    bottom: 0;
    width: 100%;

    li {
      position: relative;

      &:after {
        content: "";
        width: 0;
        height: 100%;
        position: absolute;
        left: -2px;
        top: 0;
        background-color: rgba(0, 0, 0, 0.05);
        transition: width 1s linear;
        z-index: -1;
      }

      &:hover {

        &:after {
          border-left: 3px solid rgba(0, 0, 0, 1);
          width: 100%;
        }

      }


    }
  }
}

.active {
  &:after {
    border-left: 3px solid rgba(0, 0, 0, 1);
    width: 100%;
  }
}



</style>
