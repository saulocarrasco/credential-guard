<template>
    <div>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          // Note 'isActive' is left out and will not appear in the rendered table
          fields: [
            {
              key: 'lastName',
              sortable: true
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
            }
          ],
          items: [
            { permission: "Otro", permissionDate: new Date(), firstName: 'Dickerson', lastName: 'Macdonald' },
          ]
        }
      }
    }
  </script>