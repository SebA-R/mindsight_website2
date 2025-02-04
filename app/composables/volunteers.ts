export const useVolunteers = async () => {
  // const { data, error } = await useFetch('/api/volunteer/external-data')
  const { data, error } = await useFetch('/api/volunteer/local-data')

  /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
  // const { data, error } = await useAsyncData('volunteers', async () => {
  //   return await $fetch('/api/store/local-data')
  // })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch volunteer profiles.`,
    })
  }

  const { allVolunteers, someVolunteers } = data.value

  return { allVolunteers, someVolunteers }
}
