<template>
  <div class="layout">
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import "~/assets/Inter/inter.css";

body {
  font-size: calc(0.9375rem + 0.5 * ((100vw - 20rem) / 60));
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  line-height: calc(2rem + 0.6 * ((100vw - 20em) / 60));
  overflow-x: hidden;
  color: #1d1d1f;
}

p {
  margin: 0;
}

h1 {
  font-size: calc(2.3rem + 0.5 * ((100vw - 20rem) / 60));
  line-height: calc(1.3em + 0.6 * ((100vw - 20em) / 60));
  font-weight: 700;
  margin: 0;
}

h2 {
  font-size: calc(1.125rem + 0.5 * ((100vw - 20rem) / 60));
}

h3 {
  font-size: 1.5rem;
  margin: 0;
}

@media screen and (min-width: 80rem) {
  body {
    font-size: 1.125rem;
    line-height: calc(1.3em + 0.6 * ((100vw - 20em) / 60));
  }

  h1 {
    font-size: calc(3rem + 0.5 * ((100vw - 20rem) / 60));
    line-height: calc(4rem + 0.6 * ((100vw - 20em) / 60));
  }

  h2 {
    font-size: calc(2rem + 0.5 * ((100vw - 20rem) / 60));
  }
}

.layout {
  max-width: 1124px;
  width: 90%;
  margin: 0 auto;
}

.faded-top {
  width: 100%;
  background: white;
  filter: blur(1rem);
  height: 50px;
  position: fixed;
  top: -20px;
  left: 0;
}

.faded-bottom {
  position: fixed;
  bottom: -20px;
  background: white;
  left: 0;
  width: 100%;
  filter: blur(1rem);
  height: 50px;
}
</style>
