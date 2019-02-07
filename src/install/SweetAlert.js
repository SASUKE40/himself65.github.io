import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'

export const SweetAlert = {
  install: (Vue) => {
    Vue.prototype.$alert = Swal
  }
}

export default SweetAlert
