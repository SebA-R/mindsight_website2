<script setup lang="ts">
  //...
</script>
<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3">
          <NuxtLink class="-ml-6" to="/">
            <div to="/" class="font-serif inline-flex items-center text-3xl">
              <NuxtImg
                  src="public/favicon.ico"
                  style="width: 14rem" /> 
              
            </div>
          </NuxtLink>
          <p class="mt-2 text-center w-full lg:text-left">
            Join a community dedicated to empowering seniors and caregivers through innovative programs and support.
          </p>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <!-- <NuxtLink href="https://www.facebook.com/vuedesigner" aria-label="facebook" external target="_blank">
                <BaseIcon name="i-logos-facebook" class="text-2xl" width="28px" />
              </NuxtLink>
              <NuxtLink href="https://twitter.com/vuedesigner" aria-label="twitter" external target="_blank">
                <BaseIcon name="i-logos-twitter" class="text-2xl" width="28px" />
              </NuxtLink> -->
              <NuxtLink href="https://www.instagram.com/mindsightofficial" aria-label="instagram" external target="_blank">
                <BaseIcon name="i-logos-instagram-icon" class="text-2xl" width="28px" />
              </NuxtLink>
              <NuxtLink href="https://www.youtube.com/@Mind-Sight-official" aria-label="youtube" external
                target="_blank">
                <BaseIcon name="i-logos-youtube-icon" class="text-2xl" width="28px" />
              </NuxtLink>
            </div>
          </div>
          <div class="my-6 text-left">
            <NuxtLink to="/">+1 647 567 8247</NuxtLink>
            <br />
            <NuxtLink to="/">+1 647 765 5756</NuxtLink>
            <br /><br />
            <NuxtLink to="/">sohamchakraborty03@gmail.com</NuxtLink>
            <br />
            <NuxtLink to="/">jackqiuzc@gmail.com</NuxtLink>
            
            
          </div>
        </div>
        
        <div class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Links
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink to="/about" class="hover:text-primary-600 dark:text-primary-200">About Us</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/donate" class="hover:text-primary-600 dark:text-primary-200">Donate</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/articles" class="hover:text-primary-600 dark:text-primary-200">Articles</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/blog" class="hover:text-primary-600 dark:text-primary-200">News & Events</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/volunteer" class="hover:text-primary-600 dark:text-primary-200">Volunteer</NuxtLink>
            </li>
          </ul>
        </div>
        
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
              &copy; {{ new Date().getFullYear() }}. All Rights Reserved - MindSight
          </p>

        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
