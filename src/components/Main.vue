<template>
  <main>
      <Thecompany
      :arrayCompanyTop="companyTop"
      :arrayCompanyBottom="companyBottom"
      />
      <Excellence
      :arrayExcellence="cardExcellence"
      />
      <PricingTable
      :arrayPricing="cardPricing"
      />
      <LatestNews
      :arrayNews="cardNews"
      />
      <KnowFirst/>
      <GetTouch
      :arrayDati="arrayprova"
      />
  </main>
</template>

<script>
import Excellence from './Excellence.vue';
import Thecompany from "./Thecompany.vue";
import PricingTable from "./PricingTable.vue";
import LatestNews from "./LatestNews.vue";
import KnowFirst from "./KnowFirst.vue";
import GetTouch from "./GetTouch.vue";

export default {
name:'Main',
components: {
    Thecompany,
    Excellence,
    PricingTable,
    LatestNews,
    KnowFirst,
    GetTouch,
  },
  props: {
    arrayDati: Array,
  },
  data() {
    return {
      // elementi sezione the company
      companyTop: [
            {
                icon: "user-friends",
                title: "Human Capital",
                text:"Humanizing business: Harness the power of technology to improve the way people work.",
                hover: false
            },
             {
                icon: "chart-pie",
                title: "Core Business",
                text:"It takes innovative approaches to transform, modernize and run existing platform",
                hover: false
            },
             {
                icon: "tachometer-alt",
                title: "Performance",
                text:"Achieving maximum impact and value from investments in finance and supply chain.",
                hover: false
            }
        ],
        companyBottom: [
            {
                icon: "medal",
                title: "Tradition",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
             {
                icon: "lock",
                title: "Security",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            },
             {
                icon: "edit",
                title: "Certificate",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            },
            {
                icon: "graduation-cap",
                title: "Expertise",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            }
        ],
        // dati excellence in services
        cardExcellence: [
            {
                icon: "project-diagram",
                title: "Audit & Assurance",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
             {
                icon: "briefcase",
                title: "Financial Advisory",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
             {
                icon: "chart-bar",
                title: "Analytics and M&A",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
            {
                icon: "plane",
                title: "Middle Marketing",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
            {
                icon: "globe",
                title: "Legal Consulting",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
            {
                icon: "inbox",
                title: "Regulary Risk",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            }
        ],

        // elementi pricing table

         cardPricing: [
            {
                icon: "rocket",
                title: "Standard",
                price:"$490",
                standard: true,
                access: true,
                orientation: false,
                consulant: false,
                assistance: false,
                hover: false
                
            },
             {
                icon: "briefcase",
                title: "Professional",
                price:"$890",
                standard: true,
                access: true,
                orientation: true,
                consulant: false,
                assistance: false,
                active:true,
                hover: false

                
            },
             {
                icon: "gem",
                title: "Ultimate",
                price:"$1.390",
                standard: true,
                access: true,
                orientation: true,
                consulant: true,
                assistance: true,
                hover: false
            }
        ],

        // elementi News
        cardNews: [
            {
                user: "Andrea Miller",
                time: "2 Days Ago",
                desc:"lorem ipsum bla bla bla bla ",
                text: "Increasing creativity is possible for everyone",
                img: require("../assets/images/news-1.jpg"),
            },
             {
                 user: "Andrea Miller",
                time: "2 Days Ago",
                desc:"lorem ipsum bla bla bla bla ",
                text: "Because market research is part of the busines plan",
                img: require("../assets/images/news-2.jpg"),

                
            },
             {
                user: "Andrea Miller",
                time: "2 Days Ago",
                desc:"lorem ipsum bla bla bla bla ",
                text: "Working from home is now a trend",
                img: require("../assets/images/news-3.jpg"),
            }
        ],
        arrayprova: this.arrayDati,
    }
  },
 
}
</script>

<style lang="scss">

</style>>

