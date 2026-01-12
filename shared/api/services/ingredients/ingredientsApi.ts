import { Ingredient } from '@/generated/prisma'

import { axiosInstances } from '@/shared/api/instances/index'
import { ApiRoutes } from '@/shared/api/const/apiRoutes'

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstances.get<Ingredient[]>(ApiRoutes.INGREDIENTS)
  return data
}

