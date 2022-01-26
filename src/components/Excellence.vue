<template>
  <section class="excellence">
    <div class="container">
      <div class="ecellence-top">
    <div class="green-text">OUR BUSINES AREA</div>
    <div class="title"><h1 class="font-bold">Excellence in <span class="back-green-twhite">Services</span></h1></div>
    <div class="subtitle">
    <div class="sub">We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire.</div>
    <button class="button-noborder">SEE ALL</button>
      </div>
    </div>
    <div class="excellence-bottom">
      <div class="card-excellence" :class="(card.hover) ? 'selected' : ''" @mouseover="card.hover =true" @mouseleave="card.hover =false" v-for="(card, index) in cardExcellence" :key="index">
        <div class="card-icon"><font-awesome-icon :icon="card.icon"/></div>
        <div class="card-title"><h3>{{card.title}}</h3></div>
        <div class="card-desc">{{card.desc}}</div>
        <div>
        <div class="btn"><button class="button-noborder">READ MORE</button></div>

        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
name:'Excellence',
data() {
  return {
    cardExcellence: [
            {
                icon: "project-diagram",
                title: "Audit & Assurance",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
             {
                icon: "briefcase",
                title: "Financial Advisory",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
             {
                icon: "chart-bar",
                title: "Analytics and M&A",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
            {
                icon: "plane",
                title: "Middle Marketing",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
            {
                icon: "globe",
                title: "Legal Consulting",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            },
            {
                icon: "inbox",
                title: "Regulary Risk",
                desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                hover: false
            }
        ]
  }
}
}
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
.excellence {
  background-color: $Woodsmoke;
  width: 100%;
  color: $White;
  .container {
    padding: 80px 0;
    .title {
      h1 {
        font-size: 2.5em;
      }
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      align-items: center;
      .sub {
        color: $White;
        font-size: 0.9em;
        width: 80%;
      }
      .button-noborder {
        font-size: 0.9em;
        padding: 8px 20px;
       &:hover  {
            background-color: $Bluelagoon;
          }
      }
    }

    .excellence-bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 35px;

      .card-excellence {
        width: calc(90% / 3);
        height: 290px;
        margin-left: 20px;
        margin-bottom: 20px;
        border-radius: 15px;
        background-color: rgba($color: $Shark, $alpha: 0.3);
        padding: 35px;
        .card-title {
          margin: 15px 0;
        }
        .card-desc {
          font-size: 0.9em;
        }

        .card-icon {
          font-size: 2em;
          color: $Bluelagoon;
        }

        .btn {
          margin-top: 30px;
          button {
            font-size: 0.9em;
            padding: 8px 20px;
          }

          &:hover button {
            background-color: $Bluelagoon;
          }
        }
      }

      .selected {
        position: relative;
        bottom: 10px;
        .card-icon {
          color: $White;
        }
      }
    }
  }
}
</style>>

