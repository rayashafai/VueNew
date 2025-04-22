<template>
  <div id="app" class="container mt-3">
    <!-- Units Title -->
    <h1 class="mb-4">Units</h1>
    
    <!-- Filter Row -->
    <FilterSection />
    
    <!-- Tag Details Card -->
    <TagDetails />
  </div>
</template>

<script>
import FilterSection from '@/modules/components/FilterSection.vue'
import TagDetails from '@/modules/components/TagDetails.vue'

export default {
  components: { FilterSection, TagDetails }
}
</script>