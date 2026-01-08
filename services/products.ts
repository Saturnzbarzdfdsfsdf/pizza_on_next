import { Product } from '@/generated/prisma'
import { axiosInstances } from './instans'
import { ApiRoutes } from './constants'

export const search = async (query: string): Promise<Product[]> => {
	const { data } = await axiosInstances.get<Product[]>(
		ApiRoutes.SEARCH_PRODUCTS,
		{
			params: {
				query,
			},
		}
	)
	return data
}
