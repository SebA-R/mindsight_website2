<script setup lang="ts">
  const callToActions = [
    {
      img: 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop',
      action: 'Learn More',
      to: '/about',
    },
    {
      img: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      action: 'Volunteer',
      to: '/volunteer',
    },
    {
      img: 'https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
      action: 'Donate',
      to: '/donate',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <h6 class="text-primary-600 dark:text-primary-200 text-center uppercase">
        Get Involved
      </h6>
      <h3 class="capitalize mt-3 text-center">
        Small gesture for a big impact
      </h3>
      <p class="mt-4 text-center">
        Bridging Dementia Care Inequities. Merging Innovation and Community Service.
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard
        v-for="(callToAction, index) in callToActions"
        :key="index"
        :action="callToAction.action"
        :img="callToAction.img"
        :to="callToAction.to"
      />
    </div>
  </section>
</template>
<style scoped></style>
