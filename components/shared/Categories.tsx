'use client'

import { FC } from 'react'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import Link from 'next/link'

interface ICategoriesProps {
	className?: string
}

interface Category {
	title: string
	slug: string
	id: number
}

const categories: Category[] = [
	{ title: 'Пиццы', slug: 'pizzas', id: 1 },
	{ title: 'Комбо', slug: 'combo', id: 2 },
	{ title: 'Закуски', slug: 'zakuski', id: 3 },
	{ title: 'Коктейли', slug: 'cocktails', id: 4 },
	{ title: 'Кофе', slug: 'coffee', id: 5 },
	{ title: 'Напитки', slug: 'drinks', id: 6 },
	{ title: 'Десерты', slug: 'desserts', id: 7 },
]

const Categories: FC<ICategoriesProps> = ({ className }) => {
	
	const categoryActiveId = useCategoryStore(state => state.activeId)

	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{categories.map((cat, i) => (
				<Link
					key={cat.id}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						categoryActiveId === cat.id &&
							'bg-white shadow-md shadow-gray-200 text-primary'
					)}
					href={`/#${cat.title}`}
				>
					{cat.title}
				</Link>
			))}
		</div>
	)
}

export default Categories
