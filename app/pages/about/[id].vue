<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'About Us',
    description: 'Our Story: How MindSight started, the founders’ journey, and evolution of the initiative.',
    hidden: true,
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const route = useRoute()
  const { id: volunteerId } = route.params

  const { fetchVolunteer } = await useVolunteer(+volunteerId)

  const { id, name, school, description, blurb, image} =
    fetchVolunteer()

  useServerSeoMeta({
    description: () => name || '',
  })

  useHead({
    title: () => name || '',
  })
</script>
<template>
  <div class="py-12">
    <div class="container mx-auto px-4 relative">
      <div class="container mx-auto pl-12 pr-8 pt-4 relative">
        <div class="px-8">
          <div class="flex flex-wrap lg:justify-between">
            <div class="py-4 text-center w-full lg:w-fit">
              <NuxtLink to="/about">
                <BaseButton><span>&lt;- Go Back</span> </BaseButton>
              </NuxtLink>
            </div>
            <div class="text-center w-full lg:w-fit">
              <h3 class="capitalize">{{ name }}</h3>
              <h6 class="uppercase">Volunteer ID: {{ id }}</h6>
            </div>
            <div
              class="flex items-center justify-center py-4 space-x-4 text-center w-full lg:w-fit"
            >
              <BaseIcon
                name="i-material-symbols-mark-email-unread-outline"
                height="28px"
              />
              <BaseIcon name="i-logos-whatsapp-icon" height="28px" />
              <BaseIcon name="i-logos-facebook" height="28px" />
              <BaseIcon name="i-logos-twitter" height="28px" />
            </div>
          </div>
          <div class="flex flex-wrap pt-8 w-full lg:flex-nowrap">
            <div
              class="flex flex-wrap justify-center text-center w-full lg:flex-nowrap lg:text-left"
            >
              <div class="w-full">
                <NuxtImg :src="image" class="rounded-xl w-full" :alt="name" />
              </div>
              <div class="py-8 w-full sm:px-16">
                <ul>
                  <li class="mb-4">
                    <span class="font-semibold">School:</span>
                    <span class="ml-2">{{ school }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Role:</span>
                    <span class="ml-2">{{ description }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Description:</span>
                    <span class="ml-2">{{ blurb }}</span>
                  </li>
                  
                </ul>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
