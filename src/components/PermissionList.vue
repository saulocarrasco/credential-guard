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
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      }
    }
  },
  methods: {
    onEdit(item) {
      this.$router.push(`/form/${item.id}`);
    },
    onDelete(item) {
      console.log(item);
      // this.infoModal.title = `Row index: ${index}`
      //   this.infoModal.content = JSON.stringify(item, null, 2)
      //   this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    onRowSelected(items) {
      this.selected = items
    },

    populatePermissionTable() {
      PermissionService.getList().then(response => {
        console.log(response.data);
        this.items = response.data.data;
      });
    }
  },
  mounted() {
    this.populatePermissionTable();
  }
}
</script>