// src/features/product-filters/api/filters-api.ts
import { axiosInstances } from '@/shared/api/instances/index'

import { ApiRoutes } from '@/shared/api/const/apiRoutes'

import type { IIngredient } from '@/features/product-filters/types/ingredient-types'
import type { FilterOption } from '@/features/product-filters/types/filter-types'

export const filtersApi = {
	getIngredients: async (): Promise<FilterOption[]> => {
		const { data } = await axiosInstances.get<IIngredient[]>(
			ApiRoutes.INGREDIENTS
		)

		return data.map(item => ({
			id: item.id.toString(),
			name: item.name,
			type: 'ingredient',
		}))
	},
}
