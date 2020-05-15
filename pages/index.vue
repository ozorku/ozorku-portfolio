<template>
  <div>
    <Intro />
    <Tools />
    <!-- <Articles /> -->
  </div>
</template>

<script>
import Intro from "~/components/Intro";
import Tools from "~/components/Tools";
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

  components: {
    Intro,
    Tools,
    Articles,
    Contact,
    Preloader
  }
};
</script>

<style lang="scss">
.container {
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
}
</style>
