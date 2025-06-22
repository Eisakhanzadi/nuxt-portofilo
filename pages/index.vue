<script setup lang="ts">
import me from '~/assets/images/profile/me.png';
// start product image
import elinor from '~/assets/images/products/elinor.png';
import benedito from '~/assets/images/products/benedito.png';
import atlas from '~/assets/images/products/atlas.png';
import ika from '~/assets/images/products/ika.png';
import aria from '~/assets/images/products/aria.png';
import narin from '~/assets/images/products/narin.png';
import nini from '~/assets/images/products/nini.png';
import pa from '~/assets/images/products/pa.png';
import shahin from '~/assets/images/products/shahin.png';
import TopTitle from "~/components/topTitle.vue";
import CV from 'public/Cv/Eisa_khanzadi_persian.pdf'
const showCv = ref(false);

function calculateExperience() {
  const time = 2023
  const date = new Date()
  return Number(date.getFullYear() - time)
}

useHead({
  title: 'home'
})
const projects = [
  {
    id: 1,
    img: elinor,
    title: 'elinor shop',
    url: "https://elinorboutique.com/"
  },
  {
    id: 2,
    img: benedito,
    title: 'benedito shop',
    url: "https://benedito.ir/"
  },
  {
    id: 3,
    img: atlas,
    title: 'atlas mode shop',
    url: "https://atlasmode.ir/"
  },
  {
    id: 4,
    img: pa,
    title: 'pashik shop',
    url: "https://pashikshoes.com/"
  },
  {
    id: 5,
    img: shahin,
    title: 'shahinbaba shop',
    url: "http://shahinbaba.ir/"
  },
  {
    id: 6,
    img: nini,
    title: 'nini plus shoes shop',
    url: "https://niniplusshoes.com/"
  },
  {
    id: 7,
    img: narin,
    title: 'narin center shop',
    url: "https://narincenter.com/"
  },
  {
    id: 8,
    img: benedito,
    title: 'nahidtorabi shop',
    url: "http://nahidtorabi.com/"
  },
  {
    id: 9,
    img: aria,
    title: 'ariya janebi shop',
    url: "https://ariyajanebi.ir/"
  },
  {
    id: 10,
    img: ika,
    title: 'ikagok shop',
    url: "https://ikagok.com/"
  },
]
const about = [
  {
    name: 'Email',
    text: 'esakhanzadi@gmail.com',
  },
  {
    name: 'Date of Brith',
    text: '18,june,1996',
  },
  {
    name: 'location',
    text: 'Tehran,Gorgan',
  },
]
const skills = [
  {
    name: 'html 5',
    progress: '100'
  },
  {
    name: 'css 3',
    progress: '100'
  },
  {
    name: 'scss',
    progress: '70'
  },
  {
    name: 'bootstrap',
    progress: '90'
  },
  {
    name: 'tailwindCss',
    progress: '90'
  },
  {
    name: 'javascript',
    progress: '80'
  },
  {
    name: 'vuejs',
    progress: '85'
  },
  {
    name: 'nuxtjs',
    progress: '80'
  },
  {
    name: 'reactjs',
    progress: '35'
  },
  {
    name: 'git & github',
    progress: '70'
  },
  {
    name: 'oop',
    progress: '70'
  },
]
onMounted(() => {
  const screenHeight = window.innerHeight
  const nav = document.querySelectorAll<HTMLUListElement>('nav.aside-menu ul li')
  const links = document.querySelectorAll<HTMLLinkElement>('nav.aside-menu ul li a');

  function addActiveClass(id: string): void {
    Array.from(nav).forEach(item => {
      if (item.getAttribute('id') === id) {
        item.classList.add('active')
      }
    })
  }

  function removeActiveClass() {
    Array.from(nav).forEach(item => item.classList.remove('active'))
  }

  document.addEventListener('scroll', (e: Event) => {
    const sections = document.querySelectorAll<HTMLElement>('#home section');
    Array.from(sections).forEach((item, index) => {
      const topElement = item.getBoundingClientRect().top
      const bottomElement = item.getBoundingClientRect().bottom
      if (topElement > 0 && topElement < screenHeight) {
        nav[index].classList.add('active')
        links[index].classList.add('active-effect')
      }
      if (topElement < 0 || topElement > screenHeight) {
        nav[index].classList.remove('active')
        links[index].classList.remove('active-effect')
      }
    })

  })
})
onBeforeUnmount(() => {
  document.removeEventListener('scroll', () => {
  })
})
</script>

