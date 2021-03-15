<template>
  <div class="projects-section">
    <div class="container">
      <h2 class="section-heading">
        Some things I've built
      </h2>
      <div v-for="work in works" :key="work.index">
        <h3>{{ work.title }}</h3>
        <div class="projects">
          <div v-for="item in work.items" :key="item.index" class="project">
            <header>
              <div class="project-header">
                <div class="folder"></div>
                <div>
                  <a
                    class="github-link"
                    target="_blank"
                    :href="item.github"
                    v-show="item.github"
                  >
                  </a>
                  <a
                    class="url-link"
                    target="_blank"
                    :href="item.url"
                    v-show="item.url"
                  ></a>
                </div>
              </div>
              <div class="project-name">{{ item.name }}</div>
              <div class="project-description">{{ item.summary }}</div>
            </header>
            <footer>
              <ul>
                <li
                  class="project-tools"
                  v-for="item in item.tools"
                  :key="item.index"
                >
                  {{ item }}
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import works from "~/static/data/works";

export default {
  data() {
    return {
      works
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}

h3 {
  font-size: 28px;
  margin-top: 100px;
  margin-bottom: 30px;
  color: #47c7fe;
  font-weight: bold;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 33px;
  position: relative;
}

.project {
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 20px;
  min-height: 300px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  background-color: #222;
  box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);

  &:hover {
    cursor: default;
    transform: scale(1.1);
    background: #333;
    z-index: 1;
  }

  &::before,
  &::after {
    box-sizing: content-box;
  }

  header {
    width: 100%;
  }

  footer {
    color: rgb(136, 146, 176);
    font-size: 12px;

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;
      flex-wrap: wrap;

      li {
        line-height: 1.5;
        margin: 0;
        padding: 0;
        margin-right: 15px;
        &:nth-last-child() {
          margin: 0;
        }
      }
    }
  }

  &-header {
    box-sizing: content-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .folder {
      &::after {
        content: url("../assets/images/folder.svg");
      }
    }

    .github-link {
      &::after {
        content: url("../assets/images/github.svg");
      }
    }

    .url-link {
      margin-left: 20px;
      &::after {
        content: url("../assets/images/link.svg");
      }
    }
  }

  &-name {
    font-size: 22px;
    color: rgb(204, 214, 246);
    font-weight: 600;
    margin-bottom: 5px;
  }

  &-description {
    font-size: 14px;
    color: rgb(168, 178, 209);
    line-height: 1.8;
  }
}
</style>
