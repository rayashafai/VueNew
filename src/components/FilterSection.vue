<template>
  <div>
    <!-- Main Header -->
    <header class="header">
      <!-- Units Text -->
      <div class="units-text">Units</div>

      <!-- Header Right Section -->
      <div class="header-right">
        <!-- Notification Icon -->
        <div class="notification-icon">
          <i class="bi bi-bell"></i>
        </div>

        <!-- Language Dropdown -->
        <div class="language-dropdown">
          <i class="bi bi-globe language-icon"></i>
          <div class="language-options">
            <span>English</span>
            <span>Arabic</span>
          </div>
        </div>

        <!-- Profile Section -->
        <div class="profile-dropdown">
          <div class="profile-info">
            <div class="profile-initials">R</div>
            <span class="profile-name">raya</span>
            <i class="bi bi-chevron-down"></i>
          </div>
          <div class="profile-options">
            <!-- Profile Header -->
            <div class="profile-header">
              <div class="profile-initials-large">R</div>
              <div class="profile-details">
                <strong>raya</strong>
                <small>PITS</small>
              </div>
            </div>

            <!-- Edit Profile Button -->
            <div class="edit-profile-container">
              <button class="edit-profile-button">Edit Profile</button>
            </div>

            <!-- Divider -->
            <div class="dropdown-divider"></div>

            <!-- Switch Accounts -->
            <a href="#" class="switch-accounts">Switch Accounts</a>

            <!-- Divider -->
            <div class="dropdown-divider"></div>

            <!-- Log Out -->
            <a href="#" class="log-out">Log Out</a>
          </div>
        </div>
      </div>
    </header>

    <!-- Filter Section -->
    <div class="filter-section">
      <!-- Left Section: Search, All, Tags, Export -->
      <div class="left-section">
        <!-- Search Box with Icon -->
        <div class="search-box">
          <i class="bi bi-search search-icon"></i>
          <input type="text" class="form-control search-input" placeholder="Search...">
        </div>

        <!-- All Dropdown -->
        <div class="filter-dropdown">
          <select class="form-select all-dropdown">
            <option selected>All</option>
            <option value="1">license expired</option>
            <option value="2">license not expired</option>
            <option value="3">With Tracking</option>
          </select>
        </div>

        <!-- Tags Dropdown -->
        <div class="groups-dropdown">
          <select class="form-select tags-dropdown">
            <option selected>Tags</option>
            <option value="1">Test 1</option>
            <option value="2">Test 2</option>
            <option value="3">Test 3</option>
            <option value="4">Test 4</option>
          </select>
        </div>

        <!-- Export Dropdown -->
        <div class="export-dropdown">
          <button class="btn btn-export dropdown-toggle" type="button">
            Export
          </button>
        </div>
        
        <!-- Reload Button -->
        <div class="reload-button">
          <button class="btn btn-reload" type="button">
            <i class="bi bi-arrow-clockwise"></i>
          </button>
        </div>
      </div>

      <!-- Right Side: Choose Columns Icon -->
      <div class="columns-dropdown">
        <button class="btn btn-columns" type="button">
          <i class="bi bi-gear"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

/* Units Text */
.units-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}

/* Header Right Section */
.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Notification Icon */
.notification-icon {
  font-size: 1.5rem;
  cursor: pointer;
  color: #6c757d;
}

/* Language Dropdown */
.language-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.language-icon {
  font-size: 1.2rem;
  color: #6c757d;
}

.language-options {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 5px;
  z-index: 10;
}

.language-dropdown:hover .language-options {
  display: block;
}

.language-options span {
  display: block;
  padding: 5px 10px;
}

.language-options span:hover {
  background-color: #f8f9fa;
}

/* Profile Section */
.profile-dropdown {
  position: relative;
  cursor: pointer;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-initials {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #6c757d;
  color: white;
  border-radius: 50%;
  font-weight: bold;
}

.profile-name {
  font-weight: bold;
}

.profile-options {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 15px;
  width: 250px;
  z-index: 10;
}

.profile-dropdown:hover .profile-options {
  display: block;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.profile-initials-large {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #6c757d;
  color: white;
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: bold;
}

.profile-details {
  text-align: center;
}

.dropdown-divider {
  height: 1px;
  background-color: #dee2e6;
  margin: 10px 0;
}

.edit-profile-button {
  padding: 8px 20px;
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  cursor: pointer;
}

.switch-accounts, .log-out {
  display: block;
  padding: 8px 0;
  color: #6c757d;
  text-decoration: none;
}

.log-out {
  color: #000;
}

/* Filter Section Styles */
.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.left-section {
  display: flex;
  gap: 10px;
  align-items: center;
}

.search-box {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
}

.search-input {
  padding-left: 30px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  height: 38px;
}

.form-select {
  height: 38px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.all-dropdown {
  width: 150px;
}

.tags-dropdown {
  width: 250px;
}

.btn-export, .btn-reload, .btn-columns {
  height: 38px;
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-export {
  padding: 0 15px;
}

.btn-reload, .btn-columns {
  width: 38px;
}
</style>