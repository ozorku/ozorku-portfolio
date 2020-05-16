<template>
  <div class="contact container">
    <h2>Send me a message</h2>
    <div
      style="color: rgb(168, 178, 209);  max-width: 600px;   margin: 0 auto;"
    >
      Do you have a question or proposal or just want to get in touch? Go ahead.
      Also, I'm looking for new opportunities in Frontend or mobile app
      development and willing to consider interesting proposals.
    </div>
    <button @click="openMail" style="margin-top: 30px">
      Shoot . Your . Shot!
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    openMail() {
      window.open("https://mailto:adavizeozorku@gmail.com");
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  text-align: center;
  margin: 20vh auto;
  padding: 5vh 0;
  background-image: url("../assets/images/everybody-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>
