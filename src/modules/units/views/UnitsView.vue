<!-- src/views/UnitsView.vue -->
<script setup>
import FilterSection from '@/components/FilterSection.vue';
import Table from '@/modules/units/components/Table.vue';
</script>

<template>
  <div class="units-container">
    <!-- Units Title -->
    <h1 class="mb-4">Units</h1>
    
    <!-- Filter Row -->
    <FilterSection />
    
    <!-- Table -->
    <Table />
  </div>
</template>

<style scoped>
.units-container {
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}
</style>