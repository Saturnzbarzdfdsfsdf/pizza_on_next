// src/features/product-categories/model/category-store.ts
import { create } from 'zustand'

export interface ICategory {
	id: number
	title: string
	slug: string
	productCount?: number
}

interface ICategoryState {
	activeCategoryId: number
	categories: ICategory[]
	setActiveCategoryId: (id: number) => void
	setCategories: (categories: ICategory[]) => void
}

export const useCategoryStore = create<ICategoryState>()(set => ({
	activeCategoryId: 1,
	categories: [],
	setActiveCategoryId: activeCategoryId => set({ activeCategoryId }),
	setCategories: categories => set({ categories }),
}))
