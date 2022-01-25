<template>
  <main>
      <Thecompany/>
      <Excellence/>
      <PricingTable/>
      <LatestNews/>
      <KnowFirst/>
  </main>
</template>

<script>
import Excellence from './Excellence.vue';
import Thecompany from "./Thecompany.vue";
import PricingTable from "./PricingTable.vue";
import LatestNews from "./LatestNews.vue";
import KnowFirst from "./KnowFirst.vue";
export default {
name:'Main',
components: {
    Thecompany,
    Excellence,
    PricingTable,
    LatestNews,
    KnowFirst,
  },
}
</script>

<style lang="scss">

</style>>

