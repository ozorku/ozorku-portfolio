<template>
  <div>
    <Loader v-if="!loaded" />
    <div v-else>
      <Hero />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Loader from "~/components/Loader";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import Articles from "~/components/Articles";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

export default {
  head: {
    titleTemplate: "%s - Frontend Engineer"
  },

  metaInfo: {
    title: "Adavize Ozorku"
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 3000);
  },

  components: {
    Loader,
    Hero,
    Projects,
    Articles,
    Contact,
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
