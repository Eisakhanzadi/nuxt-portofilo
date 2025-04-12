<script setup lang="ts">
const emit = defineEmits(['showMenu'])
const showMenu = ref(false)
const route = useRoute()
onMounted(() => {
  const navbar = document.querySelector('.navbar-top')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('show')
    } else {
      navbar.classList.remove('show')
    }
  })
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
    id: 'my-project',
    name: 'Project'
  },
  {
    id: 'skills',
    name: 'Skills'
  },
  {
    id: 'contact-me',
    name: 'Contact'
  },
]
watch(()=>route.path , ()=>{
  showMenu.value = false
})
</script>

<template>
  <section class="navbar-top xl:hidden">
    <u-container>
      <nav class="py-5">
        <ul class="nav flex items-center justify-between gap-5 md:text-base">
          <li class="nav-item">
            <u-link to="/" class="font-semibold text-lg ">
              Eisa khanzadi
            </u-link>
          </li>
          <li class="nav-item" id="menu-btn-container">
            <div id="menu-btn">
              <input type="checkbox" id="menu-checkbox" v-model="showMenu"/>
              <label for="menu-checkbox" id="menu-label">
                <span id="menu-bar"></span>
              </label>
            </div>
          </li>
        </ul>
      </nav>
    </u-container>
    <transition name="showModal">
      <navbar-mobile @close="showMenu=!showMenu" v-if="showMenu" :links="navLinks"/>
    </transition>
  </section>
</template>

<style scoped>
* {
  font-family: Calibri, sans-serif;
}

li {
  z-index: 15;
}

.show {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  animation: show ease 1s forwards 1;
  z-index: 10;
}

@keyframes show {
  from {
    transform: translateY(-100%);
    backdrop-filter: blur(0);
  }
  to {
    transform: translateY(0);
    backdrop-filter: blur(3px);
  }
}

/* start hamburger menu */


#menu-btn {
  width: 39px;
  overflow: hidden;
}

#menu-checkbox {
  display: none;
}

#menu-label {
  position: relative;
  display: block;
  height: 29px;
  cursor: pointer;
}

#menu-label:before,
#menu-label:after,
#menu-bar {
  position: absolute;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #000;
}

#menu-label:before,
#menu-label:after {
  content: "";
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
}

#menu-label:before {
  top: 0;
}

#menu-label:after {
  top: 12px;
}

#menu-bar {
  top: 24px;
}

#menu-bar:before {
  content: "MENU";
  position: absolute;
  top: 5px;
  right: 0;
  left: 0;
  color: #000;
  font-size: 12px;
  font-weight: bold;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  text-align: center;
}

#menu-checkbox:checked + #menu-label:before {
  left: -39px;
}

#menu-checkbox:checked + #menu-label:after {
  left: 39px;
}

#menu-checkbox:checked + #menu-label #menu-bar:before {
  animation: moveUpThenDown 0.8s ease 0.2s forwards,
  shakeWhileMovingUp 0.8s ease 0.2s forwards,
  shakeWhileMovingDown 0.2s ease 0.8s forwards;
}

@keyframes moveUpThenDown {
  0% {
    top: 0;
  }
  50% {
    top: -27px;
  }
  100% {
    top: -15px;
  }
}

@keyframes shakeWhileMovingUp {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(10deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

@keyframes shakeWhileMovingDown {
  0% {
    transform: rotateZ(0);
  }
  80% {
    transform: rotateZ(3deg);
  }
  90% {
    transform: rotateZ(-3deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

/*transition*/
.showModal-enter-active {
 animation: showModal 0.5s ease 1 forwards;
}

.showModal-leave-active {
 animation: showModal 0.5s ease 1 reverse;
}

@keyframes showModal {
  from {
  height: 0;
    opacity: 0;
  }
  to {
  height: 100vh;
    opacity: 1;
  }
}
</style>
