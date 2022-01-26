<template>
  <section class="know">
      <div class="container">
          <div class="know-sx">
              <div class="know-text">
             <div class="green-text">NEWSLETTER</div>
            <div class="title"><h1 class="font-bold"><span class="back-green-twhite">Know</span>First</h1></div>
            <div class="subtitle">
            <div class="sub">Follow closely and relceive content about our company <br>and the news of the current market</div>
         </div>
         </div>
          </div>
          <div class="know-dx">
              <div class="know-input">
                  <div class="name"><input class="input-text" type="text" placeholder="Name"></div>
                  <div class="email"><input class="input-text" type="text" placeholder="Email"></div>
                  <button class="button-background">SUBSCRIBE</button>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: 'KnowFirst'
}
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
.know {
    width: 100%;
    padding: 100px 0;
    background-image: url("../assets/images/bg-1.jpg");
    background-position: center;
    background-size: cover;
    .container {
        display: flex;
        height: 100%;
        .know-sx {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-right: 30px;
            .know-text{

                .title {
                    margin: 20px 0;
                    font-size: 1.5em;
                    color: $White;
                    font-weight: bold;
                }

                .subtitle {

                    .sub {
                        color: $White;
                        font-size: .9em;
                    }
                }
            }
        }
        
        .know-dx {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            
            .know-input {
                width: 100%;
                .input-text {
                    padding-left: 10px;
                }
                .email {
                    margin: 20px 0;
                }
                
                button {

                    &:hover {
                        background-color: rgba($color: $Bluelagoon, $alpha: 0.5);
                    }
                }
            }
        }
    }
}
</style>