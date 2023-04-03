<script>
import axios from 'axios'
import CustomConstants from '../constans/Constants.vue';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
  name: "PermissionService",
  getList() {
    return axios.get(CustomConstants.ApiPermission);
  },
  get(id) {
    return axios.get(`${CustomConstants.ApiPermission}/${id}`);
  },
  add(permission){
    return axios.post(`${CustomConstants.ApiPermission}`, permission);
  },
  update(id, permission){
    return axios.put(`${CustomConstants.ApiPermission}/${id}`, permission);
  },
  delete(id){
    return axios.delete(`${CustomConstants.ApiPermission}/${id}`);
  }
};

</script>