<template>
  <div :style="backGroundStyle">
    <MainPage />
  </div>
</template>

<script setup>
  import MainPage from "./pages/MainPage.vue"
  import { ref, onMounted, computed } from "vue"
  let backGroundColor = ref(255)

  const backGroundStyle = computed(() => {
    return {
      backgroundColor: `rgb(${backGroundColor.value},${backGroundColor.value},${backGroundColor.value})`,
    }
  })

  const changeBackGroundColor = () => {
    const interval = setInterval(() => {
      if (backGroundColor.value > 128) {
        backGroundColor.value -= 1
      } else {
        clearInterval(interval)
      }
    }, 10)
  }

  onMounted(() => {
    changeBackGroundColor()
  })
</script>
