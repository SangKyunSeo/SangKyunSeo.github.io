<template>
  <h1 style="text-align: center; color: white; margin-top: 40px; padding-top: 70px">My Skills</h1>
  <div class="list-area">
    <ul class="list skill-list">
      <li class="list-group-item" v-for="(title, index) in skillTitleList" :key="index">
        <div class="list-detail-header">{{ title }}</div>
        <div
          class="progress list-detail-content"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar progress-content" :style="areaStyle(skillDataList[index])">
            {{ skillDataList[index] + "%" }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import { useDataStore } from "@/stores/dataStore/dataStore.js"
  import { ref, onMounted } from "vue"

  const dStore = useDataStore()

  const skillTitleList = ref([])
  const skillDataList = ref([])

  const areaStyle = (data) => {
    return { width: data + "%" }
  }

  onMounted(() => {
    skillTitleList.value = dStore.getSkillTitleList()
    skillDataList.value = dStore.getSkillDataList()
  })
</script>
<style scoped>
  .list-area {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    align-items: center;
  }
  .skill-list {
    text-align: center;
    width: 80%;
  }
  .list-group-item {
    width: 100%;
    display: flex;
    padding-top: 10px;
  }
  .list-detail-header {
    width: 20%;
    color: white;
    font-weight: 900;
    margin-left: 20px;
  }
  .list-detail-content {
    width: 80%;
    height: 32px;
    box-shadow: 2px 2px 2px;
  }
  .progress-content {
    background: linear-gradient(to right, #e1ffde, #4e88fc);
    text-align: right;
    padding-right: 20px;
    font-weight: 900;
    font-size: 14px;
  }
</style>
