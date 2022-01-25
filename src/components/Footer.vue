<template>
  <footer>
      <div class="footer-top">
       <div class="container">
          <div class="ft-col">
              <div class="slot">
                 <h2><span class="next">NEX</span>GEN</h2>
                  <div class="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <ul class="list-none">
                      <li> <div class=""><i class="fas fa-solid fa-phone"></i></div> <span>+1(305) 1234-5678</span> </li>
                      <li> <div class=""><i class="fas fa-solid fa-envelope"></i></div><span>helloexample.com</span></li>
                      <li> <div class=""><font-awesome-icon icon="location-arrow"/></div><span>Main Avenue, 987</span></li>
                  </ul>
                  <button class="button-noborder">GET IN TOUCH</button>
             </div>
          </div>
          <div class="ft-col col-bk">
              <h2>About</h2>
              <ul class="list-none">
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">The Company</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Institutional</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Social & Events</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Innovation</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Environment</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Technology</div></li>
              </ul>
          </div>
          <div class="ft-col col-bk">
              <h2>Services</h2>
              <ul class="list-none">
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Audit & Assurance</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Financial Advisory</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Analytics M&A</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Middle Marketing</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Legal Consulting</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Regulatory Risk</div></li>
              </ul>
          </div>
          <div class="ft-col col-bk">
              <h2>Support</h2>
              <ul class="list-none">
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Responsibility</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Terms of Use</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">About Cookies</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Privacy Policy</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Accessibility</div></li>
                  <li class="footer-list"><div><i class="fas fa-solid fa-angle-right"></i></div><div class="text-list">Information</div></li>
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
      </div>
  </footer>
</template>

<script>
export default {
name:'Footer'
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
                        font-size: 0.9em;
                        
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

                ul {
                    .footer-list {
                        display: flex;
                        margin-top: 10px;

                        .text-list {
                            margin-left: 8px;
                        }
                    }

                }
            }
        
        }
    }
    .footer-bottom {
        background-color: black;
        width: 100%;
        height: 70px;
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
    }
    
}

</style>>

