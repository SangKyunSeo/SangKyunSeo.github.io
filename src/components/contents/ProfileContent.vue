<template>
  <div class="row justify-content-md-center align-items-center profile g-0">
    <h1 class="profile-header">Profile</h1>
    <div class="col mt-5">
      <img
        src="@/assets/sangkyun.jpg"
        class="rounded mx-auto d-block"
        style="height: 350px"
        alt="profileImg"
      />
    </div>
    <div class="col">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(title, index) in profileTitle" :key="index">
          <i :class="title"></i>
          <span
            class="profile-details-contents"
            :class="{ clickable: title.includes('github') }"
            @click="goGithubPage(title, profileData[index])"
          >
            {{ profileData[index] }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  import { useDataStore } from "@/stores/dataStore/dataStore.js"
  import { ref, onMounted } from "vue"
  const dStore = useDataStore()
  const profileTitle = ref([])
  const profileData = ref([])

  const goGithubPage = (title, data) => {
    if (title.includes("github")) {
      window.location.href = data
    }
  }
  onMounted(() => {
    profileTitle.value = dStore.getProfileTitle()
    profileData.value = dStore.getProfileDataList()
  })
</script>
<style scoped>
  .profile {
    width: 80%;
    margin: 0 auto;
  }
  .profile-header {
    margin-top: 70px;
    text-align: center;
  }
  .profile-details-contents {
    margin-left: 20px;
  }
  .clickable {
    cursor: pointer;
  }
  .clickable:hover {
    color: gray;
  }
</style>
