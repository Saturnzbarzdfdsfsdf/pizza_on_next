// src/features/product-filters/model/filter-types.ts
export interface FilterOption {
	id: string
	name: string
	type: 'ingredient' | 'category' | 'typesDough'
	count?: number
}

export interface FilterState {
	priceRange: [number, number]
	selectedIngredients: Set<string>
	selectedTypesDough: Set<string>
	selectedSizesPizza: Set<string>
}

export interface PriceFilter {
	min: number
	max: number
	current: [number, number]
}
