// src/features/product-categories/ui/categories-container.tsx
'use client'

import { FC } from 'react'
import { Categories } from './categories'
import { useCategories } from '../model/use-categories'

interface CategoriesContainerProps {
	className?: string
}

export const CategoriesContainer: FC<CategoriesContainerProps> = ({
	className,
}) => {
	const { categories, activeCategoryId, handleCategoryChange, isLoading } =
		useCategories()

	return (
		<Categories
			className={className}
			categories={categories}
			activeCategoryId={activeCategoryId}
			onCategoryChange={handleCategoryChange}
			isLoading={isLoading}
		/>
	)
}
