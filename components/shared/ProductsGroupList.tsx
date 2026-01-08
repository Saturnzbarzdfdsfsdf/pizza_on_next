'use client'

import { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'

import { cn } from '@/lib/utils'
import { ProductCard, Title } from './index'
import { useCategoryStore } from '@/store/category'

interface Props {
	title: string
	items: any[]
	categoryId: number
	className?: string
	listClassName?: string
}

const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	className,
	listClassName,
}) => {
	// Zustand store to set active category ID
	const setActiveCategoryId = useCategoryStore(state => state.setCategoryId)
	
	const intersectionRef = useRef<HTMLDivElement>(null)

	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [intersection, categoryId])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items.map((item, i) => (
					<ProductCard
						key={item.id}
						id={item.id} // Используй реальные данные из items
						name={item.name || 'Маргарита'}
						imageUrl={
							item.imageUrl ||
							'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp'
						}
						price={item.price || 390}
						count={i % 2}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductsGroupList
