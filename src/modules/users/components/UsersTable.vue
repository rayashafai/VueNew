<template>
  <div class="users-table-container">
    <div class="table-responsive">
      <table class="table table-hover align-middle w-100">
        <thead class="table-header">
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="6" class="text-center py-4">Loading...</td>
          </tr>
          <tr v-else-if="error">
            <td colspan="6" class="text-center py-4 text-danger">{{ error }}</td>
          </tr>
          <tr v-else v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ formatAddress(user.address) }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.company.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUsersStore } from '../stores/users'

const store = useUsersStore()
const users = computed(() => store.users)
const loading = computed(() => store.loading)
const error = computed(() => store.error)

const formatAddress = (address) => {
  return `${address.city}-${address.street}(${address.zipcode})`
}
</script>

<style scoped>
.users-table-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;
}

.table-responsive {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.table {
  width: 100%;
  --bs-table-color: #637483;
  --bs-table-hover-color: #637483;
  margin-bottom: 0;
}

.table-header {
  --bs-table-bg: #f8f9fa;
  --bs-table-color: #637483;
}

.table-header th {
  font-weight: 600;
  padding: 12px 8px;
  border-bottom: 2px solid #dee2e6;
}

.table > :not(:first-child) {
  border-top: none;
}

@media (max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>