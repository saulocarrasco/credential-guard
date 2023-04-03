<template>
  <div>
    <b-row>
      <b-col md="10" offset-md="1">
        <b-table striped hover :select-mode="selectMode" responsive="sm" ref="permissionTable" selectable :items="items"
          @row-selected="onRowSelected" :fields="fields">
          <template v-slot:cell(fullName)="data">
            {{ data.item.employee.name }} {{ data.item.employee.lastName }}
          </template>
          <template #cell(edit)="row">
            <b-button size="sm" @click="onEdit(row.item)" class="mr-1">
              Edit
            </b-button>
          </template>
          <template #cell(delete)="row">
            <b-button size="sm" @click="onDelete(row.item)" class="mr-1">
              Delete
            </b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <div>
      <b-modal ref="delete-modal" hide-footer v-model="modalShow">
        <div class="d-block text-center">
          <h6>Esta seguro de eliminar este permiso!</h6>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="executeDelete">Confirmar</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>

import PermissionService from '../services/PermissionService.vue';

export default {
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'id',
          sortable: true,
          isActive: false
        },
        {
          key: 'fullName',
          label: 'employee',
          sortable: true,
        },
        {
          key: 'permissionTypeId',
          label: 'Tipo de Permiso',
          sortable: true,
        },
        {
          key: 'permissionDate',
          label: 'Date'
        },
        {
          key: 'Edit',
          label: 'Option 1'
        },
        {
          key: 'delete',
          label: 'Option 2'
        }
      ],
      items: [],
      selectMode: 'single',
      selected: null,
      modalShow: false,
      currentPermissionId: 0
    }
  },
  methods: {
    onEdit(item) {
      this.$router.push(`/form/${item.id}`);
    },
    onDelete(item) {
      this.modalShow = !this.modalShow;
      this.currentPermissionId = item.id;
    },
    onRowSelected(items) {
      this.selected = items
    },
    executeDelete() {
      PermissionService.delete(this.currentPermissionId).then(response => {
        this.$refs['delete-modal'].hide();
        alert(response.data.messages[0]);
        this.populatePermissionTable();
      });
    },
    populatePermissionTable() {
      PermissionService.getList().then(response => {
        this.items = response.data.data;
      });
    }
  },
  mounted() {
    this.populatePermissionTable();
  }
}
</script>