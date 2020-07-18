<template>
  <div>
    <div class="intro">
      <div class="container">
        <div class="logo">
          <img src="~/assets/images/logo.svg" alt="" />
        </div>
        <div class="content">
          <div>
            <div class="greet">
              Hi, I'm <span style="color: #EAA942">Moses</span>
            </div>
            <h1 style="color: white; margin-top: 10px">I build mobile Apps</h1>
            <button>Work with me</button>
            <ul class="socials">
              <li>
                <a href="">
                  <img src="~/assets/images/github.svg" alt="logo"
                /></a>
              </li>
              <li>
                <a href="">
                  <img src="~/assets/images/linkedin.svg" alt="logo"
                /></a>
              </li>
              <li>
                <a href="">
                  <img src="~/assets/images/email.svg" alt="logo"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="screen-bar">
      <ul class="container">
        <li><img src="~assets/images/suitcase.svg" alt="" />Work</li>
        <li><img src="~assets/images/resume.svg" alt="" />Resume</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  background-image: url("../assets/images/bg-mobile.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-position: center;
  color: #fff;
  font-size: 25px;

  @media screen and (min-width: 50rem) {
    background-image: url("../assets/images/bg-desktop.svg");
    font-size: 35px;
  }
}

button {
  margin-top: 25px;
  margin-bottom: 40px;
  @media screen and (min-width: 50rem) {
    margin-top: 35px;
    margin-bottom: 57px;
  }
}

.logo {
  padding-top: 50px;
  img {
    width: 60px;
    @media screen and (min-width: 50rem) {
      width: 78px;
    }
  }
}

.content {
  // background: red;
  width: 100%;
  height: 70vh;
  margin-top: 30px;

  @media screen and (min-width: 50rem) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul.socials {
    max-width: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      padding: 0;
      margin: 0;
    }
  }
}

.screen-bar {
  background: #0a1d2b;
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #b3d1e5;

    li {
      margin-right: 40px;
      display: flex;
      align-items: center;
      img {
        margin-right: 5px;
      }
    }
  }
  @media screen and (min-width: 50rem) {
    height: 100px;
  }
}
</style>
