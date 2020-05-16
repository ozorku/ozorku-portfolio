<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url("~/assets/styles.scss");

body {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  color: rgb(204, 214, 246);
  background: #111;
  font-size: 16px;
  line-height: 180%;
  @media screen and (min-width: 50rem) {
    font-size: 18px;
  }
}

button {
  background: transparent;
  border: 0.5px solid #48c8ff;
  padding: 15px 40px;
  color: #48c8ff;
  font-size: 18px;
  cursor: pointer;
}

h1 {
  font-size: calc(2.3rem + 0.5 * ((100vw - 20rem) / 60));
  line-height: calc(1.3em + 0.6 * ((100vw - 20em) / 60));
  font-weight: 700;
  margin: 0;

  @media screen and (min-width: 80rem) {
    h1 {
      font-size: calc(2rem + 0.5 * ((100vw - 20rem) / 60));
      line-height: calc(4rem + 0.6 * ((100vw - 20em) / 60));
    }
  }
}

h2 {
  font-size: calc(1.5rem + 0.5 * ((100vw - 20rem) / 60));
  font-weight: bold;
  margin-bottom: 4vh;

  @media screen and (min-width: 80rem) {
    h2 {
      font-size: calc(2rem + 0.5 * ((100vw - 20rem) / 60));
    }
  }
}

h3 {
  font-size: 1.5rem;
  margin: 0;
}
</style>
