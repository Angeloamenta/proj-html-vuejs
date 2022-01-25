import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
// import { faFacebookSquare} from '@fortawesome/fontawesome-free-brands';<i class="fas fa-tachometer-alt"></i>chart-pie
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'



import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faTimes)
library.add(faGem)
library.add(faRocket)
library.add(faBriefcase)
library.add(faUserFriends)
library.add(faTachometerAlt)
library.add(faChartPie)
library.add(faMedal)
library.add(faLock)
library.add(faEdit)
library.add(faGraduationCap)
library.add(faPlane)
library.add(faChartBar)
library.add(faInbox)
library.add(faProjectDiagram)
library.add(faGlobe)
library.add(faArrowRight)
// library.add()
// library.add()
// library.add(faTwitter)
// library.add(faLinkedinIn)
// library.add(faFacebookSquare)



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app");
