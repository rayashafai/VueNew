<script setup>
import { onMounted } from 'vue'
import { useUsersStore } from '../stores/users'
import FilterSection from '@/components/FilterSection.vue'
import UsersTable from '../components/UsersTable.vue'

const store = useUsersStore()

onMounted(() => {
  store.fetchUsers()
})
</script>

<template>
  <div class="users-container">
    <!-- Users Title -->
    <h1 class="mb-4">Users</h1>
    
    <!-- Filter Row -->
    <FilterSection />
    
    <!-- Table -->
    <UsersTable />
  </div>
</template>

<style scoped>
.users-container {
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}
</style>