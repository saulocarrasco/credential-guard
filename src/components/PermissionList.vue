<template>
  <div>
    <b-row>
      <b-col md="10" offset-md="1">
        <b-table striped hover :select-mode="selectMode" responsive="sm" ref="permissionTable" selectable :items="items"
          @row-selected="onRowSelected" :fields="fields">
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
          key: 'lastName',
          sortable: true,
        },
        {
          key: 'firstName',
          sortable: false
        },
        {
          key: 'permission',
          label: 'Description',
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
      items: [
        { id: 1, permission: "Otro", permissionDate: new Date(), firstName: 'Dickerson', lastName: 'Macdonald' },
      ],
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
      console.log(items);
    },
  }
}
</script>