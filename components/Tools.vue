<template>
  <div class="tools">
    <h2>Languages & Tools</h2>
    <div class="list">
      <div>
        <img
          src="~/assets/images/tools/js.svg"
          alt="Javscript"
          title="Javascript"
        />
      </div>
      <div>
        <img
          src="~/assets/images/tools/jquery.svg"
          alt="jQuery"
          title="jQuery"
        />
      </div>
      <div>
        <img src="~/assets/images/tools/vue.svg" alt="VueJS" title="Vuejs" />
      </div>
      <div>
        <img src="~/assets/images/tools/nuxt.svg" alt="Nuxt" title="Nuxt" />
      </div>
      <div>
        <img
          src="~/assets/images/tools/firebase.svg"
          alt="Firebase"
          title="Firebase"
        />
      </div>
      <div>
        <img src="~/assets/images/tools/git.svg" alt="Git" title="Git" />
      </div>
      <div>
        <img
          src="~/assets/images/tools/linode.svg"
          alt="Linode"
          title="Linode"
        />
      </div>
      <div>
        <img
          src="~/assets/images/tools/nodejs.svg"
          alt="NodeJS"
          title="NodeJS"
        />
      </div>
      <div>
        <img
          src="~/assets/images/tools/express.svg"
          alt="Express"
          title="Express"
        />
      </div>
      <div>
        <img src="~/assets/images/tools/mysql.svg" alt="MYSQL" title="MYSQL" />
      </div>
      <div>
        <img src="~/assets/images/tools/nginx.svg" alt="NGINX" title="NGINX" />
      </div>
      <div>
        <img
          src="~/assets/images/tools/webpack.svg"
          alt="Webpack"
          title="Webpack"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tools {
  margin-top: 15%;
  text-align: center;

  h2 {
    font-size: 2rem;
  }

  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    div {
      width: 25%;
      text-align: center;
      margin-top: 5%;

      img {
        filter: grayscale(1);
        &:hover {
          filter: grayscale(0);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
