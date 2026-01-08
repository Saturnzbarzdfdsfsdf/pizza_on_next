import {
	Container,
	Title,
	TopBar,
	Filters,
	ProductsGroupList,
	FilterCheckbox,
	ProductCard,
} from '@/components/shared'


const Home = () => {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold'></Title>
			</Container>

			<TopBar />

			<Container className='mb-14 mt-10'>
				<div className='flex gap-[80px]'>
					{/* Фильтрация Товаров*/}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* Список товаров*/}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								items={[
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
								items={[
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
