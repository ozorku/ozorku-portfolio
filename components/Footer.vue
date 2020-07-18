<template>
  <footer>
    <div class="container">
      <img src="~/assets/images/logo.svg" alt="logo" height="56px" />
      <ul class="social">
        <li>
          <a href="">
            <img src="~/assets/images/github-gray.svg" height="32px" alt="logo"
          /></a>
        </li>
        <li>
          <a href="">
            <img
              src="~/assets/images/linkedin-gray.svg"
              height="32px"
              alt="logo"
          /></a>
        </li>
        <li>
          <a href="">
            <img src="~/assets/images/email-gray.svg" height="32px" alt="logo"
          /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #f9f9f9;
  padding: 100px 0;
  text-align: center;

  ul {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 0 20px;
    }
  }
}
</style>
