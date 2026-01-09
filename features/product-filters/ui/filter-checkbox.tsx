// src/features/product-filters/ui/filter-checkbox.tsx
'use client'

import { Checkbox } from '@/shared/ui/components/index'

interface FilterCheckboxProps {
	text: string
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
}: FilterCheckboxProps) => {
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				id={`filter-${value}`}
				checked={checked}
				onCheckedChange={onCheckedChange}
				className='rounded-lg w-6 h-6'
			/>
			<label
				htmlFor={`filter-${value}`}
				className='leading-none cursor-pointer flex-1'
			>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}
