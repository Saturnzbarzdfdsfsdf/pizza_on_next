// src/features/search-products/ui/product-search-input.tsx
'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useClickAway } from 'react-use'

import { cn } from '@/shared/lib/utils'
import { BaseSearchInput } from './BaseProductSearch'
import { useProductSearch } from '../model/useProductSearch'
import { SearchOverlay } from './SearchOverlay'

const ProductSearchInput = ({ className }: { className?: string }) => {
	const ref = useRef<HTMLDivElement>(null)
	
	const {
		query,
		setQuery,
		products,
		isOpen,
		openSearch,
		closeSearch,
		resetSearch,
	} = useProductSearch()

	useClickAway(ref, closeSearch)

	const handleItemClick = () => {
		resetSearch()
	}

	return (
		<>
			<SearchOverlay isVisible={isOpen} />

			<div ref={ref} className={cn('relative z-50', className)}>
				<BaseSearchInput
					value={query}
					onChange={setQuery}
					onFocus={openSearch}
					placeholder='Найти пиццу...'
					className='w-full'
				/>

				{isOpen && products.length > 0 && (
					<div className='absolute w-full mt-2 bg-white rounded-xl shadow-lg border z-50 max-h-96 overflow-y-auto'>
						{products.map(product => (
							<Link
								href={`/product/${product.id}`}
								onClick={handleItemClick}
								key={product.id}
								className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b last:border-b-0 transition-colors'
							>
								<div className='shrink-0'>
									<Image
										src={product.imageUrl}
										alt={product.name}
										width={48}
										height={48}
										className='rounded-lg object-cover'
									/>
								</div>
								<div className='flex-1 min-w-0'>
									<p className='font-medium text-gray-900 truncate'>
										{product.name}
									</p>
									{/* <p className='text-sm text-gray-500'>{product.category}</p> */}
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default ProductSearchInput
