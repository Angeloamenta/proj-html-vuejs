<template>
  <section id="pricing" class="pricing">  
     <div class="container">
         <div class="pricing-top text-center">
             <div class="green-text">MONTHLY PLANS</div>
            <div class="title"><h1><span class="back-green">Pricing</span> Table</h1></div>
            <div class="subtitle">
            <div class="sub">We can help you deliver and execute your future, wherever you compete, using the latest <br> technologies, from strategy development to implementation.</div>
         </div>
         </div>
         <div class="pricing-bottom">
             <div class="pricing-card" :class="(card.active) ? 'selected' : ''" @mouseover="card.hover =true" @mouseleave="card.hover =false" v-for="(card, index) in cardPricing" :key="index" >
                 <font-awesome-icon class="arrow" :class="(card.hover) ? 'visible' : ''" icon="arrow-right"/>
                 <div v-show="card.active" class="popular back-green-twhite">Most Popular</div>
                 <div class="card-icon text-center"><font-awesome-icon :icon="card.icon"/></div>
                 <div class="card-title text-center"><h2>{{card.title}}</h2></div>
                 <div class="card-price text-center"><h3>{{card.price}}</h3><span class="green-text">/mo</span> </div>
                 <div class="check standard quick-flex">
                     <div>Standard Accounting</div>
                     <div class="checked" v-if="card.standard"><i class="fas fa-solid fa-check"></i></div>
                     <div class="checked" v-else><font-awesome-icon icon="times"/></div>
                 </div>
                 <div class="check acces quick-flex">
                     <div>Platform Access</div>
                     <div class="checked" v-if="card.access"><i class="fas fa-solid fa-check"></i></div>
                     <div class="checked" v-else><font-awesome-icon icon="times"/></div>
                 </div>
                  <div class="check orientation quick-flex">
                     <div>Business Orientation</div>
                     <div class="checked" v-if="card.orientation"><i class="fas fa-solid fa-check"></i></div>
                     <div class="checked" v-else><font-awesome-icon icon="times"/></div>
                 </div>
                  <div class="check consulant quick-flex">
                     <div>Dedicated Consulant</div>
                     <div class="checked" v-if="card.consulant"><i class="fas fa-solid fa-check"></i></div>
                     <div class="checked" v-else><font-awesome-icon icon="times"/></div>
                 </div>
                 <div class="check assistance quick-flex">
                     <div>Personal Assistance</div>
                     <div class="checked" v-if="card.assistance"><i class="fas fa-solid fa-check"></i></div>
                     <div class="checked" v-else><font-awesome-icon icon="times"/></div>
                 </div>
             </div>
         </div>
     </div>
  </section>
</template>

<script>


export default {
name:'PricingTable',
components: {
    
  },
data() {
    return {
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
                    color: $Ebonyclay;
                }
            }
            .subtitle {
                .sub {
                    color: $Edward;
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

                .arrow {
                    color: $Bluelagoon;
                    position: absolute;
                    right: 5px;
                    top: 15px;
                    font-size: 1.6em;
                    display: none;
                }

                .visible {
                    display: block;
                }

                &.selected {
                    scale: 1.07;
                }
                .popular {
                    position: absolute;
                    left: 0;
                    top: 15px;
                    width: 70px;
                    height: 40px;
                    padding: 10px;
                    border-radius: 0px 75px 75px 5px / 0px 75px 75px 0px;
                    background-color: $Bluelagoon;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: .7em;
                }

                .card-icon {
                        font-size: 2em;
                        color: $Bluelagoon;
                        margin-bottom: 10px;
                    }

                .card-price {
                    margin-top: 10px;

                    h3 {
                        color: $Bluelagoon;
                        font-size: 2.5em;
                        
                        display: inline-block;
                        

                    }

        
                }

                .card-title {
                    color: $Ebonyclay;;
                }
                .check {
                    margin-top: 20px;
                    color: $Edward;
                    font-size: .9em;

                    .checked {
                        color: $Bluelagoon;
                    }
                }
            }

            
        }
    }
}
</style>>

