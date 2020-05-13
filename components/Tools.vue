<template>
  <div class="what-i-do">
    <div class="columns">
      <div class="content">
        <h1>
          Working on it...
        </h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.what-i-do {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.columns {
  .content {
    text-align: center;
    height: 100%;
    color: white;
    width: 100%;
  }
}

h1 {
  animation-name: fadeText;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-play-state: running;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes fadeText {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
