<template>
  <main>
      <Thecompany/>
      <Excellence/>
      <PricingTable/>
      <LatestNews/>
  </main>
</template>

<script>
import Excellence from './Excellence.vue';
import Thecompany from "./Thecompany.vue";
import PricingTable from "./PricingTable.vue";
import LatestNews from "./LatestNews.vue";

export default {
name:'Main',
components: {
    Thecompany,
    Excellence,
    PricingTable,
    LatestNews,
  },
}
</script>

<style lang="scss">

</style>>

