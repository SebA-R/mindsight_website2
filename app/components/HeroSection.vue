<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroCaption = 'Adopt A Volunteer'
  const heroTitle = 'Thousands of homeless dogs, one act of kindness'
  const heroDescription =
    'Find your new furry friend today! We have a wide variety of lovable volunteers available for adoption. Come visit us and take home your new best friend!'
</script>
<template>
  <section class="container mx-auto pb-12 px-4">
    <BackgroundImageWrapper :image-url="heroImageUrl" class="rounded-3xl">
      <div class>
        <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
          <div
            class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
          >
            <div class="px-6 py-6 rounded-2xl w-full md:w-8/12 xl:w-6/12 bg-black bg-opacity-70">
              <h4
                class="font-bold font-serif mb-1 text-primary-600 dark:text-primary-200 uppercase"
              >
                Become A Volunteer!
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                Millions Diagnosed Late, Countless Care Inequities, One Impactful Solution
              </h1>
              <p class="font-thin mb-6 text-gray-300">
                Join a driven 100+ member community scaling culturally sensitive cognitive therapies and screenings to stave off neurodegeneration equitably. Make a lasting difference in the lives of ethnically-diverse dementia patients.
              </p>
              <BaseButton
                size="xl"
                label="Learn More"
                to="/about"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">Learn More</div>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
