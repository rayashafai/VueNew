<template>
  <div class="units-table-container">
    <div class="table-responsive">
      <table class="table table-hover align-middle">
        <thead class="table-header">
          <tr>
            <th width="5%">#</th>
            <th width="20%">الاسم</th>
            <th width="15%">أخر تحديث</th>
            <th width="15%">الوضع الحالي</th>
            <th width="15%">التجاه الرقمي</th>
            <th width="15%">السائق</th>
            <th width="15%"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(unit, index) in units" :key="unit.id">
            <td>
              <div class="d-flex align-items-center gap-2">
                <input 
                  class="form-check-input row-checkbox" 
                  type="checkbox" 
                  :id="'unit-'+unit.id"
                >
                <label class="row-number" :for="'unit-'+unit.id">
                  {{ index + 1 }}
                </label>
              </div>
            </td>
            <td class="unit-name">
              <i class="bi bi-car-front-fill me-2"></i>
              {{ unit.name }}
            </td>
            <td class="last-update">{{ unit.lastUpdate }}</td>
            <td>
              <span :class="['status-badge', statusClass(unit.status)]">
                <i :class="statusIcon(unit.status)" class="me-1"></i>
                {{ unit.status }}
              </span>
            </td>
            <td class="license-number">{{ unit.licenseNumber }}</td>
            <td class="driver-name">{{ unit.expiryDate }}</td>
            <td>
              <div class="dropdown action-dropdown">
                <button 
                  class="btn btn-action dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item view-item" href="#">
                      <i class="bi bi-eye-fill me-2"></i>
                      عرض المزيد
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item edit-item" href="#">
                      <i class="bi bi-pencil-fill me-2"></i>
                      تعديل
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item delete-item" href="#">
                      <i class="bi bi-trash-fill me-2"></i>
                      حذف
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const units = ref([
  {
    id: 1,
    name: 'بيكانتو-6-7026-32',
    lastUpdate: '2025-04-28 08:49:14',
    status: 'تشغيل',
    licenseNumber: '',
    expiryDate: '-'
  },
  {
    id: 2,
    name: 'كونا-7-0757-32',
    lastUpdate: '2025-04-28 08:49:14',
    status: 'تشغيل',
    licenseNumber: '',
    expiryDate: '-'
  },
  {
    id: 3,
    name: 'مرسيدس-412-0367',
    lastUpdate: '2025-04-28 08:49:14',
    status: 'تشغيل',
    licenseNumber: '',
    expiryDate: '-'
  },
  {
    id: 4,
    name: '20363A - Monais S',
    lastUpdate: '2025-04-28 08:49:14',
    status: 'تشغيل',
    licenseNumber: '2025-08-09',
    expiryDate: 'مؤنس محمود محمد احمد'
  },
  {
    id: 5,
    name: '1126 فينو',
    lastUpdate: '2025-04-28 08:49:14',
    status: 'تشغيل',
    licenseNumber: '',
    expiryDate: '-'
  },
  {
    id: 6,
    name: '8630-افيكو شحن صغير',
    lastUpdate: '2025-04-28 08:49:14',
    status: 'تشغيل',
    licenseNumber: '2026-3-22',
    expiryDate: 'عامر/امجد'
  }
]);

const statusClass = (status) => {
  return {
    'تشغيل': 'status-active',
    'عدم تشغيل': 'status-inactive',
    'صيانة': 'status-maintenance'
  }[status] || '';
};

const statusIcon = (status) => {
  return {
    'تشغيل': 'bi-check-circle-fill',
    'عدم تشغيل': 'bi-x-circle-fill',
    'صيانة': 'bi-tools'
  }[status] || 'bi-question-circle';
};
</script>

<style scoped>
.units-table-container {
  direction: rtl;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.table-responsive {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.table {
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

.unit-name {
  color: #0601AE;
  font-weight: 500;
}

.row-checkbox {
  width: 16px;
  height: 16px;
  margin-top: 0;
  cursor: pointer;
}

.row-number {
  font-size: 0.9rem;
  cursor: pointer;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status-active {
  background-color: rgba(40, 167, 69, 0.1);
  color: #28a745;
}

.status-inactive {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

.status-maintenance {
  background-color: rgba(255, 193, 7, 0.1);
  color: #ffc107;
}

.btn-action {
  padding: 6px 12px;
  border: 1px solid #dee2e6;
  background-color: white;
  color: #637483;
}

.btn-action:hover {
  background-color: #f8f9fa;
}

.dropdown-menu {
  min-width: 150px;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  padding: 8px 12px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.view-item {
  color: #0601AE;
}

.edit-item {
  color: #5f3f00;
}

.delete-item {
  color: #c92a2a;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>