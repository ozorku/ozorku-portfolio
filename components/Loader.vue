<template>
  <div class="wrapper">
    <svg
      class="everybody-logo"
      width="100"
      height="100"
      viewBox="0 0 569 569"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M284.5 569C441.625 569 569 441.625 569 284.5C569 127.375 441.625 0 284.5 0C127.375 0 0 127.375 0 284.5C0 441.625 127.375 569 284.5 569ZM284.5 525C417.324 525 525 417.324 525 284.5C525 151.676 417.324 44 284.5 44C151.676 44 44 151.676 44 284.5C44 417.324 151.676 525 284.5 525Z"
        fill="#222"
        fill-opacity="1"
      />
      <rect
        x="148"
        y="146"
        width="273"
        height="71"
        fill="#222"
        fill-opacity="1"
      />
      <rect
        x="148"
        y="249"
        width="273"
        height="71"
        fill="#222"
        fill-opacity="1"
      />
      <rect
        x="148"
        y="352"
        width="273"
        height="71"
        fill="#222"
        fill-opacity="1"
      />
    </svg>
    <div class="text">Rerouting to paradise...</div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  height: 100vh;
  width: 100%;
}

.text {
  color: #222;
  margin-top: 10px;
  font-size: 18px;
}

.everybody-logo {
  animation-name: animate-logo;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}

@keyframes animate-logo {
  0% {
    opacity: 0.1;
  }

  100% {
    opacity: 1;
  }
}
</style>
