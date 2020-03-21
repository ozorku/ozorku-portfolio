<template>
  <div class="intro">
    <div class="intro__aboutme">
      <h1>Hello, I'm <br />Adavize Ozorku</h1>
      <p>
        I'm a software developer based in Lagos, Nigeria specializing in
        developing exceptional websites and applications. I’m currently working
        as a frontend developer at Globus Bank Limited. I’m a huge fan of
        Vue.js/NuxtJS and love to tinker around CSS
      </p>
    </div>
    <div class="intro__mypicture">
      <img
        src="~/assets/images/display-photo.svg"
        alt="Adavize Ozorku - Software Developer"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 25% 0 12% 0;

  a {
    color: inherit;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 130%;
  }

  p {
    line-height: 2.3rem;
  }

  @media screen and (min-width: 80rem) {
    flex-direction: row;
    margin: 15% 0 12% 0;

    h1 {
      margin-bottom: 1rem;
      font-size: 4rem;
    }
  }

  &__aboutme {
    width: 100%;

    @media screen and (min-width: 80rem) {
      width: 63%;
    }
  }

  &__mypicture {
    width: 100%;
    text-align: right;
    margin: 2rem 0;

    img {
      width: 100%;
      max-width: 350px;
    }

    @media screen and (min-width: 80rem) {
      width: 48%;
      text-align: end;
      margin: 0;

      img {
        width: 320px;
      }
    }
  }
}
</style>
