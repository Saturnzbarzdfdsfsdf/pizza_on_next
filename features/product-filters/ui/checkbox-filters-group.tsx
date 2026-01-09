// src/features/product-filters/ui/checkbox-filters-group.tsx
'use client'

import { useState } from 'react'

import { Input, Skeleton } from '@/shared/ui/components/index'

import { FilterCheckbox } from './filter-checkbox'

interface CheckboxItem {
	value: string
	text: string
	endAdornment?: React.ReactNode
}

interface CheckboxFiltersGroupProps {
	title: string
	items: CheckboxItem[]
	limit?: number
	searchInputPlaceholder?: string
	className?: string
	loading: boolean
	onClickCheckbox?: (id: string) => void
	selectedId?: Set<string>
}

export const CheckboxFiltersGroup = ({
	title,
	items,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	loading,
	onClickCheckbox,
	selectedId,
}: CheckboxFiltersGroupProps) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	if (loading) {
		return (
			<div className={className}>
				<p className='font-bold mb-3'>{title}</p>
				{[...Array(limit)].map((_, index) => (
					<Skeleton key={index} className='h-6 mb-4 rounded-3xl' />
				))}
			</div>
		)
	}

	const filteredItems = (items || []).filter(item =>
		item?.text?.toLowerCase().includes(searchValue.toLowerCase())
	)

	const displayedItems = showAll ? filteredItems : filteredItems.slice(0, limit)

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-4'>
					<Input
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
					/>
				</div>
			)}

			<div className='flex flex-col gap-3 max-h-96 pr-2 overflow-auto'>
				{displayedItems.map(item => (
					<FilterCheckbox
						key={item.value}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						checked={selectedId?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div
					className={showAll ? 'border-t border-neutral-100 mt-4 pt-4' : 'mt-3'}
				>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary hover:text-primary/80 transition-colors'
					>
						{showAll ? 'Скрыть' : `+ Показать все (${items.length})`}
					</button>
				</div>
			)}
		</div>
	)
}
