'use client'

import { FC, useState, useRef } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Api } from '../../services/api-client'

import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import { useClickAway, useDebounce } from 'react-use'
import { Product } from '@/generated/prisma'

interface Props {
	className?: string
}

const SearchInput: FC<Props> = ({ className }) => {
	const ref = useRef<HTMLDivElement>(null)
	
  const [focused, setFocused] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [products, setProducts] = useState<Product[]>([])

  const onClickItem = () => {
    setFocused(false)
    setSearchQuery('')
    setProducts([])
  }
  

	useClickAway(ref, () => {
		setFocused(false)
	})

	useDebounce(
		() => {
			Api.products.search(searchQuery).then(items => {
				setProducts(items)
			})
		},
		250,
		[searchQuery]
	)

	return (
		<>
			{focused && (
				<div className='fixed top-0 left-0 w-full h-full bg-black/50 z-50'></div>
			)}

			<div
				ref={ref}
				className={cn(
					'flex rounded-2xl flex-1 justify-between relative h-11 z-50',
					className
				)}
			>
				<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
				<input
					className='rounded-2xl outline-none w-full bg-gray-50 pl-11'
					type='text'
					placeholder='Найти пиццу...'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>

				{products.length > 0 && (
					<div
						className={cn(
							'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-50',
							focused && 'visible opacity-100 top-12'
						)}
					>
						{products.map(product => (
							<Link
								href={`/product/${product.id}`}
								onClick={onClickItem}
								key={product.id}
								className='flex items-center gap-8 px-2 py-2 hover:bg-primary/10'
							>
								<Image
									className='rounded-sm'
									height={48}
									width={48}
									src={product.imageUrl}
									alt={product.name}
								/>
								<span>{product.name}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default SearchInput
