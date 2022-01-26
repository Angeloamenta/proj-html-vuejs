<template>
  <div id="app">
    <Header/>
    <Jumbotron
    :arrayNav="navbar"
    />
    <Main
    :arrayDati="dati"
    />
    <Footer
    :arrayDatif="dati"
    :arrayLinkFooter="footerLink"
    />
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
      // dati navbar
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
        ],

        // dati generici

         dati: [
            {
                info: "+1(305) 1234-5678",
                img:"phone",
            },
            {
                info: "helloexample.com",
                img: "envelope",
            },
            {
                info: "Main Avenue, 987",
                img: "map-marked-alt",
            }
        ],

        // footer link

        footerLink: [
             {
                  title: "About",
                  info1: "The Company",
                  info2: "Institutional",
                  info3: "Social & Events",
                  info4: "Innovation",
                  info5: "Environment",
                  info6: "Technology",
            },
            {
                  title: "Services",
                  info1: "Audit & Assurance",
                  info2: "Financial Advisory",
                  info3: "Analytics M&A",
                  info4: "Middle Marketing",
                  info5: "Legal Consulting",
                  info6: "Regulatory Risk",
            },
              {
                  title: "Support",
                  info1: "Responsibility",
                  info2: "Terms of Use",
                  info3: "About Cookies",
                  info4: "Privacy Policy",
                  info5: "Accessibility",
                  info6: "Information",
            }
        ] 
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss"
</style>
