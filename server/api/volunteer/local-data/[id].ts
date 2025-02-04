import type { Volunteer, Volunteers } from '~~/types/volunteers'
import { volunteers } from '~~/db.json'

volunteers as Volunteers

export default defineEventHandler(async (event): Promise<Volunteer> => {
  const { id } = event.context.params

  const volunteer: Maybe<Volunteer> = volunteers.find((volunteer) => +volunteer.id === +id)
  if (!volunteer) {
    throw createError({
      statusCode: 404,
      message: 'Volunteer profile not found.',
    })
  }

  return volunteer
})
