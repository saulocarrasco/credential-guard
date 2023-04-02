<template>
  <div class="about">
    <PermissionForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import PermissionForm from '@/components/PermissionForm.vue'

export default {
  name: 'FormView',
  components: {
    PermissionForm
  }
}
</script>