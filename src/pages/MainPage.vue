<template>
  <MainHeader @tab="tabControll" />
  <SummaryContent class="summary-content" />
  <div class="div-profile" id="profile_area">
    <ProfileContent />
  </div>
  <div class="div-skills" id="skill_area">
    <SkillContent />
  </div>
  <div class="div-projects" id="project_area">
    <ProjectContent />
  </div>
</template>
<script setup>
  import MainHeader from "../components/headers/MainHeader.vue"
  import SummaryContent from "@/components/contents/SummaryContent.vue"
  import ProfileContent from "@/components/contents/ProfileContent.vue"
  import SkillContent from "@/components/contents/SkillContent.vue"
  import ProjectContent from "@/components/contents/ProjectContent.vue"

  const tabControll = (data) => {
    const el = document.getElementById(data)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }
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
    height: 100vh;
    margin-top: 40px;
  }
  .div-projects {
    background-color: white;
  }
</style>
