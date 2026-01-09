// src/features/product-categories/ui/categories.tsx
'use client'

import { FC } from 'react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

import { ICategory } from '../model/category-store'

interface CategoriesProps {
	className?: string
	categories: ICategory[]
	activeCategoryId?: number
	onCategoryChange?: (categoryId: number) => void
	isLoading?: boolean
}

export const Categories: FC<CategoriesProps> = ({
	className,
	categories,
	activeCategoryId,
	onCategoryChange,
	isLoading = false,
}) => {
	if (isLoading) {
		return (
			<div
				className={cn(
					'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl',
					className
				)}
			>
				{[...Array(5)].map((_, i) => (
					<div
						key={i}
						className='h-11 w-24 rounded-2xl bg-gray-200 animate-pulse'
					/>
				))}
			</div>
		)
	}

	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{categories.map(category => (
				<Link
					href={`/#${category.title}`}
					key={category.id}
					onClick={() => onCategoryChange?.(category.id)}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5 transition-all',
						'hover:bg-white/50 hover:shadow-sm',
						activeCategoryId === category.id
							? 'bg-white shadow-md shadow-gray-200 text-primary'
							: 'text-gray-700'
					)}
				>
					{category.title}
				</Link>
			))}
		</div>
	)
}
