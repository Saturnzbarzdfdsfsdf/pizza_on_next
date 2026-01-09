import { cn } from '@/shared/lib/utils'
import { FC } from 'react'

import { Categories } from '@/features/products-categories/index'
import { SortPopup } from '@/features/sort-popup/index'
import { Container } from '@/shared/ui/container/index'

interface Props {
	className?: string
}

const TopBar: FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
				className
			)}
		>
			<Container className='flex items-center justify-between'>
				<Categories />
				<SortPopup />
			</Container>
		</div>
	)
}

export default TopBar
