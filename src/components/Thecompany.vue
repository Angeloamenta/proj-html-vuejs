<template>
  <main>
      <!-- sezione the company -->
      <section class="the-company">
      <div class="the-company-top">
          <div class="container">
          <div class="cards" :class="(card.hover) ? 'select' : ''" @mouseover="card.hover =true" @mouseleave="card.hover =false" v-for="(card, index) in sezUno" :key="index">
              <div class="icon circle"><font-awesome-icon :icon="card.icon"/></div>
              <div class="card-title"><h2 class="font-bolder font-mon">{{card.title}}</h2></div>
              <div class="card-text">{{card.text}}</div> 
          </div>
          </div>
      </div>
      <div class="the-company-bottom">
              <div class="company-bottom-sx">
                  <div class="the-company-intro">
                  <p class="network">ABOUT THE NETWORK</p>
                  <h1 class="font-mon font-bold"> <span class="back-green">The</span>Company</h1>
                  <p class="sub-title">For 12 years we have been providing audit and waranty, financial advice, rick advice, taxes services to select clients.</p>
                  </div>
                  <div class="the-company-card">
                      <div class="card-company" v-for="(companyCard, index) in company" :key="index" >
                          <div class="card-company-title">
                              <span><font-awesome-icon :icon="companyCard.icon"/></span><h3>{{companyCard.title}}</h3>
                          </div>
                          <div class="card-company-des">
                              {{companyCard.desc}}
                          </div>
                      </div>
                  </div>
              </div>
              <div class="company-bottom-dx"><img src="../assets/images/about-3.jpg" alt=""></div>
              <!-- <div class="ellipsis">
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
                  <font-awesome-icon class="point" icon="ellipsis-h"/>
              </div> -->
          </div>
      </section>
  </main>
</template>

<script>
export default {
name: 'Thecompany',
data() {
    return {
        sezUno: [
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
        company: [
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
        ]
    }
}
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/_variables.scss";
main {
//  the company
    .the-company {
        width: 100%;
        height: fit-content;
        .the-company-top {
            background-color: $Graynurse;
            display: flex;
            flex-direction: column;
            padding: 160px 0;
            .container {
                display: flex;
                justify-content: space-between;
                position: relative;
                .cards {
                    width:calc(90% / 3) ;
                    border-radius: 10px;
                    padding: 40px;
                    background-color: $White;
                }

                .select {
                    position: relative;
                    bottom: 10px;
                }
                .icon {
                    font-size: 2em;
                    padding: 30px;
                    color: $Bluelagoon;
                }
                .card-title {
                    margin: 20px 0;
                    color: $Ebonyclay;
                }
                .card-text {
                    font-weight: 300;
                    color: $Scarpaflow;
                }
            }
                  
        }
            .the-company-bottom {
                display: flex;
                width: 100%;
                height: fit-content;
                    .company-bottom-sx {
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        padding-top: 100px;
                          justify-content: center;
                            padding-left: 350px;
                            padding-right: 40px;
                        .the-company-intro {
                            .network {
                                color:$Bluelagoon;
                                font-size: 0.9em;
                            }

                            h1 {
                                font-size: 3em;
                                margin: 20px 0;
                                color: $Ebonyclay;
                            }
                            .sub-title {
                                color: $Scarpaflow;
                                margin: 25px 0;
                            }
                        }
                        .the-company-card{
                            display: flex;
                            flex-wrap: wrap;
                            .card-company{
                                width: calc(100% / 2);
                                padding: 5px;
                                .card-company-title {
                                    display: flex;
                                    margin-bottom: 20px;
                                    h3 {
                                        font-size: 1.2em;
                                        margin-left: 8px;
                                        color: $Ebonyclay;
                                    }
                                    span {
                                        font-size: 1.2em;
                                        color: $Bluelagoon;
                                    }
                                }
                                .card-company-des {
                                    color: $Edward;
                                    font-size: .9em;
                                }
                            }

                        }
                        
    
                    }
                    .company-bottom-dx {
                        width: 50%;
                        img {
                            display: block;
                            width: 100%;
                            
                        }
                    }
            }
    }
}
</style>>

