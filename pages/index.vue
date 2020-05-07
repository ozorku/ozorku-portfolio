<template>
  <div>
    <!-- <Preloader v-if="loading" /> -->
    <div>
      <!-- <div class="faded-top"></div>  -->
      <div class="heading" style="margin-top: 20px;">
        <a href="/" target="_blank">Github</a>
        <div class="vertical-line"></div>
        <a href="/resume.pdf" target="_blank">My Résumé</a>
      </div>
      <Intro />
      <Works />
      <!-- <Tools /> -->
      <!-- <Articles /> -->
      <!-- <Contact /> -->
      <div class="faded-bottom"></div>
    </div>
  </div>
</template>

<script>
import Intro from "~/components/Intro";
import Tools from "~/components/Tools";
import Works from "~/components/Works";
import Articles from "~/components/Articles";
import Contact from "~/components/Contact";
import Preloader from "~/components/Preloader";

export default {
  head: {
    titleTemplate: "%s - Frontend Developer"
  },

  metaInfo: {
    title: "Adavize Ozorku"
  },

  data() {
    return {
      loading: true
    };
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },

  components: {
    Intro,
    Tools,
    Works,
    Articles,
    Contact,
    Preloader
  }
};
</script>

<style lang="scss">
.heading {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    color: inherit;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  .resume-link {
    margin-left: 20px;
  }
}

.vertical-line {
  border-right: 1px solid #ddd;
  margin: 0 20px;
  height: 20px;
}
</style>
