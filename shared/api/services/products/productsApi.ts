// src/features/search-products/api/product-search-api.ts
import { Product } from '@/generated/prisma'

import { axiosInstances } from '@/shared/api/instances/index'
import { ApiRoutes } from '@/shared/api/const/apiRoutes'

export const productSearchApi = {
  search: async (query: string): Promise<Product[]> => {
    const { data } = await axiosInstances.get<Product[]>(
      ApiRoutes.SEARCH_PRODUCTS,
      { params: { query } }
    )
    return data
  },
}
