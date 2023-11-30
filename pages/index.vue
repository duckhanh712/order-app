<script lang="ts" setup></script>

<template>
  <div class="home-page">
    <h1 class="title">Smart Order</h1>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > .title {
    font-size: 6rem;
    text-align: center;
    background: #3984f4;
    background: linear-gradient(
      169.4deg,
      #3984f4 -6.01%,
      #0cd3ff 36.87%,
      #2f7cf0 78.04%,
      #0e65e8 103.77%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
