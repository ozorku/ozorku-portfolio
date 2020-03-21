<template>
  <div class="contact">
    <h2>Get in touch!</h2>
    <p>
      Feel free to get in touch, I'm currently available for a Frontend
      Developer role and willing to consider interesting proposals.
      <a
        href="mailto:adavizeozorku@gmail.com"
        style="text-decoration: underline; color: inherit; "
        >adavizeozorku@gmail.com</a
      >
    </p>

    <div class="contact__links">
      <a href="https://github.com/ozorku" target="_blank" class="link"
        ><span>GTHB</span><span>GITHUB</span></a
      >
      <a href="https://www.linkedin.com/in/ozorku/" target="_blank" class="link"
        ><span>LKDN</span> <span>LINKEDIN</span></a
      >
      <a href="https://twitter.com/ozorku" target="_blank" class="link"
        ><span>TWTR</span> <span>TWITTER</span></a
      >

      <a href="https://dribbble.com/ozorku" target="_blank" class="link"
        ><span>DRBL</span> <span>DRIBBLE</span></a
      >
    </div>
    <!-- <p>Got something for me? Shoot me a message.</p> -->
  </div>
</template>

<style lang="scss" scoped>
.contact {
  text-align: center;
  max-width: 680px;
  margin: 15% auto;

  p {
    line-height: 200%;
  }

  h2 {
    font-size: 2rem;
  }

  h2 {
    margin-bottom: 3%;
  }

  &__links {
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

    &:hover > * {
      opacity: 0.2;
    }

    .link {
      border: 1px solid transparent;
      padding: 5px 10px;
      cursor: pointer;
      color: inherit;
      span {
        &:nth-child(1) {
          display: inline-block;
        }

        &:nth-child(2) {
          display: none;
        }
      }

      &:hover {
        background: #f2f2f2;
        opacity: 1;
        box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);
        border: 1px solid rgb(240, 240, 240);

        span {
          &:nth-child(1) {
            display: none;
          }

          &:nth-child(2) {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
