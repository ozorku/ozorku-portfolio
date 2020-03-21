<template>
  <div class="recentworks">
    <h2>Recent Works</h2>

    <div class="recentworks-list">
      <a
        class="recentworks-list__child"
        target="_blank"
        v-for="work in works"
        :key="work.index"
        :href="work.url"
        :title="work.name + ' | ' + work.summary"
      >
        <div>
          <b>{{ work.name }}</b>
          <p class="summary">
            {{ work.summary }}
          </p>
          <div class="more">
            <div class="tools">
              <span class="tool" v-for="tool in work.tools" :key="tool.index">
                {{ tool }}
              </span>
            </div>
            <div class="arrow">
              <img
                v-if="work.urlType === 'post'"
                src="~/assets/images/arrow-top-right.svg"
              />
              <img v-else src="~/assets/images/link.svg" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import works from "~/static/data/recentWorks";

export default {
  data() {
    return {
      works
    };
  }
};
</script>

<style lang="scss" scoped>
.recentworks {
  margin-top: 15%;

  h2 {
    font-size: 2rem;
  }

  &-list {
    display: flex;
    flex-direction: column;

    &:hover > * {
      opacity: 0.2;
    }

    & > *:hover {
      opacity: 1;
      box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);
      border: 1px solid rgb(240, 240, 240);

      div:nth-child(1) {
        width: 100%;
      }

      div:nth-child(2) {
        display: inline-block;
        width: 10%;
        text-align: right;
      }
    }

    @media screen and (min-width: 50rem) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }

    &__child {
      background: #f2f2f2;
      width: 90%;
      margin-bottom: 1rem;
      padding: 7% 5%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      color: #444444;
      cursor: pointer;
      text-decoration: none;

      .summary {
        line-height: 150%;
      }

      .more {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
      }

      .tools {
        display: flex;

        .tool {
          font-size: 12px;
          color: #aaa;
          margin-right: 20px;
        }
      }

      div:nth-child(1) {
        width: 100%;
      }

      div:nth-child(2) {
        display: none;
      }

      @media screen and (min-width: 50rem) {
        width: 38%;
        margin-bottom: 3rem;
        padding: 40px 5%;
      }
    }
  }
}
</style>
