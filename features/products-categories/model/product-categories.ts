// src/features/product-categories/model/use-categories.ts
'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useCategoryStore } from './category-store'

// Мокированные данные (потом заменить на API)
const MOCK_CATEGORIES = [
	{ id: 1, title: 'Пиццы', slug: 'pizzas', productCount: 24 },
	{ id: 2, title: 'Комбо', slug: 'combo', productCount: 12 },
	{ id: 3, title: 'Закуски', slug: 'zakuski', productCount: 18 },
	{ id: 4, title: 'Коктейли', slug: 'cocktails', productCount: 15 },
	{ id: 5, title: 'Кофе', slug: 'coffee', productCount: 8 },
	{ id: 6, title: 'Напитки', slug: 'drinks', productCount: 10 },
	{ id: 7, title: 'Десерты', slug: 'desserts', productCount: 14 },
]

export const useCategories = () => {
	const router = useRouter()
	const pathname = usePathname()

	const { activeCategoryId, categories, setActiveCategoryId, setCategories } =
		useCategoryStore()

	// Загрузка категорий (в реальности - API запрос)
	useEffect(() => {
		// Здесь должен быть API вызов
		setCategories(MOCK_CATEGORIES)
	}, [setCategories])

	// Синхронизация с URL
	const handleCategoryChange = (categoryId: number) => {
		const category = categories.find(c => c.id === categoryId)
		if (!category) return

		setActiveCategoryId(categoryId)

		// Обновляем URL
		const params = new URLSearchParams(window.location.search)
		params.set('category', category.slug)
		router.push(`${pathname}?${params.toString()}`, { scroll: false })
	}

	// Получение активной категории
	const activeCategory = categories.find(c => c.id === activeCategoryId)

	return {
		categories,
		activeCategoryId,
		activeCategory,
		handleCategoryChange,
		isLoading: categories.length === 0,
	}
}
