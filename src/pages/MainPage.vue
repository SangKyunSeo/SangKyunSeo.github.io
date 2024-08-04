<template>
  <MainHeader />
  <SummaryContent class="summary-content" />
  <div class="div-profile">
    <ProfileContent />
  </div>
  <div class="div-skills">
    <SkillContent />
  </div>
</template>
<script setup>
  import MainHeader from "../components/headers/MainHeader.vue"
  import SummaryContent from "@/components/contents/SummaryContent.vue"
  import ProfileContent from "@/components/contents/ProfileContent.vue"
  import SkillContent from "@/components/contents/SkillContent.vue"
</script>
<style scoped>
  .summary-content {
    height: 100vh;
    line-height: 100vh;
  }
  .div-profile {
    height: 100vh;
    margin-top: 40px;
    background-color: white;
  }
  .div-skills {
    margin-top: 40px;
  }
</style>
