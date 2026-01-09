// src/entities/product/ui/product-card.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Title } from '@/shared/ui/title'
import { Button } from '@/shared/ui/components/index'
import { Plus } from 'lucide-react'

interface ProductCardProps {
	id: number
	name: string
	price: number
	imageUrl: string
	description?: string
	className?: string
	count?: number // количество в корзине
}

export const ProductCard: React.FC<ProductCardProps> = ({
	id,
	name,
	price,
	imageUrl,
	description = 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
	className,
	count,
}) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 bg-secondary rounded-lg h-65'>
					<Image
						width={215}
						height={215}
						src={imageUrl}
						alt={name}
						className='object-contain'
					/>
				</div>
			</Link>

			<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

			<p className='text-sm text-gray-400 line-clamp-2'>{description}</p>

			<div className='flex justify-between items-center mt-4'>
				<span className='text-[20px]'>
					от <b>{price} ₽</b>
				</span>

				{count && count > 0 ? (
					// Здесь будет компонент CountButton из features/cart
					<div>Count: {count}</div>
				) : (
					<Button variant='secondary' size='sm'>
						<Plus size={20} className='mr-1' />
						Добавить
					</Button>
				)}
			</div>
		</div>
	)
}
