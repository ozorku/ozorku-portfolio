<template>
  <div class="what-i-do">
    <div class="container">
      <h2 class="section-heading">
        Some things I've built
      </h2>
      <div class="projects">
        <div v-for="work in works" :key="work.index" class="project">
          <header>
            <div class="project-header">
              <img src="~/assets/images/folder.svg" width="40px" />

              <div>
                <a :href="work.github" v-show="work.github">
                  <img src="~/assets/images/github.svg" width="20px"
                /></a>

                <a :href="work.url" v-show="work.url"
                  ><img
                    src="~/assets/images/link.svg"
                    style="margin-left: 25px"
                    width="20px"
                /></a>
              </div>
            </div>
            <div class="project-name">{{ work.name }}</div>
            <div class="project-description">{{ work.summary }}</div>
          </header>
          <footer>
            <ul>
              <li
                class="project-tools"
                v-for="item in work.tools"
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
.what-i-do {
  margin-bottom: 100px;
}
h2 {
  text-align: center;
  margin-bottom: 50px;
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
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  background-color: #222;
  box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);

  &:hover {
    // transform: translateY(-5px);
    cursor: default;
    transform: scale(1);
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
  }

  &-name {
    font-size: 22px;
    color: rgb(204, 214, 246);
    font-weight: 600;
    margin-bottom: 15px;
  }

  &-description {
    font-size: 14px;
    color: rgb(168, 178, 209);
    line-height: 1.8;
  }
}
</style>
