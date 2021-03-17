<template>
  <div class="intro-parent container">
    <div class="intro-heading">
      <div class="intro-heading__aboutme">
        <p>Hi, I'm <span style="color: #48C8FF">Adavize Hassan</span></p>
        <h1 class="heading-animation"></h1>
        <h1>Engineer</h1>
      </div>
      <div class="intro-heading__mypicture">
        <img
          src="~/assets/images/Group 8.svg"
          alt="Adavize Ozorku - Software Engineer"
        />
      </div>
    </div>
    <div class="intro-summary">
      I'm a software Engineer with ~4 years worth of experience working with
      various teams and developing intuitive user interfaces for a snappy web &
      mobile experience. I've been described as "having an obsessive attention
      to detail"
    </div>
    <span class="resume-link">
      <a href="resume.pdf" target="_blank">My Résumé</a>
    </span>
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

.resume-link {
  margin-top: 50px;
  a {
    color: #48c8ff;
  }
}

.intro-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.heading-animation {
  &::before {
    content: "a";
    display: inline-block;
    animation-name: animateText;
    animation-play-state: running;
    animation-duration: 8s;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    white-space: nowrap;
    color: rgb(168, 178, 209);
  }
}

@keyframes animateText {
  0% {
    content: "Frontend";
  }

  100% {
    content: "Mobile App";
  }
}
</style>
