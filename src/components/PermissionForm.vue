<template>
  <b-container fluid="sm" class="justify-content-md-center" >
    <div>
      <b-row>
          <b-col md="6" offset-md="3">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Employee Name:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.email" placeholder="Employee Name" required>
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Employee LastName:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-3" label="Permission Type:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.permissionType"
            :options="permissionTypes"
            required
          ></b-form-select>
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
    export default {
      data() {
        return {
          form: {
            employeeName: '',
            employeeLastName: '',
            permissionType: null
          },
          permissionTypes: [{ text: 'Select One', value: null }, 'Diligencias', 'Otros'],
          show: true
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.employeeName = ''
          this.form.employeeLastName = ''
          this.form.permissionType = null
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
  </script>