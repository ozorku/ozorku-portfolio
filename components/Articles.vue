<template>
  <div class="container articles">
    <h2>Articles</h2>
    <div class="articles-list">
      <a
        :href="article.url"
        target="_blank"
        class="article"
        v-for="article in articles"
        :key="article.index"
      >
        <h3>{{ article.name }}</h3>

        <div>
          <span>{{ article.linkName }} </span>
          <img src="~/assets/images/link.svg" width="24px" />
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
  margin: 10% auto;

  h2 {
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 33px;
    position: relative;

    h3 {
      line-height: 150%;
    }
  }

  .article {
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 2rem 1.75rem;
    min-height: 200px;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    background-color: #222;
    box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);

    div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      text-align: right;
    }
  }
}
</style>
