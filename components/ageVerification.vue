<template>
    <Dialog
      v-model:visible="visible"
      :modal="true"
      :closable="false"
      :dismissableMask="false"
      :style="{ width: '30vw' }"
      class="age-verification-modal"
    >
      <template #header>
        <h2 class="text-2xl font-bold text-center mb-2">Age Verification</h2>
      </template>
      <div class="flex flex-column align-items-center">
        <img src="/images/age-verification.png" alt="Age Verification" class="w-full mb-4 rounded-lg" />
        <p class="text-center mb-4">
          You must be 18 years or older to enter this site. Please confirm your age.
        </p>
      </div>
      <template #footer>
        <div class="flex justify-content-center">
          <Button
            label="I am 18 or older"
            icon="pi pi-check"
            @click="confirmAge"
            class="p-button-success mr-2"
          />
          <Button
            label="I am under 18"
            icon="pi pi-times"
            @click="rejectAge"
            class="p-button-danger"
          />
        </div>
      </template>
    </Dialog>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const visible = ref(true);
  const router = useRouter();
  
  const confirmAge = () => {
    visible.value = false;
    localStorage.setItem('ageVerified', 'true');
  };
  
  const rejectAge = () => {
    router.push('/restricted');
  };
  </script>
  
  <style scoped>
  .age-verification-modal {
    border-radius: 1rem;
    overflow: hidden;
  }
  
  .age-verification-modal :deep(.p-dialog-content) {
    padding: 2rem;
  }
  
  .age-verification-modal :deep(.p-dialog-header) {
    background-color: #0958A9;
    color: white;
  }
  
  .age-verification-modal :deep(.p-dialog-footer) {
    padding: 1rem 2rem 2rem;
  }
  
  @media (max-width: 768px) {
    .age-verification-modal {
      width: 90vw !important;
    }
  }
  </style>