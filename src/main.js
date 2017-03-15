// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Styles
import './assets/css/main.css'
import './assets/css/nav.css'

//Scripts
  // import "assets/js/jquery.min.js"
	// import "assets/js/jquery.scrollex.min.js"
	// import "assets/js/jquery.scrolly.min.js"
	// import "assets/js/skel.min.js"
	// import "assets/js/util.js"
	// import "assets/js/main.js"
	// import "assets/js/nav.js"





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
