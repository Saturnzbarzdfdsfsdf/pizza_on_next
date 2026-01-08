'use client'
import React from 'react'

import { Input } from '../ui/input'
import { RangeSlider } from '../ui/RangeSlider'
import useFiltersIngredients from '@/hooks/useFiltersIngredients'

import {
	FilterCheckbox,
	Title,
	CheckboxFiltersGroup,
} from '@/components/shared'

interface IFiltersProps {
	className?: string
}

const Filters: React.FC<IFiltersProps> = ({ className }) => {
	const { ingredients, loading, onAddId, selectedId } = useFiltersIngredients()

	const items = ingredients.map(item => ({ value: item.id, text: item.name }))

	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			{/*Верхние чекбоксы */}
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text={'Можно собирать'} value={'1'} />
				<FilterCheckbox text={'Новинки'} value={'2'} />
			</div>

			{/* Фильтр цен */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={30000}
						defaultValue={0}
					/>
					<Input type='number' min={100} max={1700} placeholder='1700' />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			<CheckboxFiltersGroup
				className='mt-5'
				title='Ингредиенты'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selectedId={selectedId}
			/>
		</div>
	)
}

export default Filters
