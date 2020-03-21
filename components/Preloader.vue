<template>
  <div class="preloader">
    <div>Loading</div>
  </div>
</template>

<style lang="scss">
.preloader {
  background: white;
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 2;
  overflow-y: hidden;
  display: block;

  div {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
}
</style>
