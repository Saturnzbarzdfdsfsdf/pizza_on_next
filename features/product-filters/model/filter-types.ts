// src/features/product-filters/model/filter-types.ts
export interface FilterOption {
	id: string
	name: string
	type: 'ingredient' | 'category' | 'attribute'
	count?: number
}

export interface FilterState {
	priceRange: [number, number]
	selectedIngredients: Set<string>
	selectedAttributes: Set<string> // "Можно собирать", "Новинки"
	sortBy: string
}

export interface PriceFilter {
	min: number
	max: number
	current: [number, number]
}
