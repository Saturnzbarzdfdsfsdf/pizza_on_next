import { FC } from 'react'
import { cn } from '@/shared/lib/utils'

interface Props {
	className?: string
}

const Container: FC<React.PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return <div className={cn('mx-auto max-w-7xl', className)}>{children}</div>
}

export default Container
