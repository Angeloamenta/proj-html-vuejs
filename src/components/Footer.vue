<template>
  <footer id="footer">
      <div class="footer-top">
       <div class="container">
          <div class="ft-col">
              <div class="slot">
                 <h2 class="logo-next"><span class="next">NEX</span>GEN</h2>
                  <div class="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <ul class="list-none">
                      <li v-for="(dato, index) in arrayDatif" :key=index> 
                          <div class=""><font-awesome-icon :icon="dato.img"/></div> <span>{{dato.info}}</span> 
                      </li>
                      
                  </ul>
                  <button class="button-noborder">GET IN TOUCH</button>
             </div>
          </div>
          <div class="ft-col col-bk" v-for="(footerInfo, index) in arrayLinkFooter" :key="index">
              <h2>{{footerInfo.title}}</h2>
              <ul class="list-none">
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list"><a href="">{{footerInfo.info1}}</a></div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list"><a href="">{{footerInfo.info2}}</a></div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list"><a href="">{{footerInfo.info3}}</a></div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list"><a href="">{{footerInfo.info4}}</a></div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list"><a href="">{{footerInfo.info5}}</a></div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list"><a href="">{{footerInfo.info6}}</a></div></li>
              </ul>
          </div>
      </div>
      </div>
      <div class="footer-bottom">
          <div class="container">
              <div class="fb-col">
                  Enjoy the low price. We are tracking any intention of piracy.
              </div>
              <div class="fb-col text-end">
                 &copy; 2020 NEXGEN is proudly Power by <span>Codings</span>.
              </div>
          </div>
          <div class="arrow-f">
              <a href="#home" class="shark-color"><font-awesome-icon icon="arrow-up"/></a></div>
      </div>
  </footer>
</template>

<script>
export default {
name:'Footer',
props: {
 arrayDatif: Array,
 arrayLinkFooter: Array,
},
data() {
    return {
       

    }
}
}
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
footer {
    .footer-top {
        background-color: $Woodsmoke;
        padding: 100px 0;
        color: $Edward;
        .container{
            display: flex;
            justify-content: center;
            .ft-col {
                width: calc(100% / 4 - 10px);
                margin-left: 20px;
                padding: 10px;

                .slot {
                    
                    
                    .sub {
                        margin: 10px 0;
                        font-size: 1em;
                        
                    }
                    ul {

                        li {
                            display: flex;
                            margin-top: 15px;
                            span {
                                margin-left: 8px;
                            }
                        }
                    }
                    button {
                        font-size: 0.9em;
                        padding: 15px 15px;
                        margin-top: 15px;

                        &:hover {

                            background-color: $Bluelagoon;

                        }
                    }
                }
            }

            & .col-bk {
                background-color: rgba($color: $Shark, $alpha: 0.3);
                border-radius: 5px;
                padding: 30px;

                h2 {
                    color: $White;
                }

                ul {
                    .footer-list {
                        display: flex;
                        margin-top: 10px;

                        .text-list {
                            margin-left: 8px;

                            a {
                                color: $Slategray;
                            }
                        }
                    }

                }
            }
        
        }
    }
    .footer-bottom {
        background-color: rgba($color: #000000, $alpha: .95);
        width: 100%;
        height: 70px;
        position: relative;
        color: $Edward;
        font-size: 0.8em;
        .container {
            display: flex;
            .fb-col {
                width: 50%;
                line-height: 70px;

                span {
                    color: $Bluelagoon;
                }
            }
        }
        .arrow-f {
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: rgba($color: $Shark, $alpha: 0.3);
            font-size: 1.5em;
            color: $Shark;
        }
    }
    
}

</style>>

