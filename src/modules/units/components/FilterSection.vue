<template>
  <div class="filter-row mb-4">
    <div class="input-group w-25 me-2">
      <span class="input-group-text bg-white">
        <i class="bi bi-search"></i>
      </span>
      <input type="text" class="form-control" placeholder="Search...">
    </div>

    <select class="form-select w-15 me-2">
      <option>All</option>
    </select>

    <select class="form-select w-15 me-2">
      <option>Tags</option>
    </select>

    <button class="btn btn-outline-secondary">
      Export <i class="bi bi-chevron-down"></i>
    </button>
  </div>
</template>

<style scoped>
.filter-row {
  display: flex;
  gap: 10px;
}
.w-15 {
  width: 15%;
}
</style>