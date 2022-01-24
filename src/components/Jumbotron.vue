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
    height: 100vh;
    background-image: url("../assets/images/hero-image.png");
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    .inner-container {
        padding-top: 20px;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.5);
        position: relative;
        color: white;
        .container {

            nav {
                display: flex;
                align-items: center;
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
        }
    }
    }
</style>>

