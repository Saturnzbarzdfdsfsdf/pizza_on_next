// src/features/product-filters/model/use-product-filters.ts
'use client'

import { useState, useEffect } from 'react'

import {
	FilterState,
	FilterOption,
} from '@/features/product-filters/types/filter-types'
import { filtersApi } from '@/features/product-filters/api/filters-api'

export const useProductFilters = () => {
	
	const [filters, setFilters] = useState<FilterState>({
		priceRange: [0, 1000],
		selectedIngredients: new Set(),
		selectedTypesDough: new Set(),
		selectedSizesPizza: new Set(),
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

	// utils
	const toggleSetValue = (set: Set<string>, value: string) => {
		const next = new Set(set)

		if (next.has(value)) {
			next.delete(value)
		} else {
			next.add(value)
		}

		return next
	}

	// Обработчики
	const toggleIngredient = (id: string) =>
		setFilters(prev => ({
			...prev,
			selectedIngredients: toggleSetValue(prev.selectedIngredients, id),
		}))

	const toggleTypesDough = (id: string) =>
		setFilters(prev => ({
			...prev,
			selectedTypesDough: toggleSetValue(prev.selectedTypesDough, id),
		}))

	const toggleSizes = (id: string) =>
		setFilters(prev => ({
			...prev,
			selectedSizesPizza: toggleSetValue(prev.selectedSizesPizza, id),
		}))

	const updatePriceRange = (values: number[]) => {
		if (values.length === 2) {
			setFilters(prev => ({
				...prev,
				priceRange: [values[0], values[1]] as [number, number],
			}))
		}
	}

	const handlePriceChange = (index: 0 | 1, value: number) => {
		setFilters(prev => {
			const next = [...prev.priceRange] as [number, number]
			next[index] = value
			return { ...prev, priceRange: next }
		})
	}

	const resetFilters = () => {
		setFilters({
			priceRange: [0, 5000],
			selectedIngredients: new Set(),
			selectedTypesDough: new Set(),
			selectedSizesPizza: new Set(),
		})
	}

	return {
		filters,
		ingredients,
		loading,
		toggleIngredient,
		toggleTypesDough,
		toggleSizes,
		updatePriceRange,
		handlePriceChange,
		resetFilters,
	}
}
