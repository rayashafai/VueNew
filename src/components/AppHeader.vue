<template>
  <header class="app-header">
    <div class="units-text">Units</div>

    <div class="header-controls">
      <!-- Notification Icon -->
      <button class="icon-button">
        <svg class="icon" viewBox="0 0 24 24">
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
      </button>

      <!-- Language Dropdown -->
      <div class="dropdown">
        <button class="dropdown-toggle">
          <svg class="icon" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
          <span>English</span>
          <svg class="chevron" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <div class="dropdown-menu">
          <div class="dropdown-item">English</div>
          <div class="dropdown-item">Arabic</div>
        </div>
      </div>

      <!-- Profile Dropdown -->
      <div class="dropdown profile-dropdown">
        <button class="dropdown-toggle">
          <div class="profile-initials" :style="{ backgroundColor: randomColor }">AM</div>
          <span>Ahmed Mohammed</span>
          <svg class="chevron" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <div class="dropdown-menu">
          <div class="profile-header">
            <div class="profile-initials-large" :style="{ backgroundColor: randomColor }">AM</div>
            <div class="profile-details">
              <strong>Ahmed Mohammed</strong>
              <small>PITS</small>
            </div>
          </div>
          <button class="edit-profile">Edit Profile</button>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">Switch accounts</a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item text-danger">Log Out</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.units-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Add all other styles from your PDF requirements */
</style>