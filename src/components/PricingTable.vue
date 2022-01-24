<template>
  <section class="pricing">  
     <div class="container">
         <div class="pricing-top text-center">
             <div class="green-text">MONTHLY PLANS</div>
            <div class="title"><h1><span class="back-green">Pricing</span> Table</h1></div>
            <div class="subtitle">
            <div class="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio et qui consequatur culpa. Aliquam magnam atque natus corporis, eos minima voluptas, tempore architecto deleniti animi fuga. Facere ex laudantium cupiditate.</div>
         </div>
         </div>
         <div class="pricing-bottom">
             <div class="pricing-card">

             </div>
         </div>
     </div>
  </section>
</template>

<script>
export default {
name:'PricingTable',
}
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
.pricing {
    width: 100%;
    height: 100vh;
    background-color: $Graynurse;
    padding: 70px;
    .container {

        .pricing-top {

            .title {
                margin: 20px 0;
                h1 {
                    font-size: 2.9em;
                    font-weight: 900;
                }
            }
            .subtitle {
                .sub {
                    color: $Scarpaflow;
                }
            }
        }

        .pricing-bottom {
            
        }
    }
}
</style>>

