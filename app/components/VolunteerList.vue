<script setup lang="ts">
  const { allVolunteers: volunteers } = await useVolunteers()
</script>
<template>
  <div>
    <div class="container mx-auto px-4 relative">
      <div class="flex flex-wrap -mx-4 justify-center">
        <VolunteerCard v-for="(volunteer, index) in volunteers" v-bind="volunteer" :key="index" class />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
