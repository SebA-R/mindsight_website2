import type { Volunteers } from '~~/types/volunteers'

export const allVolunteers: Volunteers = []
export const someVolunteers: Volunteers = []

const apiBaseUrl =
  'https://my-json-server.typicode.com/SebA-R/mindsight_website2/'

const fractionOfTheVolunteersArray = (volunteers, fraction) => {
  return volunteers
    .map((volunteer) => ({
      ...volunteer,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, Math.floor(volunteers.length * fraction))
}

export default defineEventHandler(async (/*event*/) => {
  // If volunteers exists, don't refetch them
  // Remove this if we want to always fetch refresh data from the source

  if (allVolunteers.length) {
    return {
      allVolunteers,
      someVolunteers,
    }
  }

  const _allVolunteers: [] = await $fetch(`${apiBaseUrl}/volunteers`)
  allVolunteers.push(..._allVolunteers)

  if (!allVolunteers) {
    throw createError({
      statusCode: 404,
      message: 'Volunteer profiles not fetched.',
    })
  }

  const _someVolunteers: [] = fractionOfTheVolunteersArray(allVolunteers, 0.5)
  someVolunteers.push(..._someVolunteers)

  return {
    allVolunteers,
    someVolunteers,
  }
})
