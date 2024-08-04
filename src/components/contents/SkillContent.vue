<template>
  <h1 style="text-align: center; color: white; margin-top: 40px">My Skills</h1>
  <ul class="list skill-list">
    <li class="list-group-item">
      <div class="list-detail-header">HTML</div>
      <div
        class="progress list-detail-content"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
      </div>
    </li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
</template>
<style scoped>
  .skill-list {
    text-align: center;
    width: 80%;
  }
  .list-group-item {
    width: 100%;
    display: flex;
  }
  .list-detail-header {
    width: 20%;
  }
  .list-detail-content {
    width: 80%;
  }
</style>
