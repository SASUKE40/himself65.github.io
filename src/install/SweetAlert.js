import Vue from 'vue'
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'

Vue.use({
  install: () => {
    Vue.$alert = Swal
  }
})
