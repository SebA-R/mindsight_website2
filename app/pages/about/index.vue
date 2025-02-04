<script setup>
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'About Us',
    description: 'Our Story: How MindSight started, the founders’ journey, and evolution of the initiative.',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div
    class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12">
        <h6 class="uppercase">Our Founders</h6>
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <VolunteerList />
      </div>
    </div>
    <h6 class="uppercase text-center mt-12 text-primary-900 dark:text-primary-100">
      Our Story
    </h6>
    <div class="container mx-auto px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-8">
        <p class="p-8 rounded-xl text-center text-primary-700 dark:text-primary-300 leading-relaxed max-w-4xl bg-neutral-50 dark:bg-neutral-900">
          MindSight started from concerns for the seniors in the community suffering from cognitive decline. Upon investigation into innovative new research for cognitive care by our founders, MindSight was created to actualize this research. Since the inception of the idea in June 2024, the program has gone far, now encompassing 5 care homes and 70 seniors in the GTA. Starting in October, upon the launch of the volunteering program, MindSight has accumulated over 30 volunteer members in two months. In the future, MindSIght will strive to expand its programs and reduce stigma of cognitive decline in the community
        </p>
      </div>
    </div>
<h6 class="uppercase text-center mt-12 text-primary-900 dark:text-primary-100">
      Our Program
    </h6>
    <div class="container mx-auto px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-8">
        <p class="p-8 rounded-xl text-center text-primary-700 dark:text-primary-300 leading-relaxed max-w-4xl bg-neutral-50 dark:bg-neutral-900">
          MindSight’s program helps seniors with cognitive decline with cognitive therapy. The cognitive therapy consists of a variety of scientifically proven exercises. These exercises include speech exercises, puzzle exercises and video interactions. Through evidence based exercises, MindSight not only reduces the issue of senior loneliness that is so prevalent in care homes but also prevents further cognitive decline. Through the MindSight program, volunteers are able to design exercises and get to know the senior as they make a real impact in the community. 
        </p>
      </div>
    </div>
    <h6 class="uppercase text-center mt-12 text-primary-900 dark:text-primary-100">
      Volunteer Duties
    </h6>
    <div class="container mx-auto px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-8">
        <p class="p-8 rounded-xl text-center text-primary-700 dark:text-primary-300 leading-relaxed max-w-4xl bg-neutral-50 dark:bg-neutral-900">
          Volunteers at MindSight are tasked to work at their own pace, submitting material when they have the time. With flexible scheduling and flexible work quantity, MindSight is a great place to help the senior community while not being highly demanding. Volunteers create cognitive therapy exercises for seniors to perform, some examples of this includes: impromptu speaking, word exercises, memory exercises, puzzles and other fun activities. Volunteers may also choose to record  a video of themselves performing talent to engage seniors’ cognitive abilities to remember different volunteers. This video program also provides culturally sensitive care. Volunteers record in a commonly shared language or discussing a commonly shared culture with the senior. This not only engages the senior cognitively but also provides a sense of belonging. 
        </p>
      </div>
    </div>
    <h6 class="uppercase text-center mt-12 text-primary-900 dark:text-primary-100">
       Long Term Care Homes and Partners
    </h6>
    <div class="container mx-auto px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-8">
          <ul class="p-8 rounded-xl text-center text-primary-700 dark:text-primary-300 leading-relaxed max-w-4xl bg-neutral-50 dark:bg-neutral-900">
            <li><NuxtLink to="https://www.toronto.ca/community-people/housing-shelter/rental-housing-tenant-information/finding-housing/long-term-care-homes/long-term-care-home-locations/castleview-wychwood-towers/" target="_blank" class="text-blue-500 hover:underline">Whychwood Towers</NuxtLink></li>
            <li><NuxtLink to="https://www.bangladeshcentre.ca/" target="_blank" class="text-blue-500 hover:underline">Bangladesh Center & Community Services (BCCS)</NuxtLink></li>
            <li><NuxtLink to="https://www.circleofcare.com/" target="_blank" class="text-blue-500 hover:underline">Circle of care</NuxtLink></li>
            <li><NuxtLink to="https://www.toronto.ca/community-people/housing-shelter/rental-housing-tenant-information/finding-housing/long-term-care-homes/long-term-care-home-locations/carefree-lodge/" target="_blank" class="text-blue-500 hover:underline">Carefree lodge</NuxtLink></li>
            <li><NuxtLink to="https://www.toronto.ca/community-people/housing-shelter/rental-housing-tenant-information/finding-housing/long-term-care-homes/long-term-care-home-locations/cummer-lodge/" target="_blank" class="text-blue-500 hover:underline">Cummer lodge</NuxtLink></li>
            </ul>
      </div>
    </div>
  </div>
</template>
