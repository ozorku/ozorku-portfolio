<template>
  <div>
    <Hero />
    <MyWork />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import Hero from "~/components/Hero";
import MyWork from "~/components/MyWork";
import Footer from "~/components/Footer";
import ContactMe from "~/components/ContactMe";

export default {
  head: {
    titleTemplate: "%s - Software Developer"
  },

  metaInfo: {
    title: "Adavize Ozorku"
  },

  components: {
    Hero,
    MyWork,
    Footer,
    ContactMe
  }
};
</script>
