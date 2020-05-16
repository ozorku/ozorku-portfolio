<template>
  <div class="contact container">
    <h2>Send me a message!</h2>
    <p style="color: rgb(168, 178, 209);  max-width: 600px;   margin: 0 auto;">
      Feel free to get in touch, I'm currently looking for new opportunities in
      Frontend or mobile app development and willing to consider interesting
      proposals.
    </p>
    <button @click="openMail" style="margin-top: 30px">
      Shoot me a mail
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
  margin: 15% auto;
  line-height: 1.8;
}
</style>
