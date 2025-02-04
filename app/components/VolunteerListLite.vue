<script setup lang="ts">
  const { someVolunteers: volunteers } = await useVolunteers()
</script>
<template>
  <div class="bg-primary-100 dark:bg-primary-700">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div class="px-4 text-center w-full">
            <h6 class="text-primary-100 dark:text-primary-700 uppercase">
              Become A Volunteer
            </h6>
            <h3 class="capitalize">Small Gesture For A Big Impact</h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor.
            </p>
          </div>
          <div class="px-4 text-center w-full">
            <BaseButton size="xl" to="/about" color="secondary"
              ><span>Get Involved ></span>
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <VolunteerCard v-for="(volunteer, index) in volunteers" :key="index" v-bind="volunteer" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
