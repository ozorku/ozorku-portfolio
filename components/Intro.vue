<template>
  <div class="intro-parent">
    <div class="intro-heading">
      <div class="intro-heading__aboutme">
        <!-- <h1>Software Developer</h1> -->
        <h1>Hi, I'm Ozorku</h1>
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
      developing intuitive user interfaces for a smooth web & mobile experience.
      I also do a bit of non-professional design. Currently, I work with Globus
      Bank Limited to help develop the best banking experience as a Frontend
      Developer.
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
    font-size: 24px;
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
      font-size: 8rem;
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
