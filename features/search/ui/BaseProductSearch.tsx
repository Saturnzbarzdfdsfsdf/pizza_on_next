// src/shared/ui/inputs/base-search-input.tsx
'use client'

import { cn } from '@/shared/lib/utils'
import { Search } from 'lucide-react'

export interface BaseSearchInputProps {
	value: string
	onChange: (value: string) => void
	onFocus?: () => void
	placeholder?: string
	icon?: React.ReactNode
	className?: string
	inputClassName?: string
}

export const BaseSearchInput: React.FC<BaseSearchInputProps> = ({
	value,
	onChange,
	onFocus,
	placeholder = 'Search...',
	icon = <Search className='h-5 w-5 text-gray-400' />,
	className,
	inputClassName,
}) => {
	return (
		<div className={cn('relative flex items-center', className)}>
			<div className='absolute left-3 pointer-events-none'>{icon}</div>
			<input
				className={cn(
					'w-full rounded-2xl bg-gray-50 pl-11 pr-4 py-2.5',
					'outline-none focus:ring-2 focus:ring-primary/20',
					inputClassName
				)}
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
				onFocus={onFocus}
			/>
		</div>
	)
}
