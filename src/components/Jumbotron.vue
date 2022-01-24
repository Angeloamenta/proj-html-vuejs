<template>
  <div class="jumbotron">
      <div class="inner-container">
      <div class="container">
          <nav>
              <div class="nav-sx"><h2><span class="next">NEX</span>GEN</h2></div>
              <div class="nav-dx">
                  <ul class="list-none">
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
              <h1>Lead~ Customer</h1>
              <div class="text text-center">
              <p>Successful strategies rewuire data analysis, creativity and customer focus, taking advantage of the lastest technologies to offer excelent services.</p>
              </div>
              <div class="buttons">
                  <button class="button-background">GET IN TOUCH</button>
                  <button class="button-noborder">READ MORE</button>
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
    height: 90vh;
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
                height: 40%;
                .nav-sx {
                    width: 50%;
                }

               .nav-dx {
                   width: 50%;
            
                   ul {
                       display: flex;
                       justify-content: space-between;
                       align-items: center;
                     li {
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
                h1 {
                    font-size: 4.5em;
                    font-weight: bolder;
                }
                .text {
                    margin: 15px 0;
                    padding: 0 250px;
                    width: 100%;
                }
                .buttons {
                    width: 35%;
                    display: flex;
                    justify-content: space-around;
                }
            }
        }
    }
    }
</style>>

