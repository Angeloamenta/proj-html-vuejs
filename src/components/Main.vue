<template>
  <main>
      <Thecompany/>
      <Excellence/>
      <PricingTable/>
  </main>
</template>

<script>
import Excellence from './Excellence.vue';
import Thecompany from "./Thecompany.vue";
import PricingTable from "./PricingTable.vue";

export default {
name:'Main',
components: {
    Thecompany,
    Excellence,
    PricingTable,
  },
}
</script>

<style>

</style>