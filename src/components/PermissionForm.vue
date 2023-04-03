<template>
  <b-container fluid="sm" class="justify-content-md-center">
    <div>
      <b-row>
        <b-col md="6" offset-md="3">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Employee Name:" label-for="input-1">
              <b-form-input id="input-1" v-model="form.employeeName" placeholder="Employee Name" required>
              </b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Employee LastName:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.employeelastName" placeholder="Enter name" required></b-form-input>
            </b-form-group>
            <b-form-group>
              <div>
                <label for="example-datepicker">Permission Date</label>
                <b-form-datepicker id="example-datepicker" v-model="form.permissionDate" class="mb-2" required>
                </b-form-datepicker>
              </div>
            </b-form-group>

            <b-form-group id="input-group-3" label="Permission Type:" label-for="input-3">
              <b-form-select id="input-3" v-model="form.permissionType" :options="permissionTypes"
                required></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
  
<script>
import PermissionTypeService from '../services/PermissionTypeService.vue';
import PermissionService from '../services/PermissionService.vue';

export default {
  data() {
    return {
      form: {
        employeeName: '',
        employeelastName: '',
        permissionType: null,
        permissionDate: null,
        employeeId: 0
      },
      permissionTypes: null,//[{ text: 'Select One', value: null }, 'Diligencias', 'Otros'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()

      var id = this.$route.params.id;

      var permission = {
        employee: {
          name: this.form.employeeName,
          lastName: this.form.employeelastName
        },
        permissionTypeId: this.form.permissionType,
        permissionDate: this.form.permissionDate
      };

      if (id) {

        permission.employee.id = this.form.employeeId;

        PermissionService.update(id, permission).then(response => {
          alert(response.data.messages[0]);
        });

      } else {
        PermissionService.add(permission).then(response => {
          alert(response.data.messages[0]);
        });
      }

      this.$router.push(`/`);
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.employeeName = ''
      this.form.employeelastName = ''
      this.form.permissionType = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    uploadPermission() {
      var id = this.$route.params.id;

      if (id) {
        PermissionService.get(id).then(response => {
          this.form.employeeName = response.data.data[0].employee.name;
          this.form.employeeId = response.data.data[0].employee.id;
          this.form.employeelastName = response.data.data[0].employee.lastName;
          this.form.permissionType = response.data.data[0].permissionTypeId;
          this.form.permissionDate = response.data.data[0].permissionDate;
        });
      }
    },
    populatedPermissionTypes() {

      PermissionTypeService.get().then(response => {

        this.permissionTypes = response.data.data.map(item => (
          {
            value: item.id, text: item.description
          }
        ));
        this.permissionTypes.push({ text: 'Select One', value: null });
      });
    }
  },
  mounted() {
    this.uploadPermission();
    this.populatedPermissionTypes();
  }
}
</script>