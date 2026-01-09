// src/shared/ui/search/search-overlay.tsx
'use client'

import { FC } from "react"

interface SearchOverlayProps {
	isVisible: boolean
}

export const SearchOverlay: FC<SearchOverlayProps> = ({ isVisible }) => {
	if (!isVisible) return null

	return <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
}
