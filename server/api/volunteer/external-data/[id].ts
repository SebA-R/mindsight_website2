import type { Volunteer, Volunteers } from '~~/types/volunteers'
import { allVolunteers as volunteers } from './index'
volunteers as Volunteers

const apiBaseUrl ='https://my-json-server.typicode.com/SebA-R/mindsight_website2'

export default defineEventHandler(async (event): Promise<Volunteer> => {
  const { id } = event.context.params

  let volunteer: Maybe<Volunteer>

  if (volunteers?.length) {
    volunteer = volunteers.find((volunteer) => +volunteer.id === +id)
  }

  if (!volunteer) {
    volunteer = await $fetch(`${apiBaseUrl}/volunteers/${id}`)

    if (!volunteer) {
      throw createError({
        statusCode: 404,
        message: 'Volunteer profile not fetched.',
      })
    }
  }

  return volunteer
})
