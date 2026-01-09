// src/widgets/catalog/ui/products-group-list.tsx
'use client'

import { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import { cn } from '@/shared/lib/utils'
import { Title } from '@/shared/ui/title'
import { ProductCard } from '@/entities/product/ui/product-card'
import { useCategoryStore } from '@/features/products-categories/model/category-store'

interface Product {
	id: number
	name: string
	price: number
	imageUrl: string
	description?: string
}

interface ProductsGroupListProps {
	title: string
	products: Product[]
	categoryId: number
	className?: string
	listClassName?: string
}

const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
	title,
	products,
	categoryId,
	className,
	listClassName,
}) => {
	const setActiveCategoryId = useCategoryStore(
		state => state.setActiveCategoryId
	)
	const intersectionRef = useRef<Element>(null)
	const intersection = useIntersection(intersectionRef, { threshold: 0.4 })

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [intersection, categoryId, setActiveCategoryId])

	return (
		<section
			className={className}
			id={title}
			ref={intersectionRef as React.RefObject<HTMLDivElement>}
		>
			<Title text={title} size='lg' className='font-extrabold mb-5' />

			<div
				className={cn(
					'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
					listClassName
				)}
			>
				{products.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.price}
						description={product.description}
					/>
				))}
			</div>
		</section>
	)
}

export default ProductsGroupList
