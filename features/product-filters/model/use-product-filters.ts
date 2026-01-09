// src/features/product-filters/model/use-product-filters.ts
'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { FilterState, FilterOption } from './filter-types'
import { filtersApi } from '../api/filters-api'

export const useProductFilters = () => {
	const searchParams = useSearchParams()

	const [filters, setFilters] = useState<FilterState>({
		priceRange: [0, 5000],
		selectedIngredients: new Set(),
		selectedAttributes: new Set(),
		sortBy: 'default',
	})

	const [ingredients, setIngredients] = useState<FilterOption[]>([])
	const [loading, setLoading] = useState(true)

	// Загрузка ингредиентов
	useEffect(() => {
		const loadIngredients = async () => {
			setLoading(true)
			try {
				const data = await filtersApi.getIngredients()
				setIngredients(data)
			} catch (error) {
				console.error('Failed to load ingredients:', error)
			} finally {
				setLoading(false)
			}
		}

		loadIngredients()
	}, [])

	// Обработчики
	const toggleIngredient = (ingredientId: string) => {
		setFilters(prev => {
			const newSet = new Set(prev.selectedIngredients)
			if (newSet.has(ingredientId)) {
				newSet.delete(ingredientId)
			} else {
				newSet.add(ingredientId)
			}
			return { ...prev, selectedIngredients: newSet }
		})
	}

	const toggleAttribute = (attributeId: string) => {
		setFilters(prev => {
			const newSet = new Set(prev.selectedAttributes)
			if (newSet.has(attributeId)) {
				newSet.delete(attributeId)
			} else {
				newSet.add(attributeId)
			}
			return { ...prev, selectedAttributes: newSet }
		})
	}

	const updatePriceRange = (range: [number, number]) => {
		setFilters(prev => ({ ...prev, priceRange: range }))
	}

	const resetFilters = () => {
		setFilters({
			priceRange: [0, 5000],
			selectedIngredients: new Set(),
			selectedAttributes: new Set(),
			sortBy: 'default',
		})
	}

	// Синхронизация с URL
	useEffect(() => {
		const params = new URLSearchParams(searchParams.toString())

		// Обновляем URL на основе фильтров
		if (filters.selectedIngredients.size > 0) {
			params.set(
				'ingredients',
				Array.from(filters.selectedIngredients).join(',')
			)
		} else {
			params.delete('ingredients')
		}

		// Можно обновить router.push() здесь
	}, [filters, searchParams])

	return {
		filters,
		ingredients,
		loading,
		toggleIngredient,
		toggleAttribute,
		updatePriceRange,
		resetFilters,
		hasActiveFilters:
			filters.selectedIngredients.size > 0 ||
			filters.selectedAttributes.size > 0 ||
			filters.priceRange[0] > 0 ||
			filters.priceRange[1] < 5000,
	}
}
