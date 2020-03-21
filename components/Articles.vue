<template>
  <div class="articles">
    <h2>Articles</h2>

    <div class="articles-list">
      <a
        :href="article.url"
        target="_blank"
        class="articles-list__child"
        v-for="article in articles"
        :key="article.index"
      >
        <h3>{{ article.name }}</h3>

        <div>
          <span>{{ article.linkName }} </span>
          <img src="~/assets/images/link.svg" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import articles from "~/static/data/articles";

export default {
  data() {
    return {
      articles
    };
  }
};
</script>

<style lang="scss" scoped>
.articles {
  margin-top: 15%;

  h2 {
    font-size: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;

    h3 {
      line-height: 150%;
    }

    &:hover > * {
      opacity: 0.2;
    }

    & > *:hover {
      opacity: 1;
      box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);
      border: 1px solid rgb(240, 240, 240);

      div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        text-align: right;
      }
    }

    @media screen and (min-width: 50rem) {
      flex-direction: row;
    }

    &__child {
      width: 100%;
      background: #f2f2f2;
      height: 290px;
      margin-bottom: 5%;
      padding: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      color: #444;

      div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        text-align: right;
      }

      @media screen and (min-width: 50rem) {
        width: 38%;
        margin-bottom: 0%;
      }

      @media screen and (min-width: 80rem) {
        width: 25%;
        padding: 3%;

        // div:nth-child(2) {
        //   display: none;
        // }
      }
    }
  }
}
</style>
