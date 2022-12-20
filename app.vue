<template>
  <div :class="{ dark: darkMode }">
    <div class="min-h-full">
      <div
        class="px mx-auto grid grid-cols-12 sm:px-6 lg:max-w-7xl lg:gap-5 lg:px-8"
      >
        <!-- left sidebar -->
        <div class="px">1234</div>
        <!-- main content -->
        <!-- right sidebar -->
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(true);
</script>
