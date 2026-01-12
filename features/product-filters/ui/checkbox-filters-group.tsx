// src/features/product-filters/ui/checkbox-filters-group.tsx
'use client'

import { useState } from 'react'

import { Input, Skeleton } from '@/shared/ui/components/index'

import { FilterCheckbox } from '@/features/product-filters/ui/filter-checkbox'

interface ICheckboxItem {
	itemId: number
	name: string
	value: number
	endAdornment?: React.ReactNode
}

// interface ICheckboxFiltersGroupProps<T extends { id: number | string }> {
// 	title: string
// 	items: T[] // ← Принимаем оригинальные данные
// 	getValue: (item: T) => string // ← Функция для получения value
// 	getLabel: (item: T) => string // ← Функция для получения label
// 	limit?: number
// 	searchInputPlaceholder?: string
// 	className?: string
// 	loading: boolean
// 	onClickCheckbox: (id: string) => void
// 	selectedId?: Set<string>
// 	name?: string
// }

interface ICheckboxFiltersGroupProps<T> {
	title: string
	items: T[]
	getValue: (item: T) => string
	getLabel: (item: T) => string
	onClickCheckbox: (id: string) => void
	selectedId?: Set<string>
	loading: boolean
	limit?: number
	name?: string
	className?: string
	searchInputPlaceholder?: string
}

export function CheckboxFiltersGroup<T>({
	title,
	items,
	getValue,
	getLabel,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	loading,
	onClickCheckbox,
	selectedId,
	name,
}: ICheckboxFiltersGroupProps<T>) {
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
		getLabel(item).toLowerCase().includes(searchValue.toLowerCase())
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
						key={getValue(item)}
						name={name}
						value={getValue(item)}
						text={getLabel(item)}
						checked={selectedId?.has(getValue(item))}
						onCheckedChange={() => onClickCheckbox(getValue(item))}
					/>
				))}
			</div>

			{filteredItems.length > limit && (
				<div
					className={showAll ? 'border-t border-neutral-100 mt-4 pt-4' : 'mt-3'}
				>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary hover:text-primary/80 transition-colors'
					>
						{showAll ? 'Скрыть' : `+ Показать все (${filteredItems.length})`}
					</button>
				</div>
			)}
		</div>
	)
}
