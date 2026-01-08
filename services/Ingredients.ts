import { Ingredient } from '@/generated/prisma'
import { axiosInstances } from './instans'
import { ApiRoutes } from './constants'

export const getAll = async (): Promise<Ingredient[]> => {
	const { data } = await axiosInstances.get<Ingredient[]>(ApiRoutes.INGREDIENTS)
	return data
}
