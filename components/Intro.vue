<template>
  <div class="intro">
    <div class="intro__aboutme">
      <h1>
        Software Developer
      </h1>
      <p>
        I'm <u>Adavize</u>, a software developer with 3 years worth of
        experience developing intuitive user interfaces and smooth web
        experiences. Currently works at Globus Bank Limited as a frontend
        developer.
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
  margin: 25% 0 0% 0;

  a {
    color: inherit;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
    line-height: 100%;
  }

  p {
    margin-top: 3%;
    line-height: 2.3rem;
  }

  @media screen and (min-width: 80rem) {
    flex-direction: row;
    margin: 15% 0 0% 0;

    h1 {
      margin-bottom: 1rem;
      font-size: 4rem;
    }
  }

  &__aboutme {
    width: 100%;

    @media screen and (min-width: 80rem) {
      width: 65%;
    }
  }

  &__mypicture {
    width: 100%;
    text-align: right;
    margin: 2rem 0;

    img {
      width: 100%;
      max-width: 300px;
      display: none;
    }

    @media screen and (min-width: 80rem) {
      width: 48%;
      text-align: end;
      margin: 0;

      img {
        width: 320px;
        display: inline-block;
      }
    }
  }
}
</style>
