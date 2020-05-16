<template>
  <div class="intro-parent container">
    <div class="intro-heading">
      <div class="intro-heading__aboutme">
        <p>Hi, I'm <span style="color: #48C8FF">Adavize Ozorku</span></p>
        <h1>Software Developer</h1>
      </div>
      <div class="intro-heading__mypicture">
        <img
          src="~/assets/images/display-photo.svg"
          alt="Adavize Ozorku - Software Developer"
        />
      </div>
    </div>
    <div class="intro-summary">
      I'm an energetic software developer with ~4 years worth of experience
      working with various teams and developing intuitive user interfaces for a
      snappy web & mobile experience. I've been accused of having an obsessive
      attention to detail
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro-parent {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro-summary {
  font-size: 18px;
  line-height: 180%;
  margin-top: 50px;

  @media screen and (min-width: 50rem) {
    font-size: 20px;
  }
}

.intro-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: inherit;
  }

  h1 {
    font-size: 4rem;
    line-height: 100%;
  }

  @media screen and (min-width: 50rem) {
    flex-direction: row;

    h1 {
      font-size: 6rem;
    }
  }

  &__aboutme {
    width: 100%;

    @media screen and (min-width: 50rem) {
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

    @media screen and (min-width: 60rem) {
      width: 48%;
      text-align: end;
      margin: 0;

      img {
        width: 100%;
        display: inline-block;
      }
    }
  }
}
</style>
