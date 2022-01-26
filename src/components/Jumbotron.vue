<template>
  <div id="home" class="jumbotron" >
      <div class="inner-container" @mouseleave="starNav()" @mouseover="stopNav()">
      <div class="container">
          <nav>
              <div class="nav-sx"><h2 class="logo-next"><span class="next">NEX</span>GEN</h2></div>
              <div class="nav-dx">
                  <ul class="list-none font-mon font-bolder">
                      <li :class="(nav.activated) ? 'active' : ''" @mouseover="nav.activated = true" @mouseleave="nav.activated =false" v-for="(nav, index) in arrayNav" :key="index">
                          <a :href="nav.id">{{nav.name}}</a>
                         </li>
                  </ul>
              </div>
          </nav>
          <div class="customer">
              <h1>Lead&#126; <span class="back-green-twhite">Customer</span></h1>
              <div class="text text-center">
              <p class="font-t">Successful strategies rewuire data analysis, creativity and customer focus, taking advantage of the lastest technologies to offer excelent services.</p>
              </div>
              <div class="buttons">
                  <button class="button-background btn-sx">GET IN TOUCH</button>
                  <button class="button-noborder btn-dx">READ MORE</button>
              </div>
          </div>
      </div>
      </div>
     <div class="menu-hide" v-show="show" @click="menuShow =!menuShow"><font-awesome-icon icon="bars"/></div>
      <div v-show="menuShow" class="nav2" @mouseleave="leaveNav()">
          <ul class="list-none font-mon font-bolder">
                      <li :class="(nav.activated) ? 'active' : ''" @mouseover="nav.activated = true" @mouseleave="nav.activated =false" v-for="(nav, index) in arrayNav" :key="index">
                          <a :href="nav.id">{{nav.name}}</a>
                        </li>
            </ul>
      </div>
  </div>
</template>

<script>
export default {
name: 'Jumbotron',
props: {
  arrayNav: Array, 
},
data() {
    return {
        show: false,
        menuShow:false,
    }
},
// inserito tramite app
methods: {
 starNav() {
     console.log("ciao");
     this.show= true
 },
stopNav() {
     console.log("ciao");
     this.show= false
 },

 leaveNav() {
     this.menuShow = false
 }

},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/_variables.scss";
.jumbotron {
    width: 100%;
    background-image: url("../assets/images/hero-image.png");
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    .inner-container {
        padding-top: 20px;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.7);
        position: relative;
        color: white;
        min-height: 90vh;
        .container {
            display: flex;
            flex-direction: column;
            height: 100%;
            nav {
                display: flex;
                align-items: center;
                height: 40px;
                .nav-sx {
                    width: 30%;
                }

               .nav-dx {
                   width: 70%;
                   height: 100%;
            
                   ul {
                       display: flex;
                       align-items: center;
                       justify-content: space-around;
                       height: 100%;
                     li {
                         display: flex;
                         align-items: center;
                         justify-content: center;               
                         height: 100%;
                        //  width: calc(90% / 6);
                        padding: 10px;
                         a {
                             color:white;
                             
                         }
                        
                     }
                   }
               }

            }
            .customer {
                align-self: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 150px 0;
                h1 {
                    font-size: 4.5em;
                    font-weight: 900;
                }
                .text {
                    margin: 45px 0;
                    padding: 0 250px;
                    width: 100%;
                    font-size: 1.2em;
                }
                .buttons {
                    display: flex;
                    justify-content: center;

                    button {
                        margin-left: 15px;
                        
                    }
                    .btn-sx {
                            &:hover {
                                background-color: rgba($color: $Bluelagoon, $alpha: 0.5);
                            }
                        }
                    .btn-dx {
                            &:hover {
                                background-color: $Bluelagoon;
                            }
                        }
                }
            }
        }
    }
    .menu-hide {
        position: fixed;
        top: 0vh;
        left: 8px;
        font-size: 2em;
        z-index: 9999;
        margin-top: 5px;
        color: $Bluelagoon;
    }
    .nav2 {
        height: 50%;
        width: 10%;
        margin: 0 auto;
        background-color: rgba($color: $Shark, $alpha: .7);
        position: fixed;
        top: 0vh;
        z-index: 99;
        padding-top: 50px;
        padding-bottom: 10px;
        border-radius: 0 10px 10px 0;
        ul{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            width: 100%;
            li {
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                a {
                    color: $White;
                    
                }
            }
        }
    }
    }
</style>>

