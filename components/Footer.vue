<template>
  <footer class="container">
    <div>© Adavize Ozorku 2020</div>
    <div>
      <div class="links">
        <a href="https://github.com/ozorku" target="_blank" class="link"
          ><span>GITHUB</span></a
        >
        <a
          href="https://www.linkedin.com/in/ozorku/"
          target="_blank"
          class="link"
          ><span>LINKEDIN</span></a
        >
        <a href="https://twitter.com/ozorku" target="_blank" class="link"
          ><span>TWITTER</span></a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: rgb(168, 178, 209);
  padding: 10px 0px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 50rem) {
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    margin-bottom: 20px;

    .link {
      text-decoration: none;
      padding: 0px 20px;
      cursor: pointer;
      color: inherit;

      &:hover {
        color: #48c8ff;
      }
    }
  }
}
</style>
