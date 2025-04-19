<template>
  <div class="container mt-5">
    <!-- Main Box -->
    <div class="custom-box">
      <!-- Header (Tag Details with Icon - No Background) -->
      <div class="header-container">
        <i class="bi bi-tag"></i>
        <h6 class="text-primary m-0">Tag Details</h6>
      </div>

      <!-- Close Button (Above Edit Button) -->
      <button type="button" class="btn-close" aria-label="Close" @click="closeTagDetails"></button>

      <!-- "Roaa Tag" with Icon + "Edit Tag Information" on the Same Line (No Background) -->
      <div class="title-row">
        <div class="title-container">
          <i class="bi bi-tag"></i>
          <h4 class="custom-title">Roaa Tag</h4>
        </div>
        <button class="btn btn-outline-secondary btn-sm">Edit tag information →</button>
      </div>

      <!-- Content Box (Background Starts Here) -->
      <div class="content-box">
        <!-- Tag Name and Created Date -->
        <div class="row">
          <div class="col-md-6">
            <small class="text-muted">Tag Name</small>
            <p class="fw-bold">Roaa Tag</p>
          </div>
          <div class="col-md-6">
            <small class="text-muted">Created Date</small>
            <p class="fw-bold">2023-11-06 14:44:32</p>
          </div>
        </div>
        <div class="divider"></div>

        <!-- Accounts -->
        <div>
          <small class="text-muted">Accounts</small>
          <p><span class="badge badge-custom">Roaa Sawalmeh</span></p>
        </div>
        <div class="divider"></div>

        <!-- Units -->
        <div>
          <small class="text-muted">Units</small>
          <div>
            <span class="badge badge-custom">Aljaber</span>
            <span class="badge badge-custom">518 مرسيدس</span>
            <span class="badge badge-custom">Sprinter-1249</span>
            <span class="badge badge-custom">2512 - بوكس</span>
            <span class="badge badge-custom">1702 كادي</span>
            <span class="badge badge-custom">Test Car</span>
            <span class="badge badge-custom">الفيوكو ديلي</span>
            <span class="badge badge-custom">إسوزو</span>
            <span class="badge badge-custom">1568 التكو</span>
            <span class="badge badge-custom">5160 مترسيبشي</span>
            <span class="badge badge-custom">0054 - سيارات</span>
          </div>
        </div>
        <div class="divider"></div>

        <!-- Drivers -->
        <div>
          <small class="text-muted">Drivers</small>
          <div>
            <span class="badge badge-custom">Firas Shaarawi</span>
            <span class="badge badge-custom">Ashraf Skaffi</span>
            <span class="badge badge-custom">Ahmad</span>
            <span class="badge badge-custom">Ahmad</span>
            <span class="badge badge-custom">Driver1</span>
            <span class="badge badge-custom">Tawfiq1</span>
          </div>
        </div>
        <div class="divider"></div>

        <!-- Areas -->
        <div>
          <small class="text-muted">Areas</small>
          <div>
            <span class="badge badge-custom">Test####</span>
            <span class="badge badge-custom">وكالة موئنان</span>
            <span class="badge badge-custom">Test Test</span>
            <span class="badge badge-custom">Roaa Test</span>
            <span class="badge badge-custom">New Test</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Close Button -->
    <div class="text-center mt-4">
      <button class="btn btn-light w-100" @click="closeTagDetails">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagDetails',
  methods: {
    closeTagDetails() {
      // Emit an event to parent component or handle closing logic
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
/* Centering the Main Box */
.container {
  max-width: 600px; /* Fixed width */
  margin: auto; /* Center horizontally */
}

/* Main Box (Only White Background) */
.custom-box {
  border-radius: 10px;
  padding: 20px;
  position: relative;
  border: 1px solid #DEE2E6;
}

/* Header (Tag Details - No Background) */
.header-container, .title-container {
  display: flex;
  align-items: center;
  gap: 5px; /* Space between icon and text */
}

/* "Roaa Tag" and "Edit" in Same Line (No Background) */
.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

/* Title Styling */
.custom-title {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  gap: 5px; /* Space between icon and text */
}

/* Content Box (Now has Background) */
.content-box {
  background-color: #F8F9FA;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #DEE2E6;
}

/* Badges */
.badge-custom {
  background-color: #0000A0;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  margin: 2px;
}

/* Divider */
.divider {
  border-top: 1px solid #DEE2E6;
  margin: 10px 0;
}

/* Close Button */
.btn-close {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>