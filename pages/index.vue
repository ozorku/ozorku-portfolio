<template>
  <div>
    <!-- <Preloader v-if="loading" /> -->
    <div>
      <div class="faded-top"></div>
      <div class="myResume" style="margin-top: 30px;">
        <a href="/resume.pdf">My Résumé</a>
      </div>
      <Intro />
      <Recentworks />
      <Tools />
      <Articles />
      <Contact />
      <div class="faded-bottom"></div>
    </div>
  </div>
</template>

<script>
import Intro from "~/components/Intro";
import Tools from "~/components/Tools";
import Recentworks from "~/components/Recentworks";
import Articles from "~/components/Articles";
import Contact from "~/components/Contact";
import Preloader from "~/components/Preloader";

export default {
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
    Recentworks,
    Articles,
    Contact,
    Preloader
  }
};
</script>

<style lang="scss">
.myResume {
  display: flex;
  justify-content: flex-end;
  a {
    color: inherit;
  }
}
</style>
