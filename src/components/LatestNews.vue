<template>
  <section class="news">
      <div class="container">
      <div class="news-top">
        <div class="green-text">OUR EDITORIAL CONTENT</div>
        <div class="title"><h1>Latest <span class="back-green">News</span></h1></div>
        <div class="subtitle quick-flex">
        <div class="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio et qui consequatur culpa.</div>
        <button class="button-background">SEE ALL</button>
        </div>
      </div>
      <div class="news-bottom">
        <div class="news-card" v-for="(card, index) in cardNews" :key="index">
          <div class="card-container">
            <img :src="card.img" alt="">
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
                img: require("../assets/images/news-1.jpg"),

                
            },
             {
                user: "Andrea Miller",
                time: "2 Days Ago",
                desc:"lorem ipsum bla bla bla bla ",
                text: "Working from home is now a trend",
                img: require("../assets/images/news-1.jpg"),
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
            
            img {
              width: 100%;
              height: 100%;
              display: block;
              opacity: 50%;
              object-fit: cover;
              
            }
          }
        }

      }

    }
}
</style>