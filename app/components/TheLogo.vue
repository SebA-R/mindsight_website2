<script setup lang="ts">
  import site from '~~/site'
  const { name, logo } = site
</script>
<template>
  <NuxtLink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <!-- <BaseIcon height="40" class="mt-2" :name="logo" /> -->
    <NuxtImg
                  src="public/favicon.ico"
                  style="width: 14rem" /> 
    
  </NuxtLink>
</template>
<style scoped></style>
