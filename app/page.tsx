import { FiltersSidebar } from '@/features/product-filters/index'
import { ProductsGroupList } from '@/widget/catalog/index'

import { TopBar } from '@/widget/catalog/index'

import { Container } from '@/shared/ui/container/index'
import { Title } from '@/shared/ui/title/index'

const Home = () => {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold'></Title>
			</Container>

			<TopBar />

			<Container className='mb-14 mt-10'>
				<div className='flex gap-20'>
					{/* Фильтрация Товаров*/}
					<div className='w-62.5'>
						<FiltersSidebar />
					</div>

					{/* Список товаров*/}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								products={[
									{
										id: 1,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 2,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 3,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 4,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 5,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 6,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Комбо'
								products={[
									{
										id: 1,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 2,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 3,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 4,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 5,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
									{
										id: 6,
										name: 'Маргарита',
										price: 390,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}

export default Home
