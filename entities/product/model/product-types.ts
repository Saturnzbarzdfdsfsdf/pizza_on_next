// src/entities/product/model/product-types.ts
export interface Product {
	id: number
	name: string
	price: number
	imageUrl: string
	description?: string
	categoryId?: number
	ingredients?: string[]
	weight?: number
	calories?: number
}

