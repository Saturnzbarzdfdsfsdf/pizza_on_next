// src/features/product-filters/ui/filters-sidebar.tsx
'use client'

import { Title } from '@/shared/ui/title'
import { Input, RangeSlider } from '@/shared/ui/components/index'

import { FilterCheckbox } from './filter-checkbox'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { useProductFilters } from '../model/use-product-filters'

interface FiltersSidebarProps {
	className?: string
}

export const FiltersSidebar = ({ className }: FiltersSidebarProps) => {
	const {
		filters,
		ingredients,
		loading,
		toggleIngredient,
		toggleAttribute,
		updatePriceRange,
		hasActiveFilters,
	} = useProductFilters()

	const attributeItems = [
		{ value: '1', text: 'Можно собирать' },
		{ value: '2', text: 'Новинки' },
	]

	const ingredientItems = ingredients.map(item => ({
		value: item.id,
		text: item.name,
	}))

	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			{/* Атрибуты */}
			<div className='flex flex-col gap-4 mb-6'>
				{attributeItems.map(item => (
					<FilterCheckbox
						key={item.value}
						text={item.text}
						value={item.value}
						checked={filters.selectedAttributes.has(item.value)}
						onCheckedChange={() => toggleAttribute(item.value)}
					/>
				))}
			</div>

			{/* Фильтр цен */}
			<div className='mb-6 border-y border-neutral-100 py-6'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						value={filters.priceRange[0]}
						onChange={e =>
							updatePriceRange([+e.target.value, filters.priceRange[1]])
						}
						min={0}
						max={5000}
						placeholder='0'
					/>
					<Input
						type='number'
						value={filters.priceRange[1]}
						onChange={e =>
							updatePriceRange([filters.priceRange[0], +e.target.value])
						}
						min={0}
						max={5000}
						placeholder='5000'
					/>
				</div>
				<RangeSlider
					min={0}
					max={5000}
					step={10}
					value={filters.priceRange}
					onValueChange={updatePriceRange}
				/>
			</div>

			{/* Фильтр по ингредиентам */}
			<CheckboxFiltersGroup
				title='Ингредиенты'
				limit={6}
				items={ingredientItems}
				loading={loading}
				selectedId={filters.selectedIngredients}
				onClickCheckbox={toggleIngredient}
			/>
		</div>
	)
}
