<template>
  <main>
      <!-- sezione the company -->
      <section class="the-company">
      <div class="the-company-top">
          <div class="container">
          <div class="cards" :class="(card.hover) ? 'select' : ''" @mouseover="card.hover =true" @mouseleave="card.hover =false" v-for="(card, index) in sezUno" :key="index">
              <div class="icon circle"><font-awesome-icon :icon="card.icon"/></div>
              <div class="card-title"><h2>{{card.title}}</h2></div>
              <div class="card-text">{{card.text}}</div> 
          </div>
          </div>
      </div>
      <div class="the-company-bottom">
              <div class="company-bottom-sx">
                  <div class="the-company-intro">
                  <p class="network">ABOUT THE NETWORK</p>
                  <h1> <span class="back-green">The</span>Company</h1>
                  <p class="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo atque dolor natus dolorum commodi dignissimos pariatur tempora!</p>
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
                text:"Humanizing business:",
                hover: false
            },
             {
                icon: "chart-pie",
                title: "Core Business",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a laudantium ea, debitis possimus autem ex iure accusantium mollitia iste pariat",
                hover: false
            },
             {
                icon: "tachometer-alt",
                title: "Performance",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a laudantium ea, debitis possimus autem ex iure accusantium mollitia iste pariat",
                hover: false
            }
        ],
        company: [
            {
                icon: "medal",
                title: "Tradition",
                desc:"Humanizing business:",
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
                    padding: 20px;
                    background-color: $White;
                }

                .select {
                    position: relative;
                    bottom: 10px;
                }
                .icon {
                    font-size: 2em;
                    padding: 30px;
                }
                .card-title {
                    margin: 20px 0;
                    color: $Ebonyclay;
                }
                .card-text {
                    font-weight: lighter;
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
                                    }
                                    span {
                                        font-size: 1.2em;
                                        color: $Bluelagoon;
                                    }
                                }
                            }

                        }
                        
    
                    }
                    .company-bottom-dx {
                        width: 50%;
                        background-color: greenyellow;
                        img {
                            display: block;
                            width: 100%;
                            
                        }
                    }
            }
    }
}
</style>>

