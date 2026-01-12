// src/features/search-products/model/use-product-search.ts
'use client'

import { useState, useCallback } from 'react'
import { useDebounce } from 'react-use'

import { Api } from '@/shared/api/client/apiClient'

import { Product } from '@/generated/prisma'

export const useProductSearch = () => {
	const [query, setQuery] = useState('')
	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const searchProducts = useCallback(async (searchQuery: string) => {
		if (!searchQuery.trim()) {
			setProducts([])
			return
		}

		setIsLoading(true)

		try {
			const results = await Api.products.productSearchApi.search(searchQuery)
			setProducts(results)
		} catch (error) {
			console.error('Search failed:', error)
			setProducts([])
		} finally {
			setIsLoading(false)
		}
	}, [])

	// Используем дебаунс
	useDebounce(
		() => {
			searchProducts(query)
		},
		250,
		[query]
	)

	const resetSearch = useCallback(() => {
		setQuery('')
		setProducts([])
		setIsOpen(false)
	}, [])


	
	const openSearch = useCallback(() => setIsOpen(true), [])
	const closeSearch = useCallback(() => setIsOpen(false), [])

	return {
		query,
		products,
		isLoading,
		isOpen,
		setQuery, 
		openSearch,
		closeSearch,
		resetSearch,
	}
}
