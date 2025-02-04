export const useVolunteer = async (volunteerId: number) => {
  // const { data: volunteer, error } = await useFetch(
  //   `/api/volunteer/external-data/${volunteerId}`,
  // )
  const { data: volunteer, error } = await useFetch(`/api/volunteer/local-data/${volunteerId}`)

  /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
  // const { data, error } = await useAsyncData('volunteer', async () => {
  //   return await $fetch(`/api/store/local-data/${volunteerId}`)
  // })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch volunteer profile for id ${volunteerId}.`,
    })
  }

  const fetchVolunteer = () => {
    // // Optimize any image urls in the data contents
    // const { optimizeImage } = useOptimizeImage()

    // return volunteer.value.image
    //   ? {
    //       ...volunteer.value,
    //       imageOptimized: optimizeImage(volunteer.value.image),
    //     }
    //   : volunteer.value
    return volunteer.value
  }

  return { volunteer, fetchVolunteer }
}
