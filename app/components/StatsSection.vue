<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'StatsSection',
  // 	},
  // })
</script>
<template>
  <section>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-2/5">
          <!-- <img
            src="https://images.unsplash.com/photo-1561438774-1790fe271b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE2ODMyOTgzOTc&ixlib=rb-4.0.3&q=80&w=1080"
            class="mb-6 rounded-3xl w-full"
            alt="Stats"
          /> -->
          <NuxtImg src="https://images.pexels.com/photos/7330130/pexels-photo-7330130.jpeg"
            class="mb-6 rounded-3xl w-full" alt="Stats" />
        </div>
        <div class="lg:w-6/12 mx-auto p-4 w-full">
          <h6 class="font-bold mb-2 text-primary-600 dark:text-primary-200 uppercase">
            Our Numbers
          </h6>
          <h3 class="capitalize mb-6">Impact we make</h3>
          <p>
            Caregiver surveys report short-term memory and interaction ability improvement in <u><b style="font-size: 1.2rem;">40%</b> <b>of seniors.</b></u>
          </p>
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">70+</h2>
              <p>Seniors Helped</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">50+</h2>
              <p>Volunteers</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">20+</h2>
              <p>Activities</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">5+</h2>
              <p>Languages Spoken</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
