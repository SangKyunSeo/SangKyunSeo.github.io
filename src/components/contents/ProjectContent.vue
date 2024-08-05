<template>
  <div class="project-area">
    <h1 class="project-header">Projects</h1>
    <div class="row card-area">
      <div class="card card-div" v-for="(data, index) in projectList" :key="index">
        <div class="card-body">
          <h5 class="card-title">{{ data.title }}</h5>
          <div>
            <p class="row card-text">
              <span class="col-2 content-header">기간</span>
              <span class="col-8 content-body">{{ data.date }}</span>
            </p>
          </div>
          <div>
            <p class="row card-text">
              <span class="col-2 content-header">인원</span>
              <span class="col-8 content-body">{{ data.join }}</span>
            </p>
          </div>
          <div>
            <p class="row card-text">
              <span class="col-2 content-header">내용</span>
              <span class="col-8 content-body">{{ data.content }}</span>
            </p>
          </div>
          <div>
            <p class="row card-text">
              <span class="col-2 content-header">사용 기술</span>
              <span class="col-8 content-body content-skill">{{ data.skill }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useDataStore } from "@/stores/dataStore/dataStore.js"
  import { ref, onMounted } from "vue"

  const dStore = useDataStore()
  const projectList = ref([])

  onMounted(() => {
    projectList.value = dStore.getProjectContentList()
  })
</script>
<style scoped>
  .project-header {
    padding-top: 70px;
    padding-bottom: 20px;
    text-align: center;
  }

  .project-area {
    width: 60%;
    margin: 0 auto;
    background-color: white;
  }

  .project-area .card {
    margin-top: 25px;
  }

  .card-area {
    width: 100%;
  }

  .card-div {
    border: 1px solid #79edda;
  }
  .card-title {
    font-style: italic;
    font-weight: 900;
  }

  .content-body {
    margin-left: 20px;
  }

  .content-header {
    font-weight: 700;
  }
  .content-skill {
    color: gray;
  }
</style>
