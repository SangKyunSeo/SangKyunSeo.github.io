<template>
  <ul class="nav justify-content-center fixed-top">
    <li class="nav-item">
      <a class="nav-link" @click="setTab('Home')" href="#" :class="{ active: isHome }">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" @click="setTab('About')" :class="{ active: isAbout }">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" @click="setTab('Portfolio')" :class="{ active: isPortfolio }">
        Portfolio
      </a>
    </li>
  </ul>
</template>
<script setup>
  import { useTabStore } from "@/stores/tabStore/tabStore.js"
  import { ref, onBeforeMount } from "vue"

  const tStore = useTabStore()
  const curTab = ref()
  const isHome = ref(false)
  const isAbout = ref(false)
  const isPortfolio = ref(false)

  const initTabState = () => {
    isHome.value = false
    isAbout.value = false
    isPortfolio.value = false
  }

  const setTab = (tab) => {
    initTabState()

    tStore.setCurTab(tab)
    curTab.value = tab

    if (tab === "Home") isHome.value = true
    if (tab === "About") isAbout.value = true
    if (tab === "Portfolio") isPortfolio.value = true
  }

  onBeforeMount(() => {
    curTab.value = tStore.getCurTab()

    if (curTab.value === "Home") isHome.value = true
    if (curTab.value === "About") isAbout.value = true
    if (curTab.value === "Portfolio") isPortfolio.value = true
  })
</script>
<style scoped>
  .nav {
    background-color: #d9d9d9;
    height: 60px;
    align-items: center;
  }
  .nav-item a {
    color: black;
  }
  .nav-item .active {
    color: green;
  }
</style>
