<script>
import axios from 'axios'
import CustomConstants from '../constans/Constants.vue';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
  name: "PermissionTypeService",
  get() {
    console.log(this.config)
    return axios.get(CustomConstants.ApiPermissionType);
  }
};

</script>