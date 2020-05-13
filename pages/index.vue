<template>
  <div class="snap">
    <li class="container">
      <Intro />
    </li>
    <!-- <li>
      <div class="container">
        <MostRecentWork />
      </div>
    </li> -->
    <li style="background: #111">
      <div class="container">
        <Tools />
      </div>
    </li>
    <!-- <li class="container">
      <Articles />
    </li> -->
  </div>
</template>

<script>
import Intro from "~/components/Intro";
import Tools from "~/components/Tools";
import MostRecentWork from "~/components/MostRecentWork";
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
    MostRecentWork,
    Articles,
    Contact,
    Preloader
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}

li {
  list-style: none;
}

@media screen and (min-width: 50rem) {
  .snap {
    max-height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    &.proximity {
      scroll-snap-type: y proximity;
    }
  }

  li {
    // height: 100vh;
    scroll-snap-align: start;
  }
}

.vertical-line {
  border-right: 1px solid #ddd;
  margin: 0 20px;
  height: 20px;
}
</style>
