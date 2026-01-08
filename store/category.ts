import { create } from 'zustand'

interface ICategoryState {
	activeId: number
	setCategoryId: (activeId: number) => void
}

export const useCategoryStore = create<ICategoryState>()(set => ({
	activeId: 1,
	setCategoryId: (activeId: number) => set({ activeId }),
}))