<template>
  <section class="h-full pt-[5%]" id="home">
    <u-container>
      <section id="top">
        <div class="grid grid-cols-12 items-center gap-y-16 md:gap-y-28 my-[10%]">
          <div class="content flex flex-col items-center xl:items-start col-span-12 xl:col-span-8  ">
            <div class="flex gap-6 md:gap-7 flex-col items-start justify-center">
              <h1 class=" text-3xl lg:text-4xl xl:text-5xl text-white"> Hi, I'm <strong
                  class="text-4xl lg:text-5xl xl:text-6xl text-warning">Eisa
                khanzadi</strong></h1>
              <div class=" grid gap-3.5">
                <p class="text-3xl lg:text-4xl font-bold text-white ">FrontEnd web Developer</p>
                <p class="text-xl lg:text-2xl text-gray ">crafting high-quality, user-friendly web apps.</p>
              </div>
            </div>
            <div class="flex items-center gap-3 mt-8">
              <nuxt-link
                  to="#my-project"
                  class="btn px-3 py-1.5 border border-[var(--base-warning)] !text-white rounded-full bg-transparent transition duration-200 ease-ease hover:!text-black hover:bg-[var(--base-warning)]">
                my work
              </nuxt-link>
              <nuxt-link
                  to="#contact-me"
                  class="btn px-3 py-1.5 border bg-warning border-[var(--base-warning)] rounded-full hover:!bg-transparent hover:!text-white  transition duration-200 ease-ease">
                contact me
              </nuxt-link>
            </div>
            <div class="mt-5 flex items-center gap-x-2">
              <span
                  @click.prevent="showCv = !showCv"
                  class="btn text-xl font-bold text-white ">
                CV :
              </span>
              <button>
                <a download href="/Cv/Eisa_khanzadi_persian.pdf" class="btn cursor-pointer px-2 mx-1 py-1 border bg-warning border-[var(--base-warning)] rounded-full hover:!bg-transparent hover:!text-white  transition duration-200 ease-ease text-sm">Fa</a>
              </button>
              <button disabled class="opacity-50">
                <a class="btn px-2 mx-1 py-1 border bg-warning border-[var(--base-warning)] rounded-full  transition duration-200 ease-ease text-sm">En</a>
              </button>
            </div>
          </div>
          <div class=" col-span-12 xl:col-span-4  flex place-center justify-center items-center">
            <move-circle-borders w="85%" h="85%" :img="me"/>
          </div>
        </div>
        <next id="about-me"/>
      </section>
      <section id="about-me">
        <div class="my-[10%] py-[5%] ">
          <top-title subject="ABOUT ME" subTitle="Some Word About Me" title="Know Me"/>
          <div class="card mt-3">
            <div class="card-body grid grid-cols-3 gap-10">
              <div class="content-about col-span-3 lg:col-span-2 mt-3">
                <div>
                  <h1 class="font-bold text-3xl leading-10 text-white">I'm Eisa Khanzadi, a Web Developer</h1>
                  <p class="text-lg text-justify text-gray">
                    I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick
                    websites
                    that provide real value to the end user. Thousands of clients have procured exceptional results
                    while
                    working
                    with me. Delivering work within time and budget which meets client's requirements is our motto.
                  </p>
                </div>
                <div class="card-info mt-5">
                  <ul class="flex flex-col md:flex-row md:justify-between md:items-center gap-5 md:gap-0">
                    <li class="shrink-1" v-for="item in about" :key="item.name">
                      <p class="font-bold text-warning">{{ item.name }} : </p>
                      <p class="font-bold text-white" v-if="item.name.toLowerCase()!=='email'">{{ item.text }}</p>
                      <u-link target="_blank" v-else class="font-bold text-white" :to="`mailto:${item.text}`">{{
                          item.text
                        }}
                      </u-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-span-3 lg:col-span-1 flex justify-center items-center">
                <cards-exprice :date="calculateExperience()"/>
              </div>
            </div>
          </div>
        </div>
        <next id="my-project"/>
      </section>
      <section id="my-project">
        <div class="my-[10%] py-[5%] ">
          <top-title subject="PROJECTS" sub-title="Participation in development"
                     title="Some development partnership projects"/>
          <div class="mt-[5%] grid grid-cols-12 gap-3.5 md:gap-5">
            <cards-product class="col-span-6 md:col-span-4 lg:col-span-3" v-for="item in projects"
                           :key="item.id" :project="item"/>
          </div>
        </div>
        <next id="skills"/>
      </section>
      <section id="skills">
        <div class="my-[10%] py-[5%] ">
          <top-title subject="skills" title="Things I'm good at" sub-title="My Skills"/>
          <div class="mt-[5%] grid grid-cols-12 gap-5">
            <circle-progres-bar h="120px" w="120px" class="col-span-6 md:col-span-4 lg:col-span-3 2xl:col-span-2"
                                v-for="(item,index) in skills" :index="index" :key="item.name" :text="item.name"
                                :number="item.progress"/>
          </div>
        </div>
        <next id="contact-me"/>
      </section>
      <section id="contact-me">
        <div class="my-[10%] py-[5%]">

          <top-title subject="CONTACT" sub-title="Contact Me" title="Let's Get in touch"/>
          <ul class="grid grid-cols-12 gap-3 mt-10">
            <li class=" col-span-12 sm:col-span-6 xl:col-span-3">
              <u-link target="_blank" to="mailto:esakhanzadi@gmail.com"
                      class="flex xl:justify-center items-center gap-2.5">
                <span class="border !border-white border-solid inline-block p-3.5 rounded-full"><icons-email/></span>
                <span class="text-white text">esakhanzadi@gmail.com</span>
              </u-link>
            </li>
            <li class=" col-span-12 sm:col-span-6 xl:col-span-3">
              <u-link target="_blank" to="tel:09118738301" class="flex xl:justify-center items-center gap-2.5">
                <span class="border !border-white border-solid inline-block p-3.5 rounded-full"><icons-tellephone/></span>
                <span class="text-white text">09118738301</span>
              </u-link>
            </li>
            <li class=" col-span-12 sm:col-span-6 xl:col-span-2">
              <u-link target="_blank" to="https://t.me/esakhanzadi" class="flex xl:justify-center items-center gap-2.5">
                <span class="border !border-white border-solid inline-block p-3.5 rounded-full"><icons-telegram/></span>
                <span class="text-white text">telegram</span>
              </u-link>
            </li>
            <li class=" col-span-12 sm:col-span-6 xl:col-span-2">
              <u-link target="_blank" to="https://www.linkedin.com/in/esakhanzadi"
                      class="flex xl:justify-center items-center gap-2.5">
                <span class="border !border-white border-solid inline-block p-3.5 rounded-full"><icons-linkedin/></span>
                <span class="text-white text">linkedin</span>
              </u-link>
            </li>
            <li class=" col-span-12 sm:col-span-6 xl:col-span-2">
              <u-link target="_blank" to="https://github.com/Eisakhanzadi"
                      class="flex xl:justify-center items-center gap-2.5">
                <span class="border !border-white border-solid inline-block p-3.5 rounded-full"><icons-github/></span>
                <span class="text-white text">github</span>
              </u-link>
            </li>
          </ul>
        </div>
        <!--        <next/>-->
      </section>

    </u-container>
  </section>
</template>

<style lang="scss" scoped>
.content {
  * {
    font-family: Comfortaa, sans-serif;
  }
}

.show-cv-enter-active {
  animation: showCv 0.5s ease forwards;
}

.show-cv-leave-active {
  animation: showCv 0.5s ease forwards reverse;
}

@keyframes showCv {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
