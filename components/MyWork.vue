<template>
  <div class="container mywork">
    <div class="mywork__heading">
      <h2 style="color: #0A1D2B;">My Work</h2>

      <a-dropdown style="color: #707070;" v-model="dropdownVisible">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          {{ selectedProjectType }} <a-icon type="down" />
        </a>
        <a-menu slot="overlay" @click="handleMenuClick">
          <a-menu-item key="Personal Projects">
            Personal Projects
          </a-menu-item>
          <a-menu-item key="Work Projects">
            Work Projects
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <div class="mywork__grid">
      <!-- work -->
      <div
        v-for="(work, index) in works"
        :key="index"
        class="mywork__grid-item"
      >
        <img class="mywork__grid-item-photo" :src="work.image" alt="" />
        <div class="mywork__grid-item-content">
          <div>
            <h3 style="font-weight: bold; color: '#0D2434">
              {{ work.name }}
            </h3>
            <p style="color: #444444; margin-top: 20px">
              {{ work.summary }}
            </p>
          </div>
          <div class="footer">
            <a href="">Click Here</a>
            <div class="tools">
              <div class="tool"></div>
              <div class="tool"></div>
              <div class="tool"></div>
            </div>
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
      works,
      dropdownVisible: false,
      selectedProjectType: "Personal Projects"
    };
  },

  methods: {
    handleMenuClick(e) {
      this.selectedProjectType = e.key;
      this.dropdownVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.mywork {
  margin: 5rem auto;
  @media screen and (min-width: 50rem) {
    margin: 10rem auto;
  }
  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
    position: relative;
    &-item {
      display: flex;
      -moz-box-align: center;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      padding: 20px;
      min-height: 475px;
      background-color: #fff;
      box-shadow: 0px 4px 35px rgba(196, 196, 196, 0.25);
      border-radius: 5px;
      &-photo {
        object-fit: cover;
        object-position: 100% 0;
        width: 300px;
        height: 337px;

        background: #e5e5e5;
        height: 250px;
        width: 100%;
      }
      &-content {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        // background: blue;
        .footer {
          margin-top: 5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          a {
            color: #c99968;
            text-decoration: none;
            display: flex;
            align-items: center;
            display: inline;
            &::after {
              content: url("../assets/images/arror-right.svg");
              margin-left: 10px;
            }
          }

          .tools {
            display: flex;
            align-items: center;
            .tool {
              background: #ddd;
              padding: 2px;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
