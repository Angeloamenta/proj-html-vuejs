<template>
  <header>
      <div class="container">
          <div>
              <i class="fas fa-solid fa-clock mr"></i>
              <span>Open Hours:{{dayOpen}} -- {{lastDay}} - {{hourFrom}} - {{hourTo}}</span>
          </div>
          <div class="header-dx">
              <div>
                  <i class="fas fa-solid fa-phone mr"></i> {{telNumber}}
              </div>
              <div>
                  <i class="fas fa-solid fa-envelope mr"></i> {{email}}
              </div>
              <div class="social">
                  <ul class="list-none">
                      <li v-for="(net, index) in arraySocial" :key="index"><a :href="net.link"><i :class="net.img"></i></a></li>
                  </ul>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
name: 'Header',
props: {
    arraySocial:Array,
},
data() {
    return {
        dayOpen: "Mon",
        lastDay: "Sat",
        hourFrom: "9:00",
        hourTo: "18:00",
        telNumber: "+1(305) 1234-5678",
        email: "helloexample.com", 

    }
}
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/_variables.scss";
header {
    width: 100%;
    height: 50px;
    // background-color: $Bluelagoon;
    background-color: #21333E;
    .container {
        height: 100%;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: lighter;
        .header-dx {
            width: 55%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            .social {
                width: 20%;
                ul {
                    display: flex;
                    justify-content: space-around;
                    li{
                        a {
                            color: $White;
                            &:hover{
                                color: $Bluelagoon;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>>

