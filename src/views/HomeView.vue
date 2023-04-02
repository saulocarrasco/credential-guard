<template>
  <div class="home">
    <PermissionList />
  </div>
</template>

<script>
// @ is an alias to /src
import PermissionList from '@/components/PermissionList.vue'

export default {
  name: 'HomeView',
  components: {
    PermissionList
  }
}
</script>
