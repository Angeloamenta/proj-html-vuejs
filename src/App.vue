<template>
  <div id="app">
    <Header/>
    <Jumbotron
    :arrayNav="navbar"
    />
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Jumbotron from "./components/Jumbotron.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Jumbotron,
    Main,
    Footer,
  },
   data() {
    return {
     navbar: [
            {
                name: "HOME",
                id: "#home",
                activated: false
            },
            {
                name: "ABOUT",
                id: "#about",
                activated: false
            },
            {
                name: "SERVICES",
                id: "#services",
                activated: false
            },
            {
                name: "PRICING",
                id: "#pricing",
                activated: false
            },
            {
                name: "BLOG",
                id: "#news",
                activated: false
            },
            {
                name: "GET IN TOUCH",
                id: "#touch",
                activated: false
            }
        ]
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss"
</style>
