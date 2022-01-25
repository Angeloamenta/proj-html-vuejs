<template>
  <section class="touch">
     <div class="container">
         <div class="touch-sx">
             <div class="sx-top">
                  <div class="touch-text">
                    <div class="green-text">SEND A MESSAGE</div>
                    <div class="title"><h1>Get in <span class="back-green">Touch</span></h1></div>
                    <div class="subtitle">
                    <div class="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio et qui consequatur culpa. Aliquam magnam atque natus corporis.</div>
                    </div>
                </div>
             </div>
             <div class="sx-bottom">
                 <div class="input-touch"><input type="text" placeholder="Name"> <img src="../assets/images/image (1).png" alt=""></div>
                 <div class="input-touch"><input type="text" placeholder="Email"></div>
                 <div class="input-touch"><input type="text" placeholder="Phone"></div>
                 <div class="input-touch"><input type="text" placeholder="More Info"><i class="fas fa-solid fa-chevron-down"></i></div>
                 <div class="message-touch"><textarea placeholder="Message"></textarea></div>
                 <button class="button-background">SEND</button>
             </div>
         </div>
         <div class="touch-dx">
             <div class="dx-container">
                 <h2>Example inc.</h2>
                  <div class="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div class="sub">Optio et qui consequatur culpa. Aliquam magnam atque natus corporis.</div>
                  <ul class="list-none">
                      <li> <div class="circle"><i class="fas fa-solid fa-phone"></i></div> <span>+1(305) 1234-5678</span> </li>
                      <li> <div class="circle"><i class="fas fa-solid fa-envelope"></i></div><span>helloexample.com</span></li>
                      <li> <div class="circle"><font-awesome-icon icon="location-arrow"/></div><span>Main Avenue, 987</span></li>
                  </ul>
                  <button class="button-noborder">VIEW MAP</button>
             </div>
         </div>
    </div> 
  </section>
</template>

<script>
export default {
name: 'GetTouch'
}
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
.touch {
    width: 100%;
    padding: 100px 0;
    .container {
        height: 100%;
        display: flex;
        .touch-sx {

            width: 60%;
            height: 100%;
            
            .sx-top {

                .touch-text {
    
                    .title {
                        margin: 20px 0;
                        font-size: 1.6em;
                        font-weight: bold;
                    }
    
                    .subtitle {
    
                        .sub {
                            color: $Scarpaflow;
                            font-size: 0.9em;
                        }
                    }
                }
            }

            .sx-bottom {
                display: flex;
                flex-wrap: wrap;

                .input-touch {
                    width: calc(100% / 2 - 10px);
                    height: 40px;
                    margin-right: 10px;
                    margin-top: 10px;
                    background-color: $Graynurse;
                    display: flex;
                    align-items: center;

                    input {
                        width: 95%;
                        height: 100%;
                        border: none;
                        background-color: transparent;
                        border-radius: 3px;
                        outline: none;
                    }

                    img {
                        width: 15px;
                        height: 15px;
                    }

                    .fa-solid {
                        width: 15px;
                        height: 15px;
                        font-size: 15px;
                        color: $Ebonyclay;
                    }

                }
                .message-touch {
                    margin-top: 20px;
                        width: 100%;
                        height: 200px;
                        background-color: $Graynurse;
                        textarea {
                            width: 100%;
                            height: 100%;
                            outline: none;
                            background-color: transparent;
                        }
                    }
                
                button {
                    margin-top: 20px;
                }
            }
        }

        .touch-dx {

            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .dx-container {
                width: 80%;

                .sub {
                    margin-top: 15px;
                    color: $Scarpaflow;
                }

                ul {
                    li {
                        display: flex;
                        margin-top: 20px;
                        span {
                            color: $Bluelagoon;
                            margin-left: 8px;
                            font-size: 1.1em;
                        }
                    }
                }

                button {
                    color: $Bluelagoon;
                    font-size: 0.8em;
                    margin-top: 20px;
                    font-weight: lighter;
                    padding: 10px 25px;
                }
            }
        }
    }
}
</style>>
