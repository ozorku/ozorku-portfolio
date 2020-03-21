<template>
  <div class="project">
    <div class="project__heading">
      <a href="/" class="back-link"
        ><img src="~/assets/images/arrow-left.svg" alt="" /><span>Back</span>
      </a>
      <div>{{ viewing[0]["name"] }}</div>
      <div></div>
    </div>
  </div>
</template>

<script>
import works from "~/static/data/recentWorks";

export default {
  data() {
    return {
      works,
      viewing: undefined
    };
  },

  mounted() {
    let projectName = this.$route.params.project;

    this.viewing = this.works.filter(work => {
      return work.url === projectName;
    });

    console.log(this.viewing);

    console.log(projectName);
  }
};
</script>

<style lang="scss">
.project {
  margin: 5% 0;

  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .back-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: inherit;
      text-decoration: none;

      span {
        margin-left: 10px;
      }
    }
  }
}
</style>
