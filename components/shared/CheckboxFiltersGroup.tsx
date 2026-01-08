'use client'

import React from 'react'

import { Input } from '../ui/input'

import { FilterCheckboxProps } from './FilterCheckbox'
import { FilterCheckbox } from './index'
import { Skeleton } from '../ui'

type Item = FilterCheckboxProps

interface Props {
	title: string
	items: Item[]
	defaultItems?: Item[]
	limit?: number
	searchInputPlaceholder?: string
	className?: string
	loading: boolean
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	selectedId?: Set<string>
}

const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	loading,
	onClickCheckbox,
	selectedId,
	defaultValue,
}) => {
	const [showAll, setShowAll] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')

	const filteredItems = items.filter(item =>
		item.text.toLowerCase().includes(searchValue.toLowerCase())
	)

	if (loading) {
		return (
			<div>
				<p className='font-bold mb-3'>{title}</p>

				{...Array(limit)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className='h-6 mb-4 rounded-3xl' />
					))}
				<Skeleton className='w-28 h-6 mb-4 rounded-3xl' />
			</div>
		)
	}

	const sortedCheckboxes = showAll
		? filteredItems
		: (defaultItems || filteredItems).slice(0, limit)

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{sortedCheckboxes.map((item, i) => (
					<FilterCheckbox
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						checked={selectedId?.has(item.value)}
						key={i}
						// key={String(item.value)}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary mt-3'
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}

export default CheckboxFiltersGroup
