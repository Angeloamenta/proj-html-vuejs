<template>
  <div class="jumbotron">
      <div class="inner-container">
      <div class="container">
          <nav>
              <div class="nav-sx"><h2 class="logo-next"><span class="next">NEX</span>GEN</h2></div>
              <div class="nav-dx">
                  <ul class="list-none font-mon font-bolder">
                      <li><a href="">HOME</a></li>
                      <li><a href="">ABOUT</a></li>
                      <li><a href="">SERVICES</a></li>
                      <li><a href="">PRICING</a></li>
                      <li><a href="">BLOG</a></li>
                      <li class="active"><a href="">GET IN TOUCH</a></li>
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
  </div>
</template>

<script>
export default {
name: 'Jumbotron',
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
        .container {
            display: flex;
            flex-direction: column;
            height: 100%;
            nav {
                display: flex;
                align-items: center;
                height: 40%;
                .nav-sx {
                    width: 20%;
                }

               .nav-dx {
                   width: 80%;
            
                   ul {
                       display: flex;
                       align-items: center;
                       justify-content: center;
                     li {
                         margin-left: 30px;
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
    }
</style>>

