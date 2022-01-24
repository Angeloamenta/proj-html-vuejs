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
             <div class="pricing-card" :class="(card.active) ? 'selected' : ''" v-for="(card, index) in cardPricing" :key="index" >
                 <div v-show="card.active" class="popular back-green-twhite">Most Popular</div>
                 <div class="card-icon text-center">{{card.icon}}</div>
                 <div class="card-title text-center"><h2>{{card.title}}</h2></div>
                 <div class="card-price text-center"><h3>{{card.price}}</h3><span class="green-text">/mo</span> </div>
                 <div class="check standard quick-flex">
                     <div>Standard Accounting</div>
                     <div v-if="card.standard">S</div>
                     <div v-else>N</div>
                 </div>
                 <div class="check acces quick-flex">
                     <div>Platform Access</div>
                     <div v-if="card.access">S</div>
                     <div v-else>N</div>
                 </div>
                  <div class="check orientation quick-flex">
                     <div>Business Orientation</div>
                     <div v-if="card.orientation">S</div>
                     <div v-else>N</div>
                 </div>
                  <div class="check consulant quick-flex">
                     <div>Dedicated Consulant</div>
                     <div v-if="card.consulant">S</div>
                     <div v-else>N</div>
                 </div>
                 <div class="check assistance quick-flex">
                     <div>Personal Assistance</div>
                     <div v-if="card.assistance">S</div>
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
                assistance: false,
                
            },
             {
                icon: "[]",
                title: "Professional",
                price:"$890",
                standard: true,
                access: true,
                orientation: true,
                consulant: false,
                assistance: false,
                active:true

                
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
            margin-top: 80px;
            .pricing-card {
                width: calc(100% / 3);
                height: 500px;
                background-color: $White;
                margin-left: 40px;
                padding: 40px 20px;
                border-radius: 15px;
                position: relative;

                &.selected {
                    scale: 1.07;
                }
                .popular {
                    position: absolute;
                    left: 0;
                    top: 15px;
                    width: 80px;
                    height: 40px;
                    padding: 0;
                    border-radius: 0px 118px 113px 0px / 66px 77px 82px 55px;
                }
                .card-price {
                    margin-top: 10px;

                    h3 {
                        color: $Bluelagoon;
                        font-size: 2.5em;
                        font-weight: 900;
                        display: inline-block;

                    }
                }

                .card-title {
                    color: $Shark;
                }
                .check {
                    margin-top: 20px;
                    color: $Scarpaflow;
                }
            }
        }
    }
}
</style>>

