<script setup lang="ts">
const {date, content} = defineProps({
  date: {
    default: 2,
    type: Number
  },
  content: {
    default: 'years of experience',
    type: String
  }
})
</script>

<template>
    <div class="card border border-1 px-16 pb-5 pt-5 flex justify-center items-center">
      <div class="card-body flex justify-center items-center">
        <div class="card-text">
          <div class="number">
            <span class="block">{{ date }}</span>
          </div>
          <p>{{ content }}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.card {
  background-color:var(--base-theme);
  z-index: 3;
  position: relative;
  width: fit-content;
  &:after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border:1px solid #000;
    transform: rotate(2deg);
    transform-origin: center;
    background-color: transparent;
    transition: 0.5s ease all;
    z-index: -1;
  }
  &:before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border:1px solid #000;
    transform: rotate(-2deg);
    transform-origin: center;
    background-color: transparent;
    transition: 0.5s ease all;
    z-index: -1;
  }
  &:hover{
    &:after , &:before{
      transform: rotate(0);
      opacity: 0;
    }
  }
  .card-text {
    .number {
      font-size: 200px;
      line-height: 90%;
      text-align: center;
    }

    p {
      font-size: 20px;
      text-align: center;
      font-weight: 500;
    }
  }
}
</style>
