import type { ImageOptimized } from '~~/types/image'

export type Volunteer = {
  id: number
  name: string
  school: string
  description: string
  blurb: string
  image: string
  imageOptimized?: ImageOptimized
}

export type Volunteers = Volunteer[]
