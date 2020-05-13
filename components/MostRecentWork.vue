<template>
  <div class="latest-work">
    <img
      style="object-fit: cover; vertical-align: bottom;
    margin-bottom: 50px"
      aria-hidden="true"
      alt="Sample image for undefined"
      width="100%"
      decoding="async"
      src="https://a0.muscache.com/pictures/0db2bf2e-2135-4363-b01d-e8baa34b5c04.jpg"
      data-original-uri="https://a0.muscache.com/pictures/0db2bf2e-2135-4363-b01d-e8baa34b5c04.jpg"
    />
    <div style="text-align: center">
      <div style="margin-bottom: 20px">
        <h2>Most recent work</h2>
        <p style="margin-top: 30px">
          <b>Globus Corporate</b>, A powerful Internet Banking platform for
          Corporate outfits
          <a href="https://enq.globusbank.com:8855" target="_blank">Visit</a>
        </p>
      </div>
      <div>
        <img src="~/assets/images/globus-corporate.png" width="100%" />
      </div>
    </div>
    <button @click="$router.push('work')" class="buttonStyle" href="">
      See more projects
    </button>
  </div>
</template>

<style lang="scss" scoped>
.latest-work {
  // margin: 5% 0 20% 0;
  background: red;

  a {
    color: #111;
  }

  h2 {
    font-size: 32px;
    line-height: 100%;
    margin: 0;
  }

  @media screen and (min-width: 50rem) {
    // margin: 10% 0 20% 0;
  }
}

.buttonStyle {
  background: transparent;
  border-radius: 5px;
  border: 2px solid #111;
  padding: 2px 10px;
  text-decoration: none;
  color: #111;
  margin: 0px auto 0 auto;
  max-width: 200px;
  padding: 10px 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
</style>
