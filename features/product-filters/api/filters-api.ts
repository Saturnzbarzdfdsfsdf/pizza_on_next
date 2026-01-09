// src/features/product-filters/api/filters-api.ts
import { axiosInstances } from '@/shared/api/instances/index'

import { ApiRoutes } from '@/shared/api/const/apiRoutes'

export const filtersApi = {
	getIngredients: async () => {
		const { data } = await axiosInstances.get(ApiRoutes.INGREDIENTS)
		return data.map((item: any) => ({
			id: item.id.toString(),
			name: item.name,
			type: 'ingredient' as const,
		}))
	},

	getAttributes: async () => {
		// Атрибуты типа "Новинки", "Можно собирать"
		return [
			{ id: '1', name: 'Можно собирать', type: 'attribute' as const },
			{ id: '2', name: 'Новинки', type: 'attribute' as const },
		]
	},
}
