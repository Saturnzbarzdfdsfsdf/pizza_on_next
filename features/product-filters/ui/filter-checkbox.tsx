// src/features/product-filters/ui/filter-checkbox.tsx
'use client'

import { Checkbox } from '@/shared/ui/components/index'

interface FilterCheckboxProps {
	text: string
	name?: string
	value: string
	endAdornment?: React.ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
}

export const FilterCheckbox = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name
}: FilterCheckboxProps) => {

	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				id={`checkbox-${value}-${name}`}
				checked={checked}
				onCheckedChange={onCheckedChange}
				className='rounded-lg w-6 h-6'
			/>
			<label
				htmlFor={`checkbox-${value}-${name}`}
				className='leading-none cursor-pointer flex-1'
			>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}
