<template>
  <ul class="nav justify-content-center fixed-top">
    <li class="nav-item">
      <a class="nav-link" @click="setTab('Home')" href="#" :class="{ active: isHome }">Home</a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="#profile_area"
        @click="setTab('Profile')"
        :class="{ active: isProfile }"
      >
        Profile
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="#skill_area"
        @click="setTab('Skills')"
        :class="{ active: isSkills }"
      >
        Skills
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="#project_area"
        @click="setTab('Projects')"
        :class="{ active: isProjects }"
      >
        Projects
      </a>
    </li>
  </ul>
</template>
<script setup>
  import { useTabStore } from "@/stores/tabStore/tabStore.js"
  import { ref, onBeforeMount, defineEmits } from "vue"

  const tStore = useTabStore()
  const curTab = ref()
  const isHome = ref(false)
  const isProfile = ref(false)
  const isSkills = ref(false)
  const isProjects = ref(false)
  const emit = defineEmits(["tab"])

  const initTabState = () => {
    isHome.value = false
    isProfile.value = false
    isSkills.value = false
    isProjects.value = false
  }

  const setTab = (tab) => {
    initTabState()

    tStore.setCurTab(tab)
    curTab.value = tab

    if (tab === "Home") isHome.value = true
    if (tab === "Profile") isProfile.value = true
    if (tab === "Skills") isSkills.value = true
    if (tab === "Projects") isProjects.value = true

    emit("tab", tab)
  }

  onBeforeMount(() => {
    curTab.value = tStore.getCurTab()

    if (curTab.value === "Home") isHome.value = true
    if (curTab.value === "Profile") isProfile.value = true
    if (curTab.value === "Skills") isSkills.value = true
    if (curTab.value === "Projects") isProjects.value = true
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
