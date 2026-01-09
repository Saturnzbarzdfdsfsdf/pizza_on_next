'use client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

import { Api } from '@/shared/api/client/apiClient'

import { Ingredient } from '@/generated/prisma'

interface IReturnProps {
	ingredients: Ingredient[]
	loading: boolean
	selectedId: Set<string>
  onAddId: (id: string) => void
}

const useFiltersIngredients = (): IReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(true)
  const [selectedId, {toggle}] = useSet(new Set<string>([]))

	useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true)
				const ingredients = await Api.ingredients.getAll()
				setIngredients(ingredients)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchIngredients()
	}, [])

	return { ingredients, loading, onAddId: toggle, selectedId }
}

export default useFiltersIngredients
