<template>
  <section id="news" class="news">
      <div class="container">
      <div class="news-top">
        <div class="green-text">OUR EDITORIAL CONTENT</div>
        <div class="title"><h1 class="font-bold">Latest <span class="back-green">News</span></h1></div>
        <div class="subtitle quick-flex">
        <div class="sub">Every week we publish content about what is best in the busines wolrd.</div>
        <button class="button-background">SEE ALL</button>
        </div>
      </div>
      <div class="news-bottom">
        <div class="news-card" v-for="(card, index) in cardNews" :key="index">
          <div class="card-container">
            <img :src="card.img" alt="">
            <div class="user-text quick-flex">
              <div><i class="fas fa-solid fa-user"></i> {{card.user}}</div>
              <div><i class="fas fa-solid fa-clock"></i> {{card.time}}</div>
            </div>
            <div class="titolo">
            <h2>{{card.text}}</h2>

            </div>
            <div class="user-desc">{{card.desc}}</div>
          </div>
        </div>
      </div>
      </div>
  </section>
</template>

<script>
export default {
name:'LatestNews',
data() {
    return {
        cardNews: [
            {
                user: "Andrea Miller",
                time: "2 Days Ago",
                desc:"lorem ipsum bla bla bla bla ",
                text: "Increasing creativity is possible for everyone",
                img: require("../assets/images/news-1.jpg"),
            },
             {
                 user: "Andrea Miller",
                time: "2 Days Ago",
                desc:"lorem ipsum bla bla bla bla ",
                text: "Because market research is part of the busines plan",
                img: require("../assets/images/news-2.jpg"),

                
            },
             {
                user: "Andrea Miller",
                time: "2 Days Ago",
                desc:"lorem ipsum bla bla bla bla ",
                text: "Working from home is now a trend",
                img: require("../assets/images/news-3.jpg"),
            }
        ]
    }
}
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/_variables.scss";
.news {

    padding: 100px 0;

    .container{

      .news-top{
        
        .title{
          color: $Shark;
          font-size: 2em;
          font-weight: 900;
          margin: 20px 0;
        }
        
        .subtitle{

          .sub {
            color: $Scarpaflow;
            
          }
        }
      }

      .news-bottom {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        .news-card{
          width: calc(100% / 3);
          height: 350px;
          margin-left: 20px;
          background-color: $Woodsmoke;
          
          
          .card-container {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            

            &:hover .titolo {
              bottom: 150px;
            }
            &:hover .user-text{
              display: flex;
              justify-content: space-between;
              width: 80%;
            }
            
            &:hover .user-desc{
              display: block;
            }

             &:hover img{
              filter: blur(3px);
            }
            .titolo {
              color: $White;
              position: absolute;
              bottom: 50px;
              text-align: center;
              font-size: 1.1em;
              padding: 0 20px;
            }

            img {
              width: 100%;
              height: 100%;
              display: block;
              opacity: 50%;
              object-fit: cover;
              
            }

            .user-text {
              position: absolute;
              top: 50px;
              color: $White;
              display: none;
              
            
            }

            .user-desc {
              position: absolute;
              bottom: 50px;
              color: $White;
              display: none;
            }
          }
        }

      }

    }
}
</style>