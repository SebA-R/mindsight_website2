<template>
  <div class="container mx-auto px-4 py-12 relative">
    <div class="-mx-4 flex flex-wrap items-center">
      <div class="p-4 w-full lg:w-6/12">
        <NuxtImg
          src="https://images.pexels.com/photos/1642883/pexels-photo-1642883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="rounded-3xl w-full" alt="Our Mission" />
      </div>
      <div class="mx-auto p-4 w-full lg:w-5/12">
        <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase">
          Our Mission
        </h6>
        <h3 class="capitalize mb-2">
          Evidence-based cognitive therapy for seniors
        </h3>
        <p class="mb-6">
          Cognitive Stimulation Therapies are derived from literature and vetted by experts before delivery to clients. They are adapted by multilingual members to different languages.
        </p>
        <BaseButton size="xl" to="/articles"> Learn More </BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
