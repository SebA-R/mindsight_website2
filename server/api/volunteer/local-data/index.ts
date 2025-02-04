import type { Volunteers } from '~~/types/volunteers'
import { volunteers as allVolunteers } from '~~/db.json'

allVolunteers as Volunteers

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
  const someVolunteers: Volunteers = fractionOfTheVolunteersArray(allVolunteers, 0.5)

  return {
    allVolunteers,
    someVolunteers,
  }
})
