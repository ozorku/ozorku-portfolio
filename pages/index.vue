<template>
  <div>
    <Intro />
    <Projects />
    <Articles />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Intro from "~/components/Intro";
import Projects from "~/components/Projects";
import Articles from "~/components/Articles";
import Contact from "~/components/Contact";
import Preloader from "~/components/Preloader";
import Footer from "~/components/Footer";

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
    Projects,
    Articles,
    Contact,
    Preloader,
    Footer
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
