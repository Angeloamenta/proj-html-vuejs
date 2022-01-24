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
             <div class="pricing-card" v-for="(card, index) in cardPricing" :key="index">
                 <div class="card-icon">{{card.icon}}</div>
                 <div class="card-title">{{card.title}}</div>
                 <div class="card-price">{{card.price}}<span class="green-text">/mo</span> </div>
                 <div class="standard">
                     <div>standard</div>
                     <div v-if="card.standard">S</div>
                     <div v-else>N</div>
                 </div>
                 <div class="acces">
                     <div>Platform Access</div>
                     <div v-if="card.access">S</div>
                     <div v-else>N</div>
                 </div>
                  <div class="orientation">
                     <div>Business Orientation</div>
                     <div v-if="card.orientation">S</div>
                     <div v-else>N</div>
                 </div>
                  <div class="orientation">
                     <div>Business Orientation</div>
                     <div v-if="card.orientation">S</div>
                     <div v-else>N</div>
                 </div>
             </div>
         </div>
     </div>
  </section>
</template>

<script>
export default {
name:'PricingTable',
data() {
    return {
        cardPricing: [
            {
                icon: "[]",
                title: "Standard",
                price:"$490",
                standard: true,
                access: true,
                orientation: false,
                consulant: false,
                assistance: false
            },
             {
                icon: "[]",
                title: "Professional",
                price:"$890",
                standard: true,
                access: true,
                orientation: true,
                consulant: false,
                assistance: false
                
            },
             {
                icon: "[]",
                title: "Ultimate",
                price:"$1.390",
                standard: true,
                access: true,
                orientation: true,
                consulant: true,
                assistance: true
            }
        ]
    }
}
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
            display: flex;
            justify-content: center;
            .pricing-card {
                width: calc(100% / 3);
                height: 500px;
                background-color: $White;
                margin-left: 20px;
            }
        }
    }
}
</style>>

