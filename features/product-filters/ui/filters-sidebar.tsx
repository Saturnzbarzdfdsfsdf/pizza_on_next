// src/features/product-filters/ui/filters-sidebar.tsx
'use client'

import { Title } from '@/shared/ui/title'
import { Input, RangeSlider } from '@/shared/ui/components/index'

// import { FilterCheckbox } from '@/features/product-filters/ui/filter-checkbox'
import { CheckboxFiltersGroup } from '@/features/product-filters/ui/checkbox-filters-group'
import { useProductFilters } from '@/features/product-filters/hooks/use-product-filters'
import { useFiltersIngredients } from '@/features/product-filters/hooks/use-filters-ingredients'



interface FiltersSidebarProps {
	className?: string
}

export const FiltersSidebar = ({ className }: FiltersSidebarProps) => {

	const {
		filters,
		loading,
		toggleIngredient,
		toggleTypesDough,
		toggleSizes,
		updatePriceRange,
		handlePriceChange,
	} = useProductFilters()

	const { ingredients } = useFiltersIngredients()


	const typesDough = [
		{ value: '1', text: 'Классическое' },
		{ value: '2', text: 'Тонкое' },
	]

	const sizesPizzas = [
		{ text: '20 cm', value: '20' },
		{ text: '25 cm', value: '25' },
		{ text: '30 cm', value: '30' },
	]

	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			{/* Чекбоксы типа пиццы */}
			<div className='flex flex-col gap-4 mb-6'>
				<CheckboxFiltersGroup
					title='Тип теста'
					items={typesDough}
					getValue={item => item.value}
					getLabel={item => item.text}
					selectedId={filters.selectedTypesDough}
					onClickCheckbox={toggleTypesDough}
					loading={false}
				/>
			</div>

			{/* Чекбоксы размеров пиццы */}
			<div className='flex flex-col gap-4 mb-6'>
				<CheckboxFiltersGroup
					title='Размеры'
					items={sizesPizzas}
					getValue={item => item.value}
					getLabel={item => item.text}
					selectedId={filters.selectedSizesPizza}
					onClickCheckbox={toggleSizes}
					loading={false}
				/>
			</div>

			{/* Фильтр цен */}
			<div className='mb-6 border-y border-neutral-100 py-6'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						value={filters.priceRange[0]}
						onChange={e => handlePriceChange(0, +e.target.value)}
						min={0}
						max={5000}
						placeholder='0'
					/>
					<Input
						type='number'
						value={filters.priceRange[1]}
						onChange={e => handlePriceChange(1, +e.target.value)}
						min={0}
						max={5000}
						placeholder='5000'
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={filters.priceRange}
					onValueChange={updatePriceRange}
				/>
			</div>
			{/* Фильтр по ингредиентам */}
			<CheckboxFiltersGroup
				title='Ингредиенты'
				name='ingredients'
				limit={6}
				items={ingredients} // ← Оригинальный массив
				getValue={item => item.id.toString()} // ← Функция для value
				getLabel={item => item.name} // ← Функция для label
				loading={loading}
				selectedId={filters.selectedIngredients}
				onClickCheckbox={toggleIngredient}
			/>
		</div>
	)
}
